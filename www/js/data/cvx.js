
angular.module('app.refdata')
    .factory('Cvx', function () {
        return [
            {
                "CvxCode": 998,
                "Description": " no vaccine administered",
                "VaccineName": "no vaccine administered",
                "Note": "Code 998 was added for use in VXU HL7 messages where the OBX segment is nested with the RXA segment, but the message does not contain information about a vaccine administration. An example of this use is to report the vaccines due next for a patient when no vaccine administration is being reported.",
                "VaccineStatus": "Inactive",
                "NonVaccine": true
            },
            {
                "CvxCode": 99,
                "Description": " RESERVED - do not use",
                "VaccineName": "RESERVED - do not use",
                "Note": "Code 99 will not be used in this table to avoid confusion with code 999.",
                "VaccineStatus": "Inactive",
                "NonVaccine": true
            },
            {
                "CvxCode": 999,
                "Description": " unknown",
                "VaccineName": "unknown vaccine or immune globulin",
                "Note": "This CVX code has little utility and should rarely be used.",
                "VaccineStatus": "Inactive",
                "NonVaccine": true
            },
            {
                "CvxCode": 143,
                "Description": "Adenovirus types 4 and 7",
                "VaccineName": "Adenovirus, type 4 and type 7, live, oral",
                "Note": "This vaccine is administered as 2 tablets.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 54,
                "Description": "adenovirus, type 4",
                "VaccineName": "adenovirus vaccine, type 4, live, oral",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 55,
                "Description": "adenovirus, type 7",
                "VaccineName": "adenovirus vaccine, type 7, live, oral",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 82,
                "Description": "adenovirus, unspecified formulation",
                "VaccineName": "adenovirus vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a adenovirus vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 24,
                "Description": "anthrax",
                "VaccineName": "anthrax vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 19,
                "Description": "BCG",
                "VaccineName": "Bacillus Calmette-Guerin vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 27,
                "Description": "botulinum antitoxin",
                "VaccineName": "botulinum antitoxin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 26,
                "Description": "cholera",
                "VaccineName": "cholera vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 29,
                "Description": "CMVIG",
                "VaccineName": "cytomegalovirus immune globulin, intravenous",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 56,
                "Description": "dengue fever",
                "VaccineName": "dengue fever vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 12,
                "Description": "diphtheria antitoxin",
                "VaccineName": "diphtheria antitoxin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 28,
                "Description": "DT (pediatric)",
                "VaccineName": "diphtheria and tetanus toxoids, adsorbed for pediatric use",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 20,
                "Description": "DTaP",
                "VaccineName": "diphtheria, tetanus toxoids and acellular pertussis vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 106,
                "Description": "DTaP, 5 pertussis antigens",
                "VaccineName": "diphtheria, tetanus toxoids and acellular pertussis vaccine, 5 pertussis antigens",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 107,
                "Description": "DTaP, unspecified formulation",
                "VaccineName": "diphtheria, tetanus toxoids and acellular pertussis vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a DTaP vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 146,
                "Description": "DTaP,IPV,Hib,HepB",
                "VaccineName": "Diphtheria and Tetanus Toxoids and Acellular Pertussis Adsorbed, Inactivated Poliovirus, Haemophilus b Conjugate (Meningococcal Outer Membrane Protein Complex), and Hepatitis B (Recombinant) Vaccine.",
                "Note": "Note that this vaccine is different from CVX 132.",
                "VaccineStatus": "Pending",
                "NonVaccine": false
            },
            {
                "CvxCode": 110,
                "Description": "DTaP-Hep B-IPV",
                "VaccineName": "DTaP-hepatitis B and poliovirus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 50,
                "Description": "DTaP-Hib",
                "VaccineName": "DTaP-Haemophilus influenzae type b conjugate vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 120,
                "Description": "DTaP-Hib-IPV",
                "VaccineName": "diphtheria, tetanus toxoids and acellular pertussis vaccine, Haemophilus influenzae type b conjugate, and poliovirus vaccine, inactivated (DTaP-Hib-IPV)",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 130,
                "Description": "DTaP-IPV",
                "VaccineName": "Diphtheria, tetanus toxoids and acellular pertussis vaccine, and poliovirus vaccine, inactivated",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 132,
                "Description": "DTaP-IPV-HIB-HEP B, historical",
                "VaccineName": "Historical record of vaccine containing\n    * diphtheria, tetanus toxoids and acellular pertussis,\n    * poliovirus, inactivated,\n    * Haemophilus influenzae type b conjugate,\n    * Hepatitis B (DTaP-Hib-IPV)",
                "Note": "This is not the same as CVX 146, Hexavalent vaccine.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 1,
                "Description": "DTP",
                "VaccineName": "diphtheria, tetanus toxoids and pertussis vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 22,
                "Description": "DTP-Hib",
                "VaccineName": "DTP-Haemophilus influenzae type b conjugate vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 102,
                "Description": "DTP-Hib-Hep B",
                "VaccineName": "DTP- Haemophilus influenzae type b conjugate and hepatitis b vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 57,
                "Description": "hantavirus",
                "VaccineName": "hantavirus vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 30,
                "Description": "HBIG",
                "VaccineName": "hepatitis B immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 52,
                "Description": "Hep A, adult",
                "VaccineName": "hepatitis A vaccine, adult dosage",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 154,
                "Description": "Hep A, IG",
                "VaccineName": "Hepatitis A immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 83,
                "Description": "Hep A, ped/adol, 2 dose",
                "VaccineName": "hepatitis A vaccine, pediatric/adolescent dosage, 2 dose schedule",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 84,
                "Description": "Hep A, ped/adol, 3 dose",
                "VaccineName": "hepatitis A vaccine, pediatric/adolescent dosage, 3 dose schedule",
                "Note": "This vaccine formulation is inactive and should not be used, except to record historic vaccinations with this formulation.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 31,
                "Description": "Hep A, pediatric, unspecified formulation",
                "VaccineName": "hepatitis A vaccine, pediatric dosage, unspecified formulation",
                "Note": "Do NOT use this code.  If formulation is unknown, use CVX 85.  There is only one formulation of Hep A, peds.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 85,
                "Description": "Hep A, unspecified formulation",
                "VaccineName": "hepatitis A vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a HepA vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 104,
                "Description": "Hep A-Hep B",
                "VaccineName": "hepatitis A and hepatitis B vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 8,
                "Description": "Hep B, adolescent or pediatric",
                "VaccineName": "hepatitis B vaccine, pediatric or pediatric/adolescent dosage",
                "Note": "This code applies to any standard pediatric formulation of Hepatitis B vaccine. It should not be used for the 2-dose hepatitis B schedule for adolescents (11-15 year olds). It requires Merck's Recombivax HB® adult formulation. Use code 43 for that vaccine.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 42,
                "Description": "Hep B, adolescent/high risk infant",
                "VaccineName": "hepatitis B vaccine, adolescent/high risk infant dosage",
                "Note": "As of August 27, 1998, Merck ceased distribution of their adolescent/high risk infant hepatitis B vaccine dosage. Code 42 should only be used to record historical records. For current administration of hepatitis B vaccine, pediatric/adolescent dosage, use code 08.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 43,
                "Description": "Hep B, adult",
                "VaccineName": "hepatitis B vaccine, adult dosage",
                "Note": "As of September 1999, a 2-dose hepatitis B schedule for adolescents (11-15 year olds) was FDA approved for Merck's Recombivax HB® adult formulation. Use code 43 for the 2-dose. This code should be used for any use of standard adult formulation of hepatitis B vaccine.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 44,
                "Description": "Hep B, dialysis",
                "VaccineName": "hepatitis B vaccine, dialysis patient dosage",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 45,
                "Description": "Hep B, unspecified formulation",
                "VaccineName": "hepatitis B vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a HepB vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 58,
                "Description": "Hep C",
                "VaccineName": "hepatitis C vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 59,
                "Description": "Hep E",
                "VaccineName": "hepatitis E vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 60,
                "Description": "herpes simplex 2",
                "VaccineName": "herpes simplex virus, type 2 vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 47,
                "Description": "Hib (HbOC)",
                "VaccineName": "Haemophilus influenzae type b vaccine, HbOC conjugate",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 46,
                "Description": "Hib (PRP-D)",
                "VaccineName": "Haemophilus influenzae type b vaccine, PRP-D conjugate",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 49,
                "Description": "Hib (PRP-OMP)",
                "VaccineName": "Haemophilus influenzae type b vaccine, PRP-OMP conjugate",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 48,
                "Description": "Hib (PRP-T)",
                "VaccineName": "Haemophilus influenzae type b vaccine, PRP-T conjugate",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 17,
                "Description": "Hib, unspecified formulation",
                "VaccineName": "Haemophilus influenzae type b vaccine, conjugate unspecified formulation",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 51,
                "Description": "Hib-Hep B",
                "VaccineName": "Haemophilus influenzae type b conjugate and Hepatitis B vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 61,
                "Description": "HIV",
                "VaccineName": "human immunodeficiency virus vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 118,
                "Description": "HPV, bivalent",
                "VaccineName": "human papilloma virus vaccine, bivalent",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 62,
                "Description": "HPV, quadrivalent",
                "VaccineName": "human papilloma virus vaccine, quadrivalent",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 137,
                "Description": "HPV, unspecified formulation",
                "VaccineName": "HPV, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a HPV vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 86,
                "Description": "IG",
                "VaccineName": "immune globulin, intramuscular",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 14,
                "Description": "IG, unspecified formulation",
                "VaccineName": "immune globulin, unspecified formulation",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 87,
                "Description": "IGIV",
                "VaccineName": "immune globulin, intravenous",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 151,
                "Description": "influenza nasal, unspecified formulation",
                "VaccineName": "influenza nasal, unspecified formulation",
                "Note": "This CVX should only be used for historical records where the formulation of nasal flu vaccine is not known.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 123,
                "Description": "influenza, H5N1-1203",
                "VaccineName": "influenza virus vaccine, H5N1, A/Vietnam/1203/2004 (national stockpile)",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 135,
                "Description": "Influenza, high dose seasonal",
                "VaccineName": "influenza, high dose seasonal, preservative-free",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 153,
                "Description": "Influenza, injectable, MDCK, preservative free",
                "VaccineName": "Influenza, injectable, Madin Darby Canine Kidney, preservative free",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 150,
                "Description": "influenza, injectable, quadrivalent, preservative free",
                "VaccineName": "Influenza, injectable, quadrivalent, preservative free",
                "Note": "New in 2012",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 111,
                "Description": "influenza, live, intranasal",
                "VaccineName": "influenza virus vaccine, live, attenuated, for intranasal use",
                "Note": "Seasonal Influenza",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 149,
                "Description": "influenza, live, intranasal, quadrivalent",
                "VaccineName": "influenza, live, intranasal, quadrivalent",
                "Note": "new in 2012",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 141,
                "Description": "Influenza, seasonal, injectable",
                "VaccineName": "Influenza, seasonal, injectable",
                "Note": "This is one of two codes replacing CVX 15, which is being retired.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 140,
                "Description": "Influenza, seasonal, injectable, preservative free",
                "VaccineName": "Influenza, seasonal, injectable, preservative free",
                "Note": "This vaccine code is one of two which replace CVX 15, influenza, split virus.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 144,
                "Description": "influenza, seasonal, intradermal, preservative free",
                "VaccineName": "seasonal influenza, intradermal, preservative free",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 15,
                "Description": "influenza, split (incl. purified surface antigen)",
                "VaccineName": "influenza virus vaccine, split virus (incl. purified surface antigen)-retired CODE",
                "Note": "This code is being retired. It will still be found in older immunization records. It included both preservative free and non-preservative free.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 88,
                "Description": "influenza, unspecified formulation",
                "VaccineName": "influenza virus vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a Influenza vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 16,
                "Description": "influenza, whole",
                "VaccineName": "influenza virus vaccine, whole virus",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 10,
                "Description": "IPV",
                "VaccineName": "poliovirus vaccine, inactivated",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 134,
                "Description": "Japanese Encephalitis IM",
                "VaccineName": "Japanese Encephalitis vaccine for intramuscular administration",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 39,
                "Description": "Japanese encephalitis SC",
                "VaccineName": "Japanese Encephalitis Vaccine SC",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 129,
                "Description": "Japanese Encephalitis, unspecified formulation",
                "VaccineName": "Japanese Encephalitis vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a JE vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 63,
                "Description": "Junin virus",
                "VaccineName": "Junin virus vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 64,
                "Description": "leishmaniasis",
                "VaccineName": "leishmaniasis vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 65,
                "Description": "leprosy",
                "VaccineName": "leprosy vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 66,
                "Description": "Lyme disease",
                "VaccineName": "Lyme disease vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 4,
                "Description": "M/R",
                "VaccineName": "measles and rubella virus vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 67,
                "Description": "malaria",
                "VaccineName": "malaria vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 5,
                "Description": "measles",
                "VaccineName": "measles virus vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 68,
                "Description": "melanoma",
                "VaccineName": "melanoma vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 103,
                "Description": "meningococcal C conjugate",
                "VaccineName": "meningococcal C conjugate vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 148,
                "Description": "Meningococcal C/Y-HIB PRP",
                "VaccineName": "Meningococcal Groups C and Y and Haemophilus b Tetanus Toxoid Conjugate Vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 147,
                "Description": "meningococcal MCV4, unspecified formulation",
                "VaccineName": "Meningococcal, MCV4, unspecified formulation(groups A, C, Y and W-135)",
                "Note": "This CVX should only be used for historical doses of meningococcal conjugate vaccine where the formulation is unknown (oligosaccharide vs polysaccharide). It is not the same as CVX 108, Meningococcal, unspecified formulation.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 136,
                "Description": "Meningococcal MCV4O",
                "VaccineName": "meningococcal oligosaccharide (groups A, C, Y and W-135) diphtheria toxoid conjugate vaccine (MCV4O)",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 114,
                "Description": "meningococcal MCV4P",
                "VaccineName": "meningococcal polysaccharide (groups A, C, Y and W-135) diphtheria toxoid conjugate vaccine (MCV4P)",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 32,
                "Description": "meningococcal MPSV4",
                "VaccineName": "meningococcal polysaccharide vaccine (MPSV4)",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 108,
                "Description": "meningococcal, unspecified formulation",
                "VaccineName": "meningococcal vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a meningococcal vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 3,
                "Description": "MMR",
                "VaccineName": "measles, mumps and rubella virus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 94,
                "Description": "MMRV",
                "VaccineName": "measles, mumps, rubella, and varicella virus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 7,
                "Description": "mumps",
                "VaccineName": "mumps virus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 127,
                "Description": "Novel influenza-H1N1-09",
                "VaccineName": "Novel influenza-H1N1-09, injectable",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 128,
                "Description": "Novel Influenza-H1N1-09, all formulations",
                "VaccineName": "Novel influenza-H1N1-09, all formulations",
                "Note": "This code is used whenever the actual formulation is not determined or when aggregating all Novel H1N1 Influenza-09 immunizations for reporting to CRA. It should not be used for seasonal influenza vaccine that is not otherwise specified. (NOS)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 125,
                "Description": "Novel Influenza-H1N1-09, nasal",
                "VaccineName": "Novel Influenza-H1N1-09, live virus for nasal administration",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 126,
                "Description": "Novel influenza-H1N1-09, preservative-free",
                "VaccineName": "Novel influenza-H1N1-09, preservative-free, injectable",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 2,
                "Description": "OPV",
                "VaccineName": "poliovirus vaccine, live, oral",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 69,
                "Description": "parainfluenza-3",
                "VaccineName": "parainfluenza-3 virus vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 11,
                "Description": "pertussis",
                "VaccineName": "pertussis vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 23,
                "Description": "plague",
                "VaccineName": "plague vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 133,
                "Description": "Pneumococcal conjugate PCV 13",
                "VaccineName": "pneumococcal conjugate vaccine, 13 valent",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 100,
                "Description": "pneumococcal conjugate PCV 7",
                "VaccineName": "pneumococcal conjugate vaccine, 7 valent",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 152,
                "Description": "Pneumococcal Conjugate, unspecified formulation",
                "VaccineName": "Pneumococcal Conjugate, unspecified formulation",
                "Note": "This CVX should only be used for historical records where the formulation of pneumococcal conjugate vaccine is not known.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 33,
                "Description": "pneumococcal polysaccharide PPV23",
                "VaccineName": "pneumococcal polysaccharide vaccine, 23 valent",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 109,
                "Description": "pneumococcal, unspecified formulation",
                "VaccineName": "pneumococcal vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a pneumococcal vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 89,
                "Description": "polio, unspecified formulation",
                "VaccineName": "poliovirus vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a polio vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 70,
                "Description": "Q fever",
                "VaccineName": "Q fever vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 40,
                "Description": "rabies, intradermal injection",
                "VaccineName": "rabies vaccine, for intradermal injection",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 18,
                "Description": "rabies, intramuscular injection",
                "VaccineName": "rabies vaccine, for intramuscular injection",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 90,
                "Description": "rabies, unspecified formulation",
                "VaccineName": "rabies vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a rabies vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 72,
                "Description": "rheumatic fever",
                "VaccineName": "rheumatic fever vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 73,
                "Description": "Rift Valley fever",
                "VaccineName": "Rift Valley fever vaccine",
                "Note": "",
                "VaccineStatus": "Never Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 34,
                "Description": "RIG",
                "VaccineName": "rabies immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 119,
                "Description": "rotavirus, monovalent",
                "VaccineName": "rotavirus, live, monovalent vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 116,
                "Description": "rotavirus, pentavalent",
                "VaccineName": "rotavirus, live, pentavalent vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 74,
                "Description": "rotavirus, tetravalent",
                "VaccineName": "rotavirus, live, tetravalent vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 122,
                "Description": "rotavirus, unspecified formulation",
                "VaccineName": "rotavirus vaccine, unspecified formulation",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 71,
                "Description": "RSV-IGIV",
                "VaccineName": "respiratory syncytial virus immune globulin, intravenous",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 93,
                "Description": "RSV-MAb",
                "VaccineName": "respiratory syncytial virus monoclonal antibody (palivizumab), intramuscular",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 145,
                "Description": "RSV-MAb (new)",
                "VaccineName": "respiratory syncytial virus monoclonal antibody (motavizumab), intramuscular",
                "Note": "",
                "VaccineStatus": "Pending",
                "NonVaccine": false
            },
            {
                "CvxCode": 6,
                "Description": "rubella",
                "VaccineName": "rubella virus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 38,
                "Description": "rubella/mumps",
                "VaccineName": "rubella and mumps virus vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 76,
                "Description": "Staphylococcus bacterio lysate",
                "VaccineName": "Staphylococcus bacteriophage lysate",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 138,
                "Description": "Td (adult)",
                "VaccineName": "tetanus and diphtheria toxoids, not adsorbed, for adult use",
                "Note": "Note that this Td is not adsorbed.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 113,
                "Description": "Td (adult) preservative free",
                "VaccineName": "tetanus and diphtheria toxoids, adsorbed, preservative free, for adult use",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 9,
                "Description": "Td (adult), adsorbed",
                "VaccineName": "tetanus and diphtheria toxoids, adsorbed, for adult use",
                "Note": "Note that this vaccine name has changed.  See also Td (adult). It is not adsorbed.",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 139,
                "Description": "Td(adult) unspecified formulation",
                "VaccineName": "Td(adult) unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a Td vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 115,
                "Description": "Tdap",
                "VaccineName": "tetanus toxoid, reduced diphtheria toxoid, and acellular pertussis vaccine, adsorbed",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 35,
                "Description": "tetanus toxoid, adsorbed",
                "VaccineName": "tetanus toxoid, adsorbed",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 142,
                "Description": "tetanus toxoid, not adsorbed",
                "VaccineName": "tetanus toxoid, not adsorbed",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 112,
                "Description": "tetanus toxoid, unspecified formulation",
                "VaccineName": "tetanus toxoid, unspecified formulation",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 77,
                "Description": "tick-borne encephalitis",
                "VaccineName": "tick-borne encephalitis vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 13,
                "Description": "TIG",
                "VaccineName": "tetanus immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 98,
                "Description": "TST, unspecified formulation",
                "VaccineName": "tuberculin skin test; unspecified formulation",
                "Note": "TB Skin test is not vaccine.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 95,
                "Description": "TST-OT tine test",
                "VaccineName": "tuberculin skin test; old tuberculin, multipuncture device",
                "Note": "TB Skin test is not vaccine.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 96,
                "Description": "TST-PPD intradermal",
                "VaccineName": "tuberculin skin test; purified protein derivative solution, intradermal",
                "Note": "TB Skin test is not vaccine.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 97,
                "Description": "TST-PPD tine test",
                "VaccineName": "tuberculin skin test; purified protein derivative, multipuncture device",
                "Note": "TB Skin test is not vaccine.",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 78,
                "Description": "tularemia vaccine",
                "VaccineName": "tularemia vaccine",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 25,
                "Description": "typhoid, oral",
                "VaccineName": "typhoid vaccine, live, oral",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 41,
                "Description": "typhoid, parenteral",
                "VaccineName": "typhoid vaccine, parenteral, other than acetone-killed, dried",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 53,
                "Description": "typhoid, parenteral, AKD (U.S. military)",
                "VaccineName": "typhoid vaccine, parenteral, acetone-killed, dried (U.S. military)",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 91,
                "Description": "typhoid, unspecified formulation",
                "VaccineName": "typhoid vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a typhoid vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 101,
                "Description": "typhoid, ViCPs",
                "VaccineName": "typhoid Vi capsular polysaccharide vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 131,
                "Description": "typhus, historical",
                "VaccineName": "Historical record of a typhus vaccination",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 75,
                "Description": "vaccinia (smallpox)",
                "VaccineName": "vaccinia (smallpox) vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 105,
                "Description": "vaccinia (smallpox) diluted",
                "VaccineName": "vaccinia (smallpox) vaccine, diluted",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 79,
                "Description": "vaccinia immune globulin",
                "VaccineName": "vaccinia immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 21,
                "Description": "varicella",
                "VaccineName": "varicella virus vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 81,
                "Description": "VEE, inactivated",
                "VaccineName": "Venezuelan equine encephalitis, inactivated",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 80,
                "Description": "VEE, live",
                "VaccineName": "Venezuelan equine encephalitis, live, attenuated",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 92,
                "Description": "VEE, unspecified formulation",
                "VaccineName": "Venezuelan equine encephalitis vaccine, unspecified formulation",
                "Note": "This CVX code allows reporting of a vaccination when formulation is unknown (for example, when recording a VEE vaccination when noted on a vaccination card)",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 36,
                "Description": "VZIG",
                "VaccineName": "varicella zoster immune globulin",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 117,
                "Description": "VZIG (IND)",
                "VaccineName": "varicella zoster immune globulin (Investigational New Drug)",
                "Note": "",
                "VaccineStatus": "Inactive",
                "NonVaccine": false
            },
            {
                "CvxCode": 37,
                "Description": "yellow fever",
                "VaccineName": "yellow fever vaccine",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            },
            {
                "CvxCode": 121,
                "Description": "zoster",
                "VaccineName": "zoster vaccine, live",
                "Note": "",
                "VaccineStatus": "Active",
                "NonVaccine": false
            }
        ]
            ;
    });