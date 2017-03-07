"use strict";

angular.module('app.services')

    .factory('TextService', function ($log, pouchDB, SettingsService) {
        // Note (JM, 01/30/2017): These will be moved out of the service code into
        // an external resource.
        var appText = {
            ADDRESS : "Address",
            ADMINISTRATION_DATE: "Date of Administration",
            CELL : "cell",
            CITY : "City",
            CODE : "Code",
            CODE_SYS : "Code Sys",
            COUNTRY : "Country",
            CVX_CODE : "Cvx Code",
            BIRTH_DATE: "Birth Date",
            DATE_ADMINISTERED : "Date Administered",
            DESCRIPTION: "Description",
            EMAIL : "Email",
            FIRST_NAME: "First Name",
            GENDER : "Gender",
            // Note (JM, 01/30/2017): "SSN" is not a global concept, so the name needs updated
            GOVERNMENT_ID : "SSN",
            IMMUNIZATIONS : "Immunizations",
            LAST_NAME : "Last Name",
            LOT_NUMBER: "Lot Number",
            MEDICAL_HISTORY : "Medical History",
            NAME : "Name",
            NEW_PATIENT : "New Patient",
            NO_PATIENT_RECORD_SELECTED : "No patient record has been selected.",
            NOTE: "Note",
            PERSONAL : "personal",
            PHONE : "Phone",
            POSTAL_CODE: "Zip Code",
            RECORD_IMMUNIZATION: "Record Immunization",
            STATE : "State",
            STREET : "Street",
            VACCINE: "Vaccine",
            WORK : "work"
        };

        var missingKeys = {};

        function getText(textKey) {
            textKey = (textKey || '(blank)').toUpperCase();
            var text = appText[textKey];
            if(!text) {
                var missingText = appText[textKey] = missingKeys[textKey] = '[?' + textKey + '?]';
                console.log('Missing text key:\n\t"' + textKey + '": "' + missingText + '",');
            }
            return text;
        }

        function formatText(value, formatName) {
            if(typeof value === 'undefined') return value;

            value = value || '';
            formatName = (formatName || '').toUpperCase();

            console.log('Value = ' + value);

            switch(formatName) {
                case 'DATE':
                    var validDate;
                    var dateValue;
                    try {
                        validDate = false;
                        dateValue = new Date(value);
                        validDate = true;
                    }
                    catch(err) {
                        console.log('Invalid date value [' + value + ']');
                    }
                    return (validDate) ? dateValue.toISOString().replace(/^(.{10}).+/, '$1') : value + '!' + formatName;
                case '':
                    return value;
            }
        }

        function getMissingKeys() {
            return missingKeys;
        }

        return {
            get : getText,
            formatText : formatText,
            getMissingKeys : getMissingKeys
        };
    });
