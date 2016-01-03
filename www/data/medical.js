"use strict";

angular.module('data.medical', [])
    .factory('MedicalData', function () {
        return {
            "design_docs": {
                "docs": [
                    {
                        _id: '_design/patients',
                        views: {
                            by_name: {
                                map: function f(doc) {
                                    if (doc.docType == 'medical') {
                                            emit(doc.identity.lastName.toLowerCase());
                                            emit(doc.identity.firstName.toLowerCase());
                                    }
                                }.toString()
                            }
                        }
                    }
        ]},
            "patients":{
            "docs":[{
                "contact": {
                    "email": {
                        "personal": "clarsonrr@multiply.com"
                    },
                    "phone": {
                        "cell": "4-(253)785-9532",
                        "work": "8-(396)606-2663"
                    }
                },
                "address": {
                    "street": "795 Pierstorff Center",
                    "city": "Worcester",
                    "state": "Massachusetts",
                    "postalCode": "01654"
                },
                "geo": {
                    "latitude": "42.3648",
                    "longitude": "-71.8969"
                },
                "docType": "medical",
                "_id": "9eef93cb5e26bc52518c6058bf9b3e48",
                "identity": {
                    "firstName": "Cynthia",
                    "lastName": "Larson",
                    "ssn": "243-75-0810",
                    "gender": "F",
                    "race": "NHOPI",
                    "dob": "2012-02-01T05:00:00.000Z"
                },
                "medical": {
                    "history": [
                        {
                            "code": "VXC27",
                            "codeSys": "CDCPHINVS",
                            "text": "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
                            "caseId": "2013-0779"
                        },
                        {
                            "code": "VXC20",
                            "codeSys": "CDCPHINVS",
                            "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                            "caseId": "2013-0780"
                        },
                        {
                            "code": "VXC20",
                            "codeSys": "CDCPHINVS",
                            "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                            "caseId": "2013-0787"
                        }
                    ],
                    "series": [
                        {
                            "Cvx": "119",
                            "DateAdministered": "2012-04-01T04:00:00.000Z",
                            "Mvx": "SKB",
                            "VaccineName": "ROTARIX"
                        },
                        {
                            "Cvx": "116",
                            "DateAdministered": "2012-04-01T04:00:00.000Z",
                            "Mvx": "MSD",
                            "VaccineName": "ROTATEQ"
                        },
                        {
                            "Cvx": "119",
                            "DateAdministered": "2012-05-01T04:00:00.000Z",
                            "Mvx": "SKB",
                            "VaccineName": "ROTARIX"
                        }
                    ],
                    "cases": [
                        "2013-0001",
                        "2013-0132",
                        "2013-0167",
                        "2013-0383",
                        "2013-0502",
                        "2013-0543",
                        "2013-0575",
                        "2013-0626",
                        "2013-0717",
                        "2013-0779",
                        "2013-0780",
                        "2013-0787"
                    ]
                }
            },
                {
                    "contact": {
                        "email": {
                            "personal": "smcdonaldrq@state.gov"
                        },
                        "phone": {
                            "cell": "3-(594)223-7885",
                            "work": "8-(649)824-6561"
                        }
                    },
                    "address": {
                        "street": "4 Lakeland Way",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92127"
                    },
                    "geo": {
                        "latitude": "33.0279",
                        "longitude": "-117.0856"
                    },
                    "docType": "medical",
                    "_id": "c7fb493e551b1c286cad9ce200f2809d",
                    "identity": {
                        "firstName": "Stephanie",
                        "lastName": "Mcdonald",
                        "ssn": "889-08-3733",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-02-26T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-04-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-05-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-03-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-03-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-06T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-03T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0002",
                            "2013-0003",
                            "2013-0004",
                            "2013-0130",
                            "2013-0131",
                            "2013-0270",
                            "2013-0271",
                            "2013-0580",
                            "2013-0581",
                            "2013-0627",
                            "2013-0675",
                            "2013-0715",
                            "2013-0716"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "phamiltonrp@walmart.com"
                        },
                        "phone": {
                            "cell": "5-(356)711-5638",
                            "work": "4-(197)131-2941"
                        }
                    },
                    "address": {
                        "street": "9796 Southridge Point",
                        "city": "Des Moines",
                        "state": "Iowa",
                        "postalCode": "50369"
                    },
                    "geo": {
                        "latitude": "41.6727",
                        "longitude": "-93.5722"
                    },
                    "docType": "medical",
                    "_id": "0859ddd24b7b699d2abb87571e223742",
                    "identity": {
                        "firstName": "Patricia",
                        "lastName": "Hamilton",
                        "gender": "F",
                        "dob": "2011-08-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-09-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-10-22T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-12-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2012-02-21T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-09-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-11-15T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-24T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-25T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-29T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-09-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-10-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-09-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0005",
                            "2013-0036",
                            "2013-0037",
                            "2013-0109",
                            "2013-0207",
                            "2013-0358",
                            "2013-0582",
                            "2013-0602",
                            "2013-0605",
                            "2013-0606",
                            "2013-0608",
                            "2013-0628",
                            "2013-0646",
                            "2013-0647",
                            "2013-0695",
                            "2013-0731"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sjamesrm@list-manage.com"
                        },
                        "phone": {
                            "cell": "7-(192)375-9035",
                            "work": "9-(443)730-6157"
                        }
                    },
                    "address": {
                        "street": "4 Boyd Parkway",
                        "city": "San Angelo",
                        "state": "Texas",
                        "postalCode": "76905"
                    },
                    "geo": {
                        "latitude": "31.4647",
                        "longitude": "-100.39"
                    },
                    "docType": "medical",
                    "_id": "c2856c8de7b28f36c1b04bc84ac57940",
                    "identity": {
                        "firstName": "Sharon",
                        "lastName": "James",
                        "gender": "F",
                        "dob": "2003-09-16T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2003-11-16T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2003-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-02-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2003-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2004-02-25T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2003-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2004-02-25T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0007",
                            "2013-0092",
                            "2013-0134",
                            "2013-0235",
                            "2013-0384",
                            "2013-0678",
                            "2013-0719"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kmedinarl@archive.org"
                        },
                        "phone": {
                            "cell": "2-(626)467-2312",
                            "work": "0-(125)589-2427"
                        }
                    },
                    "address": {
                        "street": "04736 Schlimgen Crossing",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20010"
                    },
                    "geo": {
                        "latitude": "38.9327",
                        "longitude": "-77.0322"
                    },
                    "docType": "medical",
                    "_id": "74ce36f4ed3fcb0098c2719212309593",
                    "identity": {
                        "firstName": "Kathryn",
                        "lastName": "Medina",
                        "ssn": "524-88-1731",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2004-09-16T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-09-16T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-10-16T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-11-13T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-11-19T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-09-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-11-19T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0008",
                            "2013-0067",
                            "2013-0093",
                            "2013-0135",
                            "2013-0236",
                            "2013-0679",
                            "2013-0720"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mwestrk@comsenz.com"
                        },
                        "phone": {
                            "cell": "9-(708)011-2750",
                            "work": "3-(605)561-5665"
                        }
                    },
                    "address": {
                        "street": "64184 Mallory Junction",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "postalCode": "28284"
                    },
                    "geo": {
                        "latitude": "35.26",
                        "longitude": "-80.8042"
                    },
                    "docType": "medical",
                    "_id": "af435e9155b98faa8e14dc4cfc5d9d02",
                    "identity": {
                        "firstName": "Michelle",
                        "lastName": "West",
                        "ssn": "772-04-7553",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1998-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "09",
                                "DateAdministered": "2006-10-10T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2006-11-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0010"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mcarterrj@eepurl.com"
                        },
                        "phone": {
                            "cell": "8-(734)109-8174",
                            "work": "2-(335)394-5861"
                        }
                    },
                    "address": {
                        "street": "2 Saint Paul Avenue",
                        "city": "Allentown",
                        "state": "Pennsylvania",
                        "postalCode": "18105"
                    },
                    "geo": {
                        "latitude": "40.6934",
                        "longitude": "-75.4712"
                    },
                    "docType": "medical",
                    "_id": "414b2d11899b8e4e814ea8a728d515eb",
                    "identity": {
                        "firstName": "Martha",
                        "lastName": "Carter",
                        "gender": "F",
                        "dob": "2006-01-06T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-03-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-03-15T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-03-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-14T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-03-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-03-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-03-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-10T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-03-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-14T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-03-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0011",
                            "2013-0013",
                            "2013-0014",
                            "2013-0096",
                            "2013-0239",
                            "2013-0632",
                            "2013-0633",
                            "2013-0682"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dryanri@about.com"
                        },
                        "phone": {
                            "cell": "8-(800)142-6330",
                            "work": "5-(600)171-7345"
                        }
                    },
                    "address": {
                        "street": "38 Esker Plaza",
                        "city": "Fort Wayne",
                        "state": "Indiana",
                        "postalCode": "46867"
                    },
                    "geo": {
                        "latitude": "41.0938",
                        "longitude": "-85.0707"
                    },
                    "docType": "medical",
                    "_id": "dfcf66e723c679d40821602ae5f0b4c3",
                    "identity": {
                        "firstName": "Donna",
                        "lastName": "Ryan",
                        "ssn": "597-84-8358",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2005-12-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-01-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-02-17T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-03-13T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-01-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-02-08T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-03-08T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2006-11-26T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-01-25T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-03-27T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-01-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-02-13T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-03-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-29T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0012",
                            "2013-0046",
                            "2013-0047",
                            "2013-0116",
                            "2013-0189",
                            "2013-0259",
                            "2013-0653",
                            "2013-0654",
                            "2013-0702"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "abrownrh@cyberchimps.com"
                        },
                        "phone": {
                            "cell": "1-(259)967-7888",
                            "work": "6-(257)467-7061"
                        }
                    },
                    "address": {
                        "street": "86590 Ohio Circle",
                        "city": "Tulsa",
                        "state": "Oklahoma",
                        "postalCode": "74149"
                    },
                    "geo": {
                        "latitude": "36.1398",
                        "longitude": "-96.0297"
                    },
                    "docType": "medical",
                    "_id": "a4bec4c86459b456fbd72a165de65300",
                    "identity": {
                        "firstName": "Andrea",
                        "lastName": "Brown",
                        "ssn": "258-82-0237",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2006-02-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-08-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-04-29T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-04-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0015",
                            "2013-0042",
                            "2013-0114",
                            "2013-0257",
                            "2013-0634",
                            "2013-0650",
                            "2013-0651",
                            "2013-0700"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "twilliamsrg@lulu.com"
                        },
                        "phone": {
                            "cell": "8-(821)253-2329",
                            "work": "4-(880)200-8860"
                        }
                    },
                    "address": {
                        "street": "28482 Scoville Road",
                        "city": "Round Rock",
                        "state": "Texas",
                        "postalCode": "78682"
                    },
                    "geo": {
                        "latitude": "30.6568",
                        "longitude": "-97.6026"
                    },
                    "docType": "medical",
                    "_id": "2ca7f96d8a20bc1ab88f9cac024ae6a6",
                    "identity": {
                        "firstName": "Tina",
                        "lastName": "Williams",
                        "ssn": "530-22-4032",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2004-03-16T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-11-16T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-03-16T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-04-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0016"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pharrisonre@is.gd"
                        },
                        "phone": {
                            "cell": "8-(345)807-4100",
                            "work": "6-(762)245-5098"
                        }
                    },
                    "address": {
                        "street": "0 Leroy Avenue",
                        "city": "Huntington",
                        "state": "West Virginia",
                        "postalCode": "25709"
                    },
                    "geo": {
                        "latitude": "38.1321",
                        "longitude": "-82.4183"
                    },
                    "docType": "medical",
                    "_id": "38a1a7fcc4ab8d4b167924407aee3997",
                    "identity": {
                        "firstName": "Pamela",
                        "lastName": "Harrison",
                        "ssn": "579-84-7878",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2003-05-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-07-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2010-05-21T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-03-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0017"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dsanchezrd@wp.com"
                        },
                        "phone": {
                            "cell": "1-(033)511-3413",
                            "work": "5-(324)599-4291"
                        }
                    },
                    "address": {
                        "street": "40002 Westerfield Road",
                        "city": "Saint Petersburg",
                        "state": "Florida",
                        "postalCode": "33742"
                    },
                    "geo": {
                        "latitude": "27.8918",
                        "longitude": "-82.7248"
                    },
                    "docType": "medical",
                    "_id": "10422e68ac9c1065aebaff0445fafb4d",
                    "identity": {
                        "firstName": "Diane",
                        "lastName": "Sanchez",
                        "ssn": "644-67-2202",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2004-05-24T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-06-24T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-12-24T05:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            }
                        ],
                        "cases": [
                            "2013-0019"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lbaileyrb@opensource.org"
                        },
                        "phone": {
                            "cell": "1-(205)224-0742",
                            "work": "4-(116)563-6317"
                        }
                    },
                    "address": {
                        "street": "06826 Gulseth Parkway",
                        "city": "Detroit",
                        "state": "Michigan",
                        "postalCode": "48224"
                    },
                    "geo": {
                        "latitude": "42.4098",
                        "longitude": "-82.9441"
                    },
                    "docType": "medical",
                    "_id": "ab611be355b7f658c610714006b17166",
                    "identity": {
                        "firstName": "Lillian",
                        "lastName": "Bailey",
                        "ssn": "851-74-3761",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2003-05-05T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-05-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-06-05T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-11-30T05:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            }
                        ],
                        "cases": [
                            "2013-0020"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jtuckerr9@spiegel.de"
                        },
                        "phone": {
                            "cell": "0-(134)903-8818",
                            "work": "3-(675)837-4115"
                        }
                    },
                    "address": {
                        "street": "9529 Mandrake Park",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20520"
                    },
                    "geo": {
                        "latitude": "38.8932",
                        "longitude": "-77.049"
                    },
                    "docType": "medical",
                    "_id": "dce86939d1f6bfa6b5e0cabc19d554ca",
                    "identity": {
                        "firstName": "Jane",
                        "lastName": "Tucker",
                        "gender": "F",
                        "dob": "2003-11-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "09",
                                "DateAdministered": "2010-11-20T05:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-02-06T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2011-08-02T04:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            }
                        ],
                        "cases": [
                            "2013-0021"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tmontgomeryr8@ovh.net"
                        },
                        "phone": {
                            "cell": "3-(955)702-1728",
                            "work": "7-(203)694-9771"
                        }
                    },
                    "address": {
                        "street": "227 Coleman Place",
                        "city": "Jamaica",
                        "state": "New York",
                        "postalCode": "11470"
                    },
                    "geo": {
                        "latitude": "40.6914",
                        "longitude": "-73.8061"
                    },
                    "docType": "medical",
                    "_id": "999f5424ed1806060be7b7d4726c8be1",
                    "identity": {
                        "firstName": "Tammy",
                        "lastName": "Montgomery",
                        "ssn": "934-71-4355",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2005-01-06T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-07-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0022"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dhillr7@imgur.com"
                        },
                        "phone": {
                            "cell": "7-(360)255-9727",
                            "work": "8-(523)329-0794"
                        }
                    },
                    "address": {
                        "street": "88927 Declaration Plaza",
                        "city": "Sterling",
                        "state": "Virginia",
                        "postalCode": "20167"
                    },
                    "geo": {
                        "latitude": "39.0853",
                        "longitude": "-77.6452"
                    },
                    "docType": "medical",
                    "_id": "1e93f24da6fcc32f3e0794b5b0127561",
                    "identity": {
                        "firstName": "Doris",
                        "lastName": "Hill",
                        "ssn": "806-49-3358",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2004-10-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0023"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "abennettr6@mapy.cz"
                        },
                        "phone": {
                            "cell": "5-(603)636-7250",
                            "work": "0-(224)006-7753"
                        }
                    },
                    "address": {
                        "street": "4487 Valley Edge Parkway",
                        "city": "Winston Salem",
                        "state": "North Carolina",
                        "postalCode": "27110"
                    },
                    "geo": {
                        "latitude": "36.0275",
                        "longitude": "-80.2073"
                    },
                    "docType": "medical",
                    "_id": "9e42cbae9eceb681d6813be1696319e9",
                    "identity": {
                        "firstName": "Ann",
                        "lastName": "Bennett",
                        "gender": "F",
                        "dob": "2005-03-18T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-06-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-10-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-03-20T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0024"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "fchapmanr4@theguardian.com"
                        },
                        "phone": {
                            "cell": "1-(612)006-7125",
                            "work": "4-(261)897-9479"
                        }
                    },
                    "address": {
                        "street": "580 Dunning Circle",
                        "city": "Jamaica",
                        "state": "New York",
                        "postalCode": "11431"
                    },
                    "geo": {
                        "latitude": "40.6869",
                        "longitude": "-73.8501"
                    },
                    "docType": "medical",
                    "_id": "02f266ff555d9b0c178f1bc7bbfae6f8",
                    "identity": {
                        "firstName": "Frances",
                        "lastName": "Chapman",
                        "ssn": "589-82-8259",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-04-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-09-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-01-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-05-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-03T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-31T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-10T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-05-14T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-10T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-05-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-03T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-31T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-30T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-31T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0025",
                            "2013-0051",
                            "2013-0100",
                            "2013-0119",
                            "2013-0120",
                            "2013-0139",
                            "2013-0140",
                            "2013-0141",
                            "2013-0154",
                            "2013-0155",
                            "2013-0243",
                            "2013-0262",
                            "2013-0263",
                            "2013-0371",
                            "2013-0372",
                            "2013-0373",
                            "2013-0686",
                            "2013-0724",
                            "2013-0725",
                            "2013-0726"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kwilliamsr3@canalblog.com"
                        },
                        "phone": {
                            "cell": "7-(430)470-2069",
                            "work": "3-(383)873-9220"
                        }
                    },
                    "address": {
                        "street": "189 Vernon Street",
                        "city": "Minneapolis",
                        "state": "Minnesota",
                        "postalCode": "55436"
                    },
                    "geo": {
                        "latitude": "44.9034",
                        "longitude": "-93.374"
                    },
                    "docType": "medical",
                    "_id": "3b86dd34933b47098c6af4107d9fcd7a",
                    "identity": {
                        "firstName": "Kelly",
                        "lastName": "Williams",
                        "ssn": "437-24-3470",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "38907003",
                                "codeSys": "SCT",
                                "text": "History of varicella infection",
                                "caseId": "2013-0835"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-11-28T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-05-28T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-07-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-09-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2005-12-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2006-01-21T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-07-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-09-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-10-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-07-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-09-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0026",
                            "2013-0095",
                            "2013-0102",
                            "2013-0202",
                            "2013-0238",
                            "2013-0245",
                            "2013-0642",
                            "2013-0681",
                            "2013-0688",
                            "2013-0835"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bryanr2@unicef.org"
                        },
                        "phone": {
                            "cell": "0-(675)230-6784",
                            "work": "8-(229)618-5572"
                        }
                    },
                    "address": {
                        "street": "281 Maywood Center",
                        "city": "Atlanta",
                        "state": "Georgia",
                        "postalCode": "30316"
                    },
                    "geo": {
                        "latitude": "33.7217",
                        "longitude": "-84.3339"
                    },
                    "docType": "medical",
                    "_id": "3ec8cd59f404ed2cf17e05a6ddf75bce",
                    "identity": {
                        "firstName": "Brenda",
                        "lastName": "Ryan",
                        "ssn": "443-10-4779",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2006-04-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-06-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-08-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-10-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-10-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0027",
                            "2013-0112",
                            "2013-0170",
                            "2013-0255",
                            "2013-0698"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cgordonqx@fotki.com"
                        },
                        "phone": {
                            "cell": "4-(896)999-4358",
                            "work": "7-(967)999-5317"
                        }
                    },
                    "address": {
                        "street": "39677 Schlimgen Lane",
                        "city": "Alexandria",
                        "state": "Virginia",
                        "postalCode": "22309"
                    },
                    "geo": {
                        "latitude": "38.7192",
                        "longitude": "-77.1073"
                    },
                    "docType": "medical",
                    "_id": "0208bf374b8048138a351fe63182cc57",
                    "identity": {
                        "firstName": "Carol",
                        "lastName": "Gordon",
                        "ssn": "543-31-4371",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2006-05-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-08-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-03-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2006-09-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-04-28T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-11-02T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-03-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2006-09-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-04-28T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-12-12T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-05-10T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-03-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2006-09-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-04-28T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-11-06T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-05-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0028",
                            "2013-0104",
                            "2013-0142",
                            "2013-0247",
                            "2013-0374",
                            "2013-0690",
                            "2013-0727"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jmarshallqu@sbwire.com"
                        },
                        "phone": {
                            "cell": "8-(415)000-3634",
                            "work": "0-(168)795-6670"
                        }
                    },
                    "address": {
                        "street": "087 Susan Alley",
                        "city": "New York City",
                        "state": "New York",
                        "postalCode": "10260"
                    },
                    "geo": {
                        "latitude": "40.7808",
                        "longitude": "-73.9772"
                    },
                    "docType": "medical",
                    "_id": "405c33a10e2a587ac55970e1c5341bc9",
                    "identity": {
                        "firstName": "Julie",
                        "lastName": "Marshall",
                        "ssn": "218-71-8189",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2000-02-25T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-02-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-10-27T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-04-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0029"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lpriceqp@si.edu"
                        },
                        "phone": {
                            "cell": "1-(678)309-3242",
                            "work": "4-(220)034-0700"
                        }
                    },
                    "address": {
                        "street": "418 Park Meadow Court",
                        "city": "Davenport",
                        "state": "Iowa",
                        "postalCode": "52809"
                    },
                    "geo": {
                        "latitude": "41.613",
                        "longitude": "-90.6063"
                    },
                    "docType": "medical",
                    "_id": "41d2b922def233c13abf8cd751843d4a",
                    "identity": {
                        "firstName": "Linda",
                        "lastName": "Price",
                        "ssn": "651-01-5762",
                        "gender": "F",
                        "race": "White",
                        "dob": "2006-07-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-06-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-06-27T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-12-14T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-03-03T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-09-19T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0030",
                            "2013-0031",
                            "2013-0032",
                            "2013-0105",
                            "2013-0106",
                            "2013-0248",
                            "2013-0249",
                            "2013-0691",
                            "2013-0692"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mrichardsqn@wix.com"
                        },
                        "phone": {
                            "cell": "9-(897)741-7971",
                            "work": "9-(218)430-1629"
                        }
                    },
                    "address": {
                        "street": "253 Chinook Parkway",
                        "city": "Miami",
                        "state": "Florida",
                        "postalCode": "33185"
                    },
                    "geo": {
                        "latitude": "25.7274",
                        "longitude": "-80.4497"
                    },
                    "docType": "medical",
                    "_id": "6a3701d45fe39ea14509cd3923c7875b",
                    "identity": {
                        "firstName": "Michelle",
                        "lastName": "Richards",
                        "ssn": "205-12-4812",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2011-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-06-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "50",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "TRIHIBIT"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-29T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-10-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-24T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-12-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0033",
                            "2013-0078",
                            "2013-0168",
                            "2013-0172",
                            "2013-0183",
                            "2013-0184",
                            "2013-0229"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jramosql@msu.edu"
                        },
                        "phone": {
                            "cell": "2-(065)494-9270",
                            "work": "2-(347)092-1049"
                        }
                    },
                    "address": {
                        "street": "257 Kensington Lane",
                        "city": "Tyler",
                        "state": "Texas",
                        "postalCode": "75799"
                    },
                    "geo": {
                        "latitude": "32.4112",
                        "longitude": "-95.2899"
                    },
                    "docType": "medical",
                    "_id": "71e848a638ede8da2417c619b2eb820c",
                    "identity": {
                        "firstName": "Joan",
                        "lastName": "Ramos",
                        "ssn": "366-69-3885",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2008-04-02T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-08-02T04:00:00.000Z",
                                "Mvx": "",
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-10-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "",
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-02T04:00:00.000Z",
                                "Mvx": "",
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-10-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0034"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "showardqk@scientificamerican.com"
                        },
                        "phone": {
                            "cell": "1-(769)683-0751",
                            "work": "1-(192)495-7246"
                        }
                    },
                    "address": {
                        "street": "930 Burrows Circle",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20508"
                    },
                    "geo": {
                        "latitude": "38.8933",
                        "longitude": "-77.0146"
                    },
                    "docType": "medical",
                    "_id": "347bec0a732c94cd7785b7d3b1feaaa1",
                    "identity": {
                        "firstName": "Sandra",
                        "lastName": "Howard",
                        "ssn": "697-18-6476",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "1998-04-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "1998-06-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "1998-08-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "1998-10-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "1999-07-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2003-07-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "09",
                                "DateAdministered": "2010-12-12T05:00:00.000Z",
                                "Mvx": "MBL",
                                "VaccineName": "TD(GENERIC)"
                            }
                        ],
                        "cases": [
                            "2013-0035"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aparkerqi@abc.net.au"
                        },
                        "phone": {
                            "cell": "5-(535)009-9445",
                            "work": "3-(028)917-4312"
                        }
                    },
                    "address": {
                        "street": "76 Bowman Parkway",
                        "city": "Rochester",
                        "state": "New York",
                        "postalCode": "14683"
                    },
                    "geo": {
                        "latitude": "43.286",
                        "longitude": "-77.6843"
                    },
                    "docType": "medical",
                    "_id": "f8dd9988ebebc9de456e8efc059aec50",
                    "identity": {
                        "firstName": "Andrea",
                        "lastName": "Parker",
                        "ssn": "209-81-6985",
                        "gender": "F",
                        "race": "White",
                        "dob": "2010-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-13T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-06-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-07-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-03T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-07-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-05-28T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-03T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-07-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-12-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-27T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-12-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-28T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-07-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-08-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-09-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-03T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-07-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-06T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-07-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0038",
                            "2013-0111",
                            "2013-0136",
                            "2013-0137",
                            "2013-0146",
                            "2013-0190",
                            "2013-0357",
                            "2013-0370",
                            "2013-0381",
                            "2013-0598",
                            "2013-0599",
                            "2013-0631",
                            "2013-0697",
                            "2013-0721",
                            "2013-0722",
                            "2013-0733"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mruizqf@chron.com"
                        },
                        "phone": {
                            "cell": "2-(222)480-7642",
                            "work": "2-(539)605-1406"
                        }
                    },
                    "address": {
                        "street": "9325 Northfield Center",
                        "city": "Arlington",
                        "state": "Virginia",
                        "postalCode": "22205"
                    },
                    "geo": {
                        "latitude": "38.8836",
                        "longitude": "-77.1395"
                    },
                    "docType": "medical",
                    "_id": "61c384c811d03adc4f7d7afc0c24e291",
                    "identity": {
                        "firstName": "Maria",
                        "lastName": "Ruiz",
                        "ssn": "608-90-9345",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2007-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-09-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-10-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0039"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rcarrollqe@weebly.com"
                        },
                        "phone": {
                            "cell": "5-(240)073-6672",
                            "work": "4-(389)034-1811"
                        }
                    },
                    "address": {
                        "street": "2 Derek Center",
                        "city": "New York City",
                        "state": "New York",
                        "postalCode": "10115"
                    },
                    "geo": {
                        "latitude": "40.8111",
                        "longitude": "-73.9642"
                    },
                    "docType": "medical",
                    "_id": "77f5f03f11351c81dc460bdb465168f1",
                    "identity": {
                        "firstName": "Robin",
                        "lastName": "Carroll",
                        "ssn": "982-75-8468",
                        "gender": "F",
                        "race": "White",
                        "dob": "2000-06-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-08-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-10-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-12-20T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2001-09-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2003-07-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-06-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0040"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "gsimpsonqb@senate.gov"
                        },
                        "phone": {
                            "cell": "5-(658)952-1779",
                            "work": "4-(431)996-9805"
                        }
                    },
                    "address": {
                        "street": "914 Katie Way",
                        "city": "Midland",
                        "state": "Michigan",
                        "postalCode": "48670"
                    },
                    "geo": {
                        "latitude": "43.6375",
                        "longitude": "-84.2568"
                    },
                    "docType": "medical",
                    "_id": "f779f2cd2040ce210bae8fef0607afd5",
                    "identity": {
                        "firstName": "Gloria",
                        "lastName": "Simpson",
                        "ssn": "620-54-9317",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2006-03-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-05-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-05-27T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0041"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lthomasqa@guardian.co.uk"
                        },
                        "phone": {
                            "cell": "0-(431)024-5372",
                            "work": "6-(528)272-7520"
                        }
                    },
                    "address": {
                        "street": "7 Bayside Plaza",
                        "city": "Springfield",
                        "state": "Missouri",
                        "postalCode": "65805"
                    },
                    "geo": {
                        "latitude": "37.2581",
                        "longitude": "-93.3437"
                    },
                    "docType": "medical",
                    "_id": "3fbeae1c7ca2c3f553a90139f1814265",
                    "identity": {
                        "firstName": "Lillian",
                        "lastName": "Thomas",
                        "ssn": "950-15-5775",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-04-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "14189004",
                                "codeSys": "SCT",
                                "text": "History of measles infection",
                                "caseId": "2013-0566"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-04-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0043",
                            "2013-0191",
                            "2013-0566"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "asanchezq8@fc2.com"
                        },
                        "phone": {
                            "cell": "9-(616)317-4299",
                            "work": "4-(282)921-5037"
                        }
                    },
                    "address": {
                        "street": "29092 Summerview Avenue",
                        "city": "Virginia Beach",
                        "state": "Virginia",
                        "postalCode": "23464"
                    },
                    "geo": {
                        "latitude": "36.7978",
                        "longitude": "-76.1759"
                    },
                    "docType": "medical",
                    "_id": "5c570fe66fe6959ba25cd394fafb7efa",
                    "identity": {
                        "firstName": "Angela",
                        "lastName": "Sanchez",
                        "ssn": "895-05-0425",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2006-04-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-05-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-05-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0044",
                            "2013-0669"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jmcdonaldq7@amazonaws.com"
                        },
                        "phone": {
                            "cell": "5-(230)792-7026",
                            "work": "4-(992)119-2195"
                        }
                    },
                    "address": {
                        "street": "95 Victoria Pass",
                        "city": "Pompano Beach",
                        "state": "Florida",
                        "postalCode": "33075"
                    },
                    "geo": {
                        "latitude": "26.1457",
                        "longitude": "-80.4483"
                    },
                    "docType": "medical",
                    "_id": "8f87cba6c6a3925049f2462b246b8c26",
                    "identity": {
                        "firstName": "Julie",
                        "lastName": "Mcdonald",
                        "ssn": "465-60-1229",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-04-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-06-13T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-08-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-06-13T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-13T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-05T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0045",
                            "2013-0609"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "atorresq4@woothemes.com"
                        },
                        "phone": {
                            "cell": "4-(974)023-1179",
                            "work": "4-(414)790-3222"
                        }
                    },
                    "address": {
                        "street": "4042 Pearson Road",
                        "city": "Columbia",
                        "state": "Missouri",
                        "postalCode": "65218"
                    },
                    "geo": {
                        "latitude": "38.9033",
                        "longitude": "-92.1022"
                    },
                    "docType": "medical",
                    "_id": "58caa908c90dd68b34eb3a0e07d00859",
                    "identity": {
                        "firstName": "Angela",
                        "lastName": "Torres",
                        "gender": "F",
                        "dob": "2009-08-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-10-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-12-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-02-15T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-10-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-12-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-02-15T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-02-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-10-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-04-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-08-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-02-09T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-10-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-10-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-10-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2011-04-05T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-10-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-10-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-02-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-10-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0049",
                            "2013-0050",
                            "2013-0117",
                            "2013-0118",
                            "2013-0153",
                            "2013-0186",
                            "2013-0194",
                            "2013-0195",
                            "2013-0196",
                            "2013-0197",
                            "2013-0260",
                            "2013-0261",
                            "2013-0704",
                            "2013-0740"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sharrisonq2@opera.com"
                        },
                        "phone": {
                            "cell": "7-(815)940-3630",
                            "work": "0-(601)811-4410"
                        }
                    },
                    "address": {
                        "street": "82 Vermont Center",
                        "city": "Plano",
                        "state": "Texas",
                        "postalCode": "75074"
                    },
                    "geo": {
                        "latitude": "33.0277",
                        "longitude": "-96.6777"
                    },
                    "docType": "medical",
                    "_id": "dfdcc78753f7855a349c2a2a5cb07618",
                    "identity": {
                        "firstName": "Susan",
                        "lastName": "Harrison",
                        "ssn": "185-42-3456",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2009-11-10T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-01-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-03-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-11-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2010-11-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-11-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2010-11-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0052",
                            "2013-0549",
                            "2013-0817",
                            "2013-0818"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lmorrisonq1@merriam-webster.com"
                        },
                        "phone": {
                            "cell": "6-(624)133-2402",
                            "work": "8-(775)047-0646"
                        }
                    },
                    "address": {
                        "street": "7 Sherman Alley",
                        "city": "New York City",
                        "state": "New York",
                        "postalCode": "10150"
                    },
                    "geo": {
                        "latitude": "40.7808",
                        "longitude": "-73.9772"
                    },
                    "docType": "medical",
                    "_id": "60907aeaf983fa670b0ce705b51fec59",
                    "identity": {
                        "firstName": "Lori",
                        "lastName": "Morrison",
                        "ssn": "376-03-8890",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2009-02-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2009-08-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-02-15T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-06-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-05-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-06-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-05-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-03-31T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-04-23T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-08-11T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-02-11T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-05-03T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-08-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-04-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-06-11T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-05-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0053",
                            "2013-0121",
                            "2013-0156",
                            "2013-0264",
                            "2013-0382",
                            "2013-0615",
                            "2013-0659",
                            "2013-0707",
                            "2013-0743"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jricepz@bravesites.com"
                        },
                        "phone": {
                            "cell": "1-(174)617-3774",
                            "work": "2-(849)887-7987"
                        }
                    },
                    "address": {
                        "street": "49581 Blaine Court",
                        "city": "Phoenix",
                        "state": "Arizona",
                        "postalCode": "85015"
                    },
                    "geo": {
                        "latitude": "33.5082",
                        "longitude": "-112.1011"
                    },
                    "docType": "medical",
                    "_id": "769c33988b65a8a85e5cadbbfe3b2451",
                    "identity": {
                        "firstName": "Julie",
                        "lastName": "Rice",
                        "ssn": "191-31-2046",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2010-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-05-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-06-21T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-23T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-02-05T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-09-10T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-02T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-02T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-06-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-04-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-23T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-02-05T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0054",
                            "2013-0122",
                            "2013-0157",
                            "2013-0265",
                            "2013-0616",
                            "2013-0708",
                            "2013-0744"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ejacobspw@paginegialle.it"
                        },
                        "phone": {
                            "cell": "4-(083)846-7023",
                            "work": "1-(135)367-7590"
                        }
                    },
                    "address": {
                        "street": "70897 Maple Avenue",
                        "city": "Fayetteville",
                        "state": "North Carolina",
                        "postalCode": "28314"
                    },
                    "geo": {
                        "latitude": "35.0583",
                        "longitude": "-79.008"
                    },
                    "docType": "medical",
                    "_id": "b613779756c9055887712c392861f595",
                    "identity": {
                        "firstName": "Elizabeth",
                        "lastName": "Jacobs",
                        "ssn": "797-12-3455",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2011-11-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-07T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-25T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-26T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-07T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2011-12-13T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-03T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            }
                        ],
                        "cases": [
                            "2013-0055",
                            "2013-0066",
                            "2013-0123",
                            "2013-0266",
                            "2013-0618",
                            "2013-0622",
                            "2013-0672",
                            "2013-0673",
                            "2013-0709",
                            "2013-0754",
                            "2013-0755",
                            "2013-0759",
                            "2013-0760",
                            "2013-0761",
                            "2013-0785",
                            "2013-0786"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mstevenspu@toplist.cz"
                        },
                        "phone": {
                            "cell": "2-(422)185-5738",
                            "work": "4-(737)512-0935"
                        }
                    },
                    "address": {
                        "street": "759 Ridge Oak Road",
                        "city": "Columbia",
                        "state": "South Carolina",
                        "postalCode": "29208"
                    },
                    "geo": {
                        "latitude": "33.9937",
                        "longitude": "-81.0199"
                    },
                    "docType": "medical",
                    "_id": "b872b9497bb1661a22dd482ea7b14184",
                    "identity": {
                        "firstName": "Mary",
                        "lastName": "Stevens",
                        "ssn": "519-13-7054",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2010-03-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-08-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-10-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-12-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-03-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-03-13T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-03-14T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-05-18T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-09-18T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-10T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-10T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-06-05T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0056",
                            "2013-0588",
                            "2013-0589",
                            "2013-0617"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rvasquezpt@rediff.com"
                        },
                        "phone": {
                            "cell": "3-(915)220-7163",
                            "work": "8-(803)072-3438"
                        }
                    },
                    "address": {
                        "street": "99495 Glendale Road",
                        "city": "Chicago",
                        "state": "Illinois",
                        "postalCode": "60674"
                    },
                    "geo": {
                        "latitude": "41.8119",
                        "longitude": "-87.6873"
                    },
                    "docType": "medical",
                    "_id": "602a0c3d16d2178b94af81e642c22b1b",
                    "identity": {
                        "firstName": "Rebecca",
                        "lastName": "Vasquez",
                        "ssn": "567-12-5076",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2000-02-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-04-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-06-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-08-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2003-10-30T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-02-12T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-02-12T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0057"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dpowellpq@ftc.gov"
                        },
                        "phone": {
                            "cell": "0-(074)795-0040",
                            "work": "1-(747)570-9191"
                        }
                    },
                    "address": {
                        "street": "408 Crescent Oaks Lane",
                        "city": "Asheville",
                        "state": "North Carolina",
                        "postalCode": "28805"
                    },
                    "geo": {
                        "latitude": "35.6004",
                        "longitude": "-82.4918"
                    },
                    "docType": "medical",
                    "_id": "ee846130d14f42b12efc255f0fa9056a",
                    "identity": {
                        "firstName": "Diana",
                        "lastName": "Powell",
                        "ssn": "809-11-1558",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2010-03-05T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "115",
                                "DateAdministered": "2010-05-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-09-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-05-05T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2010-07-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-09-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-03-05T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0058",
                            "2013-0059"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pblackpp@mozilla.org"
                        },
                        "phone": {
                            "cell": "5-(114)786-5390",
                            "work": "1-(124)591-1701"
                        }
                    },
                    "address": {
                        "street": "48 Jana Junction",
                        "city": "Anaheim",
                        "state": "California",
                        "postalCode": "92805"
                    },
                    "geo": {
                        "latitude": "33.8359",
                        "longitude": "-117.9086"
                    },
                    "docType": "medical",
                    "_id": "7559d8cd0fe661f99f41c880672a3f0a",
                    "identity": {
                        "firstName": "Paula",
                        "lastName": "Black",
                        "ssn": "776-92-6740",
                        "gender": "F",
                        "race": "White",
                        "dob": "2010-02-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2010-11-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-05-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-24T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-25T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0060",
                            "2013-0061",
                            "2013-0584",
                            "2013-0585"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "klopezpo@skype.com"
                        },
                        "phone": {
                            "cell": "7-(741)174-3529",
                            "work": "7-(974)976-9790"
                        }
                    },
                    "address": {
                        "street": "856 Kropf Plaza",
                        "city": "Brooklyn",
                        "state": "New York",
                        "postalCode": "11225"
                    },
                    "geo": {
                        "latitude": "40.6628",
                        "longitude": "-73.9546"
                    },
                    "docType": "medical",
                    "_id": "da409d9866aebac3cc7561dcac467b77",
                    "identity": {
                        "firstName": "Kelly",
                        "lastName": "Lopez",
                        "ssn": "697-33-8707",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2007-02-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-02-06T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-02-07T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2007-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-02-11T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2007-03-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2007-08-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2007-09-22T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-02-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-03-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-02-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-10-11T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-02-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0062",
                            "2013-0063",
                            "2013-0064",
                            "2013-0203",
                            "2013-0637",
                            "2013-0640"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jkelleypl@skyrock.com"
                        },
                        "phone": {
                            "cell": "0-(826)054-1816",
                            "work": "5-(873)333-3767"
                        }
                    },
                    "address": {
                        "street": "82 Gulseth Drive",
                        "city": "Tacoma",
                        "state": "Washington",
                        "postalCode": "98442"
                    },
                    "geo": {
                        "latitude": "47.3081",
                        "longitude": "-122.4185"
                    },
                    "docType": "medical",
                    "_id": "97628bef75be8664d03a8369cfa15016",
                    "identity": {
                        "firstName": "Jean",
                        "lastName": "Kelley",
                        "ssn": "306-42-6115",
                        "gender": "F",
                        "race": "White",
                        "dob": "2005-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "38907003",
                                "codeSys": "SCT",
                                "text": "History of varicella infection",
                                "caseId": "2013-0802"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "115",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-09-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-06-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-28T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2005-02-08T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2005-03-08T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2005-02-08T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2005-03-09T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-29T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-07-29T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-11-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-07-28T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-28T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-12-29T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2009-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-05-27T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2006-04-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2007-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-09-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-12-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-09-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2005-12-27T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2005-12-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0065",
                            "2013-0091",
                            "2013-0133",
                            "2013-0234",
                            "2013-0285",
                            "2013-0289",
                            "2013-0290",
                            "2013-0291",
                            "2013-0292",
                            "2013-0293",
                            "2013-0314",
                            "2013-0317",
                            "2013-0318",
                            "2013-0319",
                            "2013-0324",
                            "2013-0325",
                            "2013-0328",
                            "2013-0329",
                            "2013-0330",
                            "2013-0334",
                            "2013-0335",
                            "2013-0336",
                            "2013-0337",
                            "2013-0338",
                            "2013-0339",
                            "2013-0340",
                            "2013-0341",
                            "2013-0342",
                            "2013-0351",
                            "2013-0354",
                            "2013-0356",
                            "2013-0677",
                            "2013-0718",
                            "2013-0798",
                            "2013-0802",
                            "2013-0803",
                            "2013-0804",
                            "2013-0805"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sortizpk@canalblog.com"
                        },
                        "phone": {
                            "cell": "2-(459)001-9288",
                            "work": "3-(251)130-9010"
                        }
                    },
                    "address": {
                        "street": "23 Mayer Place",
                        "city": "San Antonio",
                        "state": "Texas",
                        "postalCode": "78278"
                    },
                    "geo": {
                        "latitude": "29.4375",
                        "longitude": "-98.4616"
                    },
                    "docType": "medical",
                    "_id": "2719104ff04f7e5589303df62bd177df",
                    "identity": {
                        "firstName": "Susan",
                        "lastName": "Ortiz",
                        "ssn": "909-85-8273",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2004-09-20T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-09-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-10-28T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2012-04-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0068"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jpetersonpi@walmart.com"
                        },
                        "phone": {
                            "cell": "3-(966)923-1666",
                            "work": "1-(775)041-3997"
                        }
                    },
                    "address": {
                        "street": "8511 Glendale Junction",
                        "city": "Roanoke",
                        "state": "Virginia",
                        "postalCode": "24024"
                    },
                    "geo": {
                        "latitude": "37.2742",
                        "longitude": "-79.9579"
                    },
                    "docType": "medical",
                    "_id": "51273de2950087a0e76260612fbdfb43",
                    "identity": {
                        "firstName": "Jane",
                        "lastName": "Peterson",
                        "ssn": "910-27-3671",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2003-03-08T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "115",
                                "DateAdministered": "2010-03-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0069"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lgarrettpf@foxnews.com"
                        },
                        "phone": {
                            "cell": "8-(839)275-3149",
                            "work": "5-(368)646-9229"
                        }
                    },
                    "address": {
                        "street": "45 Dottie Avenue",
                        "city": "Birmingham",
                        "state": "Alabama",
                        "postalCode": "35210"
                    },
                    "geo": {
                        "latitude": "33.5452",
                        "longitude": "-86.6655"
                    },
                    "docType": "medical",
                    "_id": "851008a54fc0ee4eecd19841015f5000",
                    "identity": {
                        "firstName": "Lillian",
                        "lastName": "Garrett",
                        "ssn": "635-82-4633",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2000-03-03T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-05-05T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-07-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-09-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2001-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-05-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2011-05-09T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0070"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dholmespe@blinklist.com"
                        },
                        "phone": {
                            "cell": "1-(337)355-9458",
                            "work": "3-(013)550-2919"
                        }
                    },
                    "address": {
                        "street": "66107 Kingsford Court",
                        "city": "Tallahassee",
                        "state": "Florida",
                        "postalCode": "32309"
                    },
                    "geo": {
                        "latitude": "30.5422",
                        "longitude": "-84.1413"
                    },
                    "docType": "medical",
                    "_id": "db1130dcc96f3a7acc5f03f02251a424",
                    "identity": {
                        "firstName": "Deborah",
                        "lastName": "Holmes",
                        "ssn": "379-03-1126",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2001-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC22",
                                "codeSys": "CDCPHINVS",
                                "text": "encephalopathy within 7 days of previous dose of DTP or DTaP",
                                "caseId": "2013-0071"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2001-04-02T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "28",
                                "DateAdministered": "2001-06-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "DT(GENERIC)"
                            },
                            {
                                "Cvx": "28",
                                "DateAdministered": "2001-08-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "DT(GENERIC)"
                            },
                            {
                                "Cvx": "28",
                                "DateAdministered": "2002-05-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "DT(GENERIC)"
                            },
                            {
                                "Cvx": "28",
                                "DateAdministered": "2006-05-05T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "DT(GENERIC)"
                            }
                        ],
                        "cases": [
                            "2013-0071"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bmoorepc@mysql.com"
                        },
                        "phone": {
                            "cell": "6-(321)614-5814",
                            "work": "8-(221)367-9090"
                        }
                    },
                    "address": {
                        "street": "7085 Paget Avenue",
                        "city": "Birmingham",
                        "state": "Alabama",
                        "postalCode": "35242"
                    },
                    "geo": {
                        "latitude": "33.3813",
                        "longitude": "-86.7046"
                    },
                    "docType": "medical",
                    "_id": "ed88ef6efe1c93de72f923ac37128d8f",
                    "identity": {
                        "firstName": "Betty",
                        "lastName": "Moore",
                        "gender": "F",
                        "dob": "2000-08-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC22",
                                "codeSys": "CDCPHINVS",
                                "text": "encephalopathy within 7 days of previous dose of DTP or DTaP",
                                "caseId": "2013-0072"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2000-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2001-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2001-11-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-08-10T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0072"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dmorganpb@shutterfly.com"
                        },
                        "phone": {
                            "cell": "4-(049)060-8963",
                            "work": "2-(854)911-5134"
                        }
                    },
                    "address": {
                        "street": "6 Shoshone Park",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20520"
                    },
                    "geo": {
                        "latitude": "38.8932",
                        "longitude": "-77.049"
                    },
                    "docType": "medical",
                    "_id": "cf03f6e9e522309b0f11b76d743c359f",
                    "identity": {
                        "firstName": "Denise",
                        "lastName": "Morgan",
                        "ssn": "673-57-1465",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2010-10-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0073"
                            },
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0126"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2010-12-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-14T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-14T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-14T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-10-10T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-11-07T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0073",
                            "2013-0126",
                            "2013-0164",
                            "2013-0165",
                            "2013-0368",
                            "2013-0369",
                            "2013-0750",
                            "2013-0751",
                            "2013-0816"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rstanleyp8@parallels.com"
                        },
                        "phone": {
                            "cell": "5-(837)901-7848",
                            "work": "8-(143)381-9212"
                        }
                    },
                    "address": {
                        "street": "2 Farwell Trail",
                        "city": "Tampa",
                        "state": "Florida",
                        "postalCode": "33620"
                    },
                    "geo": {
                        "latitude": "28.06",
                        "longitude": "-82.4079"
                    },
                    "docType": "medical",
                    "_id": "16c386305eee0128b5ccf74e54c4452e",
                    "identity": {
                        "firstName": "Rachel",
                        "lastName": "Stanley",
                        "ssn": "740-37-2799",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1995-05-05T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "22",
                                "DateAdministered": "1995-07-05T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1995-09-05T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1995-11-05T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1996-10-05T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            }
                        ],
                        "cases": [
                            "2013-0074"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tmontgomeryp1@elpais.com"
                        },
                        "phone": {
                            "cell": "8-(254)654-2690",
                            "work": "7-(240)068-3650"
                        }
                    },
                    "address": {
                        "street": "0300 Grasskamp Circle",
                        "city": "Boise",
                        "state": "Idaho",
                        "postalCode": "83716"
                    },
                    "geo": {
                        "latitude": "43.5345",
                        "longitude": "-115.9711"
                    },
                    "docType": "medical",
                    "_id": "b9e4ee5da5ceceb21d5f8fc5f52a676c",
                    "identity": {
                        "firstName": "Tammy",
                        "lastName": "Montgomery",
                        "ssn": "653-31-1439",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1999-12-12T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "22",
                                "DateAdministered": "2000-02-15T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "2000-04-15T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "2000-06-15T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "2001-02-15T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2004-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0075"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "khawkinsox@icq.com"
                        },
                        "phone": {
                            "cell": "6-(413)431-5201",
                            "work": "7-(381)332-3510"
                        }
                    },
                    "address": {
                        "street": "800 Northview Park",
                        "city": "Topeka",
                        "state": "Kansas",
                        "postalCode": "66611"
                    },
                    "geo": {
                        "latitude": "39.0142",
                        "longitude": "-95.6982"
                    },
                    "docType": "medical",
                    "_id": "d967b78eb2ed9c1adbb7fe7e14c3693c",
                    "identity": {
                        "firstName": "Kathleen",
                        "lastName": "Hawkins",
                        "ssn": "877-30-5672",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1996-03-03T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "22",
                                "DateAdministered": "1996-05-05T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1996-08-08T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1997-01-04T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "22",
                                "DateAdministered": "1998-04-04T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "TETRAMUNE"
                            },
                            {
                                "Cvx": "115",
                                "DateAdministered": "2007-03-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "BOOSTRIX"
                            }
                        ],
                        "cases": [
                            "2013-0076"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "emooreou@buzzfeed.com"
                        },
                        "phone": {
                            "cell": "0-(748)713-3811",
                            "work": "6-(621)279-6235"
                        }
                    },
                    "address": {
                        "street": "21 Merry Plaza",
                        "city": "Phoenix",
                        "state": "Arizona",
                        "postalCode": "85025"
                    },
                    "geo": {
                        "latitude": "33.4226",
                        "longitude": "-111.7236"
                    },
                    "docType": "medical",
                    "_id": "3dce60ba197aa4e011fd70595a26f33e",
                    "identity": {
                        "firstName": "Elizabeth",
                        "lastName": "Moore",
                        "ssn": "308-13-2537",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2005-11-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0077"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bmatthewsor@forbes.com"
                        },
                        "phone": {
                            "cell": "3-(023)259-1250",
                            "work": "1-(149)734-1389"
                        }
                    },
                    "address": {
                        "street": "18959 Straubel Plaza",
                        "city": "Baltimore",
                        "state": "Maryland",
                        "postalCode": "21239"
                    },
                    "geo": {
                        "latitude": "39.361",
                        "longitude": "-76.5891"
                    },
                    "docType": "medical",
                    "_id": "17d68c3015f30481d26a665c32911efc",
                    "identity": {
                        "firstName": "Barbara",
                        "lastName": "Matthews",
                        "ssn": "220-94-5683",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2008-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-08-08T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "50",
                                "DateAdministered": "2009-05-19T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "TRIHIBIT"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-04-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-06-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-06-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2012-02-04T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0079",
                            "2013-0660"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "skingoq@engadget.com"
                        },
                        "phone": {
                            "cell": "5-(713)962-6939",
                            "work": "8-(092)365-4394"
                        }
                    },
                    "address": {
                        "street": "115 Hintze Parkway",
                        "city": "Dayton",
                        "state": "Ohio",
                        "postalCode": "45426"
                    },
                    "geo": {
                        "latitude": "39.7982",
                        "longitude": "-84.3211"
                    },
                    "docType": "medical",
                    "_id": "e8c17061d1869aa4cc41cec04a3f34d5",
                    "identity": {
                        "firstName": "Stephanie",
                        "lastName": "King",
                        "ssn": "383-04-0914",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2006-10-08T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-11-29T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-01-29T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-03-29T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "50",
                                "DateAdministered": "2010-10-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "TRIHIBIT"
                            }
                        ],
                        "cases": [
                            "2013-0080"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jjenkinson@wired.com"
                        },
                        "phone": {
                            "cell": "3-(474)251-3532",
                            "work": "5-(330)619-4291"
                        }
                    },
                    "address": {
                        "street": "5306 Jackson Lane",
                        "city": "Seattle",
                        "state": "Washington",
                        "postalCode": "98185"
                    },
                    "geo": {
                        "latitude": "47.4323",
                        "longitude": "-121.8034"
                    },
                    "docType": "medical",
                    "_id": "baf6965b4fd2fb4c39b3d625b6968561",
                    "identity": {
                        "firstName": "Judith",
                        "lastName": "Jenkins",
                        "ssn": "750-53-1973",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2009-10-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "102",
                                "DateAdministered": "2010-02-18T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "PENTAVALENTE"
                            },
                            {
                                "Cvx": "102",
                                "DateAdministered": "2010-04-18T04:00:00.000Z",
                                "Mvx": "",
                                "VaccineName": "PENTAVALENTE"
                            },
                            {
                                "Cvx": "102",
                                "DateAdministered": "2010-06-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "PENTAVALENTE"
                            },
                            {
                                "Cvx": "102",
                                "DateAdministered": "2010-12-27T05:00:00.000Z",
                                "Mvx": "",
                                "VaccineName": "PENTAVALENTE"
                            }
                        ],
                        "cases": [
                            "2013-0081"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tfullerom@craigslist.org"
                        },
                        "phone": {
                            "cell": "2-(315)182-0027",
                            "work": "0-(030)683-5688"
                        }
                    },
                    "address": {
                        "street": "482 Muir Plaza",
                        "city": "Nashville",
                        "state": "Tennessee",
                        "postalCode": "37235"
                    },
                    "geo": {
                        "latitude": "36.1866",
                        "longitude": "-86.7852"
                    },
                    "docType": "medical",
                    "_id": "b87e0194ee3f40ac7f6134de09a425d4",
                    "identity": {
                        "firstName": "Tammy",
                        "lastName": "Fuller",
                        "ssn": "532-40-2484",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-11-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-11T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-11T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0082",
                            "2013-0664"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cpetersonoh@slashdot.org"
                        },
                        "phone": {
                            "cell": "7-(038)329-3341",
                            "work": "1-(609)355-9665"
                        }
                    },
                    "address": {
                        "street": "963 Schlimgen Street",
                        "city": "Denton",
                        "state": "Texas",
                        "postalCode": "76205"
                    },
                    "geo": {
                        "latitude": "33.1903",
                        "longitude": "-97.1282"
                    },
                    "docType": "medical",
                    "_id": "34033513e205b65dde356c049de51972",
                    "identity": {
                        "firstName": "Cheryl",
                        "lastName": "Peterson",
                        "ssn": "228-93-4264",
                        "gender": "F",
                        "race": "White",
                        "dob": "2011-09-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-11-15T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0083",
                            "2013-0665"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lgardnerog@pagesperso-orange.fr"
                        },
                        "phone": {
                            "cell": "5-(505)153-3301",
                            "work": "1-(915)703-6633"
                        }
                    },
                    "address": {
                        "street": "01 Spaight Hill",
                        "city": "Las Vegas",
                        "state": "Nevada",
                        "postalCode": "89120"
                    },
                    "geo": {
                        "latitude": "36.0914",
                        "longitude": "-115.0885"
                    },
                    "docType": "medical",
                    "_id": "d48886a780fbe3f14a5135a13af34547",
                    "identity": {
                        "firstName": "Linda",
                        "lastName": "Gardner",
                        "ssn": "791-72-4619",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-09-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2011-11-11T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-07T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-09-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-11-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2012-01-07T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0084",
                            "2013-0666"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mrayof@tuttocitta.it"
                        },
                        "phone": {
                            "cell": "3-(417)358-6115",
                            "work": "7-(704)608-5530"
                        }
                    },
                    "address": {
                        "street": "11665 Center Point",
                        "city": "Wichita",
                        "state": "Kansas",
                        "postalCode": "67260"
                    },
                    "geo": {
                        "latitude": "37.7194",
                        "longitude": "-97.2936"
                    },
                    "docType": "medical",
                    "_id": "153a0959e992ecaba23e10dd68abb61e",
                    "identity": {
                        "firstName": "Margaret",
                        "lastName": "Ray",
                        "ssn": "809-51-6853",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2006-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-09-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-11-11T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2006-12-30T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2007-07-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-10-18T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-12-09T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2007-02-03T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-09-09T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-11-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2006-12-30T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2007-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0085",
                            "2013-0223",
                            "2013-0667"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rsullivanoc@miibeian.gov.cn"
                        },
                        "phone": {
                            "cell": "2-(955)333-1270",
                            "work": "6-(612)373-5255"
                        }
                    },
                    "address": {
                        "street": "9149 John Wall Avenue",
                        "city": "San Bernardino",
                        "state": "California",
                        "postalCode": "92410"
                    },
                    "geo": {
                        "latitude": "34.1069",
                        "longitude": "-117.2975"
                    },
                    "docType": "medical",
                    "_id": "a47be84770b367341bee3513ec8170a6",
                    "identity": {
                        "firstName": "Robin",
                        "lastName": "Sullivan",
                        "ssn": "922-88-9570",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2006-10-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-12-06T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-04-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-12-06T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-04-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2010-10-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0086",
                            "2013-0668"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mwebbob@alibaba.com"
                        },
                        "phone": {
                            "cell": "3-(107)428-0449",
                            "work": "3-(010)550-5729"
                        }
                    },
                    "address": {
                        "street": "78 Porter Terrace",
                        "city": "Fort Worth",
                        "state": "Texas",
                        "postalCode": "76198"
                    },
                    "geo": {
                        "latitude": "32.7714",
                        "longitude": "-97.2915"
                    },
                    "docType": "medical",
                    "_id": "84437b775c7321b4b499a1ba203e8b3f",
                    "identity": {
                        "firstName": "Mildred",
                        "lastName": "Webb",
                        "ssn": "826-54-4789",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2007-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-08-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-03-05T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-11-19T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2011-07-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-07-07T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-08-30T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-10-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-03-05T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2011-07-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0087",
                            "2013-0569",
                            "2013-0670"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sbutlero8@tamu.edu"
                        },
                        "phone": {
                            "cell": "6-(001)698-9630",
                            "work": "9-(038)764-1676"
                        }
                    },
                    "address": {
                        "street": "0434 Schlimgen Circle",
                        "city": "Pinellas Park",
                        "state": "Florida",
                        "postalCode": "34665"
                    },
                    "geo": {
                        "latitude": "27.8402",
                        "longitude": "-82.7125"
                    },
                    "docType": "medical",
                    "_id": "7aaedb9164a8e5c41d8075174f068492",
                    "identity": {
                        "firstName": "Sarah",
                        "lastName": "Butler",
                        "ssn": "150-44-2251",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-02-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0088",
                            "2013-0128",
                            "2013-0163",
                            "2013-0268",
                            "2013-0713",
                            "2013-0749"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jrobertso6@zdnet.com"
                        },
                        "phone": {
                            "cell": "7-(909)140-3968",
                            "work": "4-(244)749-0194"
                        }
                    },
                    "address": {
                        "street": "26082 Northfield Alley",
                        "city": "Garden Grove",
                        "state": "California",
                        "postalCode": "92844"
                    },
                    "geo": {
                        "latitude": "33.7661",
                        "longitude": "-117.9738"
                    },
                    "docType": "medical",
                    "_id": "f14b6a32420508e8523ba6c030980d04",
                    "identity": {
                        "firstName": "Joyce",
                        "lastName": "Roberts",
                        "ssn": "264-09-0387",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2007-10-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-12-07T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-04-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-12-27T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2011-10-14T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-12-07T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-04-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "130",
                                "DateAdministered": "2011-10-14T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "KINRIX"
                            }
                        ],
                        "cases": [
                            "2013-0089",
                            "2013-0671"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "asimmonso5@pen.io"
                        },
                        "phone": {
                            "cell": "3-(776)927-7574",
                            "work": "5-(115)284-9059"
                        }
                    },
                    "address": {
                        "street": "85427 Pond Plaza",
                        "city": "Fort Worth",
                        "state": "Texas",
                        "postalCode": "76129"
                    },
                    "geo": {
                        "latitude": "32.7714",
                        "longitude": "-97.2915"
                    },
                    "docType": "medical",
                    "_id": "b58e43f7f0f0ebac582087b081feb182",
                    "identity": {
                        "firstName": "Annie",
                        "lastName": "Simmons",
                        "ssn": "219-01-4207",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2012-04-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0090",
                            "2013-0233",
                            "2013-0676",
                            "2013-0753",
                            "2013-0806"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mpattersono4@hugedomains.com"
                        },
                        "phone": {
                            "cell": "3-(036)723-1555",
                            "work": "2-(622)371-9401"
                        }
                    },
                    "address": {
                        "street": "676 Sundown Street",
                        "city": "Eugene",
                        "state": "Oregon",
                        "postalCode": "97405"
                    },
                    "geo": {
                        "latitude": "44.0185",
                        "longitude": "-123.0998"
                    },
                    "docType": "medical",
                    "_id": "cab5e1229d506513e5f175dc9a4b52da",
                    "identity": {
                        "firstName": "Mildred",
                        "lastName": "Patterson",
                        "gender": "F",
                        "dob": "2002-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-07-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-07-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-07-07T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-08-04T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0094",
                            "2013-0237",
                            "2013-0680"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tstanleyo3@networksolutions.com"
                        },
                        "phone": {
                            "cell": "6-(551)973-4188",
                            "work": "3-(334)560-6819"
                        }
                    },
                    "address": {
                        "street": "888 Forest Dale Lane",
                        "city": "Madison",
                        "state": "Wisconsin",
                        "postalCode": "53790"
                    },
                    "geo": {
                        "latitude": "43.0696",
                        "longitude": "-89.4239"
                    },
                    "docType": "medical",
                    "_id": "8fec2268efff8464a2e087ec072fac48",
                    "identity": {
                        "firstName": "Tina",
                        "lastName": "Stanley",
                        "ssn": "420-08-0853",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-05-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-10-23T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-06-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-10-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-10-23T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-10-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0097",
                            "2013-0241",
                            "2013-0683",
                            "2013-0684"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mcarpentero2@nbcnews.com"
                        },
                        "phone": {
                            "cell": "0-(799)061-7374",
                            "work": "7-(425)726-4075"
                        }
                    },
                    "address": {
                        "street": "9 Schiller Junction",
                        "city": "Appleton",
                        "state": "Wisconsin",
                        "postalCode": "54915"
                    },
                    "geo": {
                        "latitude": "44.2425",
                        "longitude": "-88.3564"
                    },
                    "docType": "medical",
                    "_id": "a7918b8144049c969db9768addc1b2e4",
                    "identity": {
                        "firstName": "Melissa",
                        "lastName": "Carpenter",
                        "gender": "F",
                        "dob": "2004-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-05-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-08-08T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2007-05-05T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-08-08T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0099",
                            "2013-0685"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cmorriso1@w3.org"
                        },
                        "phone": {
                            "cell": "3-(243)117-8358",
                            "work": "2-(993)058-8167"
                        }
                    },
                    "address": {
                        "street": "41529 Carioca Avenue",
                        "city": "Cedar Rapids",
                        "state": "Iowa",
                        "postalCode": "52405"
                    },
                    "geo": {
                        "latitude": "41.9804",
                        "longitude": "-91.7098"
                    },
                    "docType": "medical",
                    "_id": "538d23462aac1d821aab182083ab5b88",
                    "identity": {
                        "firstName": "Carolyn",
                        "lastName": "Morris",
                        "ssn": "592-81-5625",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-05-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-12T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0101",
                            "2013-0244",
                            "2013-0687"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tcarrollnz@globo.com"
                        },
                        "phone": {
                            "cell": "0-(419)892-5493",
                            "work": "1-(071)925-6360"
                        }
                    },
                    "address": {
                        "street": "05102 Golf Trail",
                        "city": "Huntsville",
                        "state": "Alabama",
                        "postalCode": "35810"
                    },
                    "geo": {
                        "latitude": "34.7784",
                        "longitude": "-86.6091"
                    },
                    "docType": "medical",
                    "_id": "79e3f54046f46ca1681affad3f1b152e",
                    "identity": {
                        "firstName": "Teresa",
                        "lastName": "Carroll",
                        "ssn": "420-06-1360",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2008-02-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-04-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-04-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-04-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-01-15T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0103",
                            "2013-0246",
                            "2013-0689"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rthomasnx@washingtonpost.com"
                        },
                        "phone": {
                            "cell": "7-(702)798-2696",
                            "work": "8-(913)306-5220"
                        }
                    },
                    "address": {
                        "street": "54 Chive Park",
                        "city": "Huntington Beach",
                        "state": "California",
                        "postalCode": "92648"
                    },
                    "geo": {
                        "latitude": "33.6773",
                        "longitude": "-118.0051"
                    },
                    "docType": "medical",
                    "_id": "578d0c49be32aee0e2961a428e2852a9",
                    "identity": {
                        "firstName": "Rose",
                        "lastName": "Thomas",
                        "ssn": "247-52-2731",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-04-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-10-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0107",
                            "2013-0127",
                            "2013-0250",
                            "2013-0267",
                            "2013-0693",
                            "2013-0712"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kharpernw@google.it"
                        },
                        "phone": {
                            "cell": "4-(566)083-1298",
                            "work": "9-(358)763-3682"
                        }
                    },
                    "address": {
                        "street": "2764 Summit Way",
                        "city": "North Little Rock",
                        "state": "Arkansas",
                        "postalCode": "72118"
                    },
                    "geo": {
                        "latitude": "34.8337",
                        "longitude": "-92.3289"
                    },
                    "docType": "medical",
                    "_id": "88cb28c07b3c0705cabb37d19d8d1998",
                    "identity": {
                        "firstName": "Kathy",
                        "lastName": "Harper",
                        "ssn": "301-97-2538",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-11-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-11-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2005-11-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2006-11-16T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0108",
                            "2013-0251",
                            "2013-0694"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sgarrettnv@senate.gov"
                        },
                        "phone": {
                            "cell": "2-(136)689-1766",
                            "work": "7-(035)452-8536"
                        }
                    },
                    "address": {
                        "street": "98 Comanche Crossing",
                        "city": "Seattle",
                        "state": "Washington",
                        "postalCode": "98133"
                    },
                    "geo": {
                        "latitude": "47.7377",
                        "longitude": "-122.3431"
                    },
                    "docType": "medical",
                    "_id": "6b137391d8eeff2f681b4fc50e38b63d",
                    "identity": {
                        "firstName": "Shirley",
                        "lastName": "Garrett",
                        "ssn": "159-79-7335",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-10-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-11-25T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-12-21T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-25T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-22T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-10-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-25T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-22T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-10-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-11-25T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2010-12-21T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-11-25T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-12-22T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-03-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-10-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0110",
                            "2013-0145",
                            "2013-0380",
                            "2013-0696",
                            "2013-0732"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "vhudsonnt@google.co.uk"
                        },
                        "phone": {
                            "cell": "1-(047)782-9580",
                            "work": "9-(560)979-1361"
                        }
                    },
                    "address": {
                        "street": "0 Grim Junction",
                        "city": "Atlanta",
                        "state": "Georgia",
                        "postalCode": "30340"
                    },
                    "geo": {
                        "latitude": "33.8932",
                        "longitude": "-84.2539"
                    },
                    "docType": "medical",
                    "_id": "f33a48f283f1b5b36e8d11df3d4e861e",
                    "identity": {
                        "firstName": "Virginia",
                        "lastName": "Hudson",
                        "ssn": "122-50-9493",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-11-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-26T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-26T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-03T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-01-26T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0113",
                            "2013-0256",
                            "2013-0699"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jpalmerns@statcounter.com"
                        },
                        "phone": {
                            "cell": "6-(922)763-0901",
                            "work": "2-(544)402-9846"
                        }
                    },
                    "address": {
                        "street": "53 John Wall Point",
                        "city": "Richmond",
                        "state": "Virginia",
                        "postalCode": "23237"
                    },
                    "geo": {
                        "latitude": "37.4011",
                        "longitude": "-77.4615"
                    },
                    "docType": "medical",
                    "_id": "4d627aa81f05f2c0f71d3a1cffd02b28",
                    "identity": {
                        "firstName": "Jennifer",
                        "lastName": "Palmer",
                        "ssn": "250-85-5841",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-04-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-09-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-09-27T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-05-24T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-04-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-04-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-07-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-09-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-09T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0115",
                            "2013-0177",
                            "2013-0178",
                            "2013-0179",
                            "2013-0199",
                            "2013-0200",
                            "2013-0201",
                            "2013-0209",
                            "2013-0220",
                            "2013-0232",
                            "2013-0258",
                            "2013-0607",
                            "2013-0701"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lschmidtnr@latimes.com"
                        },
                        "phone": {
                            "cell": "2-(139)441-4564",
                            "work": "4-(914)214-3448"
                        }
                    },
                    "address": {
                        "street": "15 6th Alley",
                        "city": "Topeka",
                        "state": "Kansas",
                        "postalCode": "66622"
                    },
                    "geo": {
                        "latitude": "39.0429",
                        "longitude": "-95.7697"
                    },
                    "docType": "medical",
                    "_id": "1c880f5a0fcaf2e4b772554fd4df8e24",
                    "identity": {
                        "firstName": "Lori",
                        "lastName": "Schmidt",
                        "ssn": "290-68-1017",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2008-03-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-05-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2008-07-18T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-02-12T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2009-06-10T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2012-03-20T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-07-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-12-28T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-03-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-03-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0124",
                            "2013-0158"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dwarrennq@fda.gov"
                        },
                        "phone": {
                            "cell": "2-(517)182-7332",
                            "work": "8-(878)485-5694"
                        }
                    },
                    "address": {
                        "street": "6 Utah Avenue",
                        "city": "Midland",
                        "state": "Michigan",
                        "postalCode": "48670"
                    },
                    "geo": {
                        "latitude": "43.6375",
                        "longitude": "-84.2568"
                    },
                    "docType": "medical",
                    "_id": "50e8312e5fc049f5a7c5420c6f9801cc",
                    "identity": {
                        "firstName": "Doris",
                        "lastName": "Warren",
                        "ssn": "999-89-1384",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC22",
                                "codeSys": "CDCPHINVS",
                                "text": "encephalopathy within 7 days of previous dose of DTP or DTaP",
                                "caseId": "2013-0125"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-04-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "52",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "HAVRIX-ADULT"
                            }
                        ],
                        "cases": [
                            "2013-0125",
                            "2013-0188"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "driveranp@imageshack.us"
                        },
                        "phone": {
                            "cell": "4-(173)596-6222",
                            "work": "6-(991)753-5049"
                        }
                    },
                    "address": {
                        "street": "3833 Trailsway Plaza",
                        "city": "Toledo",
                        "state": "Ohio",
                        "postalCode": "43656"
                    },
                    "geo": {
                        "latitude": "41.6782",
                        "longitude": "-83.4972"
                    },
                    "docType": "medical",
                    "_id": "af44879714795e48b7556ce69f2fa23a",
                    "identity": {
                        "firstName": "Dorothy",
                        "lastName": "Rivera",
                        "ssn": "814-50-1824",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-10-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-11-17T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-14T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-11-17T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-14T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-11-17T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            },
                            {
                                "Cvx": "110",
                                "DateAdministered": "2011-12-14T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "PEDIARIX"
                            }
                        ],
                        "cases": [
                            "2013-0129",
                            "2013-0269",
                            "2013-0714"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "scarrollno@usatoday.com"
                        },
                        "phone": {
                            "cell": "5-(748)536-0223",
                            "work": "0-(230)552-5459"
                        }
                    },
                    "address": {
                        "street": "442 Kennedy Junction",
                        "city": "Rockville",
                        "state": "Maryland",
                        "postalCode": "20851"
                    },
                    "geo": {
                        "latitude": "39.0763",
                        "longitude": "-77.1234"
                    },
                    "docType": "medical",
                    "_id": "e4abc5ca7b937428524d3ce0e6f4dc5a",
                    "identity": {
                        "firstName": "Stephanie",
                        "lastName": "Carroll",
                        "ssn": "827-79-6809",
                        "gender": "F",
                        "race": "White",
                        "dob": "2005-01-15T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "107",
                                "DateAdministered": "2005-03-12T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "107",
                                "DateAdministered": "2008-06-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "DTaP Unspecified"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-30T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-01-02T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-03-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-05-15T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-12-30T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-01-02T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2011-01-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0138",
                            "2013-0162",
                            "2013-0166",
                            "2013-0723",
                            "2013-0748",
                            "2013-0752"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jboydnm@list-manage.com"
                        },
                        "phone": {
                            "cell": "1-(635)575-9378",
                            "work": "3-(091)363-5232"
                        }
                    },
                    "address": {
                        "street": "7 Reinke Pass",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20546"
                    },
                    "geo": {
                        "latitude": "38.891",
                        "longitude": "-77.0211"
                    },
                    "docType": "medical",
                    "_id": "49f3b9769e3743f694bcc344f803801a",
                    "identity": {
                        "firstName": "Jacqueline",
                        "lastName": "Boyd",
                        "ssn": "355-52-3744",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2008-02-08T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-01-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-07-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-01-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-07-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-01-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-04-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-07-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2009-12-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0143",
                            "2013-0376",
                            "2013-0729"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rbryantnk@histats.com"
                        },
                        "phone": {
                            "cell": "3-(791)654-5941",
                            "work": "2-(907)177-4484"
                        }
                    },
                    "address": {
                        "street": "50418 Heath Plaza",
                        "city": "Port Saint Lucie",
                        "state": "Florida",
                        "postalCode": "34985"
                    },
                    "geo": {
                        "latitude": "27.3822",
                        "longitude": "-80.409"
                    },
                    "docType": "medical",
                    "_id": "cfc509c6ceaaa51ee828c30ed2e84aef",
                    "identity": {
                        "firstName": "Ruth",
                        "lastName": "Bryant",
                        "ssn": "567-63-1934",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2007-02-08T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-06-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-12-05T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-02-07T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-06-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-12-05T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-02-07T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-06-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2007-12-05T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-02-07T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2012-02-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0144",
                            "2013-0375",
                            "2013-0730"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ahicksnj@examiner.com"
                        },
                        "phone": {
                            "cell": "2-(818)259-9704",
                            "work": "7-(948)167-5825"
                        }
                    },
                    "address": {
                        "street": "8 Badeau Road",
                        "city": "Manchester",
                        "state": "New Hampshire",
                        "postalCode": "03105"
                    },
                    "geo": {
                        "latitude": "42.9521",
                        "longitude": "-71.6539"
                    },
                    "docType": "medical",
                    "_id": "f2baa7390e63986a4d37cd065daea459",
                    "identity": {
                        "firstName": "Annie",
                        "lastName": "Hicks",
                        "ssn": "118-18-2610",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2009-11-09T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-26T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-26T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-26T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0147",
                            "2013-0378",
                            "2013-0734"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lperryni@mapy.cz"
                        },
                        "phone": {
                            "cell": "2-(661)489-9091",
                            "work": "8-(179)827-9555"
                        }
                    },
                    "address": {
                        "street": "845 2nd Way",
                        "city": "Oklahoma City",
                        "state": "Oklahoma",
                        "postalCode": "73167"
                    },
                    "geo": {
                        "latitude": "35.5514",
                        "longitude": "-97.4075"
                    },
                    "docType": "medical",
                    "_id": "a46526bf8697fd9496ef203a5d17e43a",
                    "identity": {
                        "firstName": "Louise",
                        "lastName": "Perry",
                        "ssn": "338-16-7883",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2009-11-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-03T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-01-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0148",
                            "2013-0359",
                            "2013-0735"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lpowellng@cyberchimps.com"
                        },
                        "phone": {
                            "cell": "3-(848)687-9996",
                            "work": "3-(753)955-4643"
                        }
                    },
                    "address": {
                        "street": "446 Petterle Park",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20470"
                    },
                    "geo": {
                        "latitude": "38.8933",
                        "longitude": "-77.0146"
                    },
                    "docType": "medical",
                    "_id": "82826ae7d3bc83db9b24be4e7fd63f83",
                    "identity": {
                        "firstName": "Lori",
                        "lastName": "Powell",
                        "ssn": "475-82-9256",
                        "gender": "F",
                        "race": "White",
                        "dob": "2008-04-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-08-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0149",
                            "2013-0150",
                            "2013-0360",
                            "2013-0379",
                            "2013-0736",
                            "2013-0737"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kburtonnd@weebly.com"
                        },
                        "phone": {
                            "cell": "1-(753)902-6550",
                            "work": "4-(516)710-7186"
                        }
                    },
                    "address": {
                        "street": "20688 Hintze Alley",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20260"
                    },
                    "geo": {
                        "latitude": "38.8933",
                        "longitude": "-77.0146"
                    },
                    "docType": "medical",
                    "_id": "eb994648d1c3955f5fcc513ca21b8e46",
                    "identity": {
                        "firstName": "Kathleen",
                        "lastName": "Burton",
                        "ssn": "144-85-4367",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2008-04-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-12T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-12T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-12T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2008-05-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0152",
                            "2013-0161",
                            "2013-0365",
                            "2013-0366",
                            "2013-0739",
                            "2013-0747"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "agilbertnc@foxnews.com"
                        },
                        "phone": {
                            "cell": "8-(256)049-8072",
                            "work": "6-(051)795-9365"
                        }
                    },
                    "address": {
                        "street": "37083 Milwaukee Crossing",
                        "city": "Cleveland",
                        "state": "Ohio",
                        "postalCode": "44185"
                    },
                    "geo": {
                        "latitude": "41.6857",
                        "longitude": "-81.6728"
                    },
                    "docType": "medical",
                    "_id": "e74f04039750bcc82c8dd1a7e420e3d1",
                    "identity": {
                        "firstName": "Alice",
                        "lastName": "Gilbert",
                        "ssn": "412-57-4276",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-06-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC22",
                                "codeSys": "CDCPHINVS",
                                "text": "encephalopathy within 7 days of previous dose of DTP or DTaP",
                                "caseId": "2013-0159"
                            },
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0160"
                            },
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0377"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-08-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0159",
                            "2013-0160",
                            "2013-0377"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pburnsnb@tripod.com"
                        },
                        "phone": {
                            "cell": "0-(800)295-6173",
                            "work": "2-(756)883-7819"
                        }
                    },
                    "address": {
                        "street": "743 Fuller Plaza",
                        "city": "Albuquerque",
                        "state": "New Mexico",
                        "postalCode": "87121"
                    },
                    "geo": {
                        "latitude": "35.0512",
                        "longitude": "-106.7269"
                    },
                    "docType": "medical",
                    "_id": "15a5e2c93bb985b3f3727dc4d63f92b0",
                    "identity": {
                        "firstName": "Pamela",
                        "lastName": "Burns",
                        "ssn": "664-17-1721",
                        "gender": "F",
                        "race": "White",
                        "dob": "2006-09-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "111",
                                "DateAdministered": "2011-09-01T04:00:00.000Z",
                                "Mvx": "MED",
                                "VaccineName": "FLUMIST"
                            }
                        ],
                        "cases": [
                            "2013-0169"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cfoxn9@behance.net"
                        },
                        "phone": {
                            "cell": "2-(754)150-3879",
                            "work": "3-(825)445-2035"
                        }
                    },
                    "address": {
                        "street": "00 Toban Road",
                        "city": "Richmond",
                        "state": "Virginia",
                        "postalCode": "23260"
                    },
                    "geo": {
                        "latitude": "37.5242",
                        "longitude": "-77.4932"
                    },
                    "docType": "medical",
                    "_id": "90d5490a589094d136961c3f84f24421",
                    "identity": {
                        "firstName": "Cheryl",
                        "lastName": "Fox",
                        "ssn": "791-19-4823",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2006-05-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-10-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "88",
                                "DateAdministered": "2011-11-27T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0171"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rmarshalln7@skype.com"
                        },
                        "phone": {
                            "cell": "6-(478)465-3774",
                            "work": "3-(657)694-9682"
                        }
                    },
                    "address": {
                        "street": "1 Randy Plaza",
                        "city": "Pueblo",
                        "state": "Colorado",
                        "postalCode": "81005"
                    },
                    "geo": {
                        "latitude": "38.2352",
                        "longitude": "-104.66"
                    },
                    "docType": "medical",
                    "_id": "edf23cbe75947b712d26a63c8f149bfa",
                    "identity": {
                        "firstName": "Ruth",
                        "lastName": "Marshall",
                        "ssn": "200-64-1533",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2009-02-10T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-02-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "111",
                                "DateAdministered": "2011-02-17T05:00:00.000Z",
                                "Mvx": "MED",
                                "VaccineName": "FLUMIST"
                            }
                        ],
                        "cases": [
                            "2013-0175"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dgarzan6@blogs.com"
                        },
                        "phone": {
                            "cell": "8-(252)398-6213",
                            "work": "5-(581)543-8825"
                        }
                    },
                    "address": {
                        "street": "8182 Cordelia Plaza",
                        "city": "Tuscaloosa",
                        "state": "Alabama",
                        "postalCode": "35405"
                    },
                    "geo": {
                        "latitude": "33.1617",
                        "longitude": "-87.5144"
                    },
                    "docType": "medical",
                    "_id": "a14cdcf74506e2e81928772595d892ba",
                    "identity": {
                        "firstName": "Dorothy",
                        "lastName": "Garza",
                        "ssn": "799-04-4155",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2009-07-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0176"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "88",
                                "DateAdministered": "2010-10-08T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Influenza Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2009-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2009-11-24T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2010-01-17T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            }
                        ],
                        "cases": [
                            "2013-0176",
                            "2013-0206"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jsimsn2@gnu.org"
                        },
                        "phone": {
                            "cell": "5-(716)688-9004",
                            "work": "9-(217)704-7021"
                        }
                    },
                    "address": {
                        "street": "23955 Judy Junction",
                        "city": "Peoria",
                        "state": "Illinois",
                        "postalCode": "61635"
                    },
                    "geo": {
                        "latitude": "40.7442",
                        "longitude": "-89.7184"
                    },
                    "docType": "medical",
                    "_id": "41123040cfcc65e8fceb3094d526a1e7",
                    "identity": {
                        "firstName": "Joyce",
                        "lastName": "Sims",
                        "ssn": "539-45-0476",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-07-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0185"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lhansonn1@cornell.edu"
                        },
                        "phone": {
                            "cell": "1-(985)710-9305",
                            "work": "8-(453)240-6510"
                        }
                    },
                    "address": {
                        "street": "1 Loftsgordon Road",
                        "city": "Herndon",
                        "state": "Virginia",
                        "postalCode": "22070"
                    },
                    "geo": {
                        "latitude": "38.9776",
                        "longitude": "-77.386"
                    },
                    "docType": "medical",
                    "_id": "a660ea6ac69f8bfdddd38659a522bead",
                    "identity": {
                        "firstName": "Lori",
                        "lastName": "Hanson",
                        "ssn": "447-51-2574",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2003-03-03T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0187"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "85",
                                "DateAdministered": "2009-03-04T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0187"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ibarnesmx@nature.com"
                        },
                        "phone": {
                            "cell": "1-(201)401-9566",
                            "work": "3-(527)187-0701"
                        }
                    },
                    "address": {
                        "street": "3047 Fremont Avenue",
                        "city": "Cincinnati",
                        "state": "Ohio",
                        "postalCode": "45218"
                    },
                    "geo": {
                        "latitude": "39.2663",
                        "longitude": "-84.5221"
                    },
                    "docType": "medical",
                    "_id": "d980f47fa460a95092d29f7821e5ba25",
                    "identity": {
                        "firstName": "Irene",
                        "lastName": "Barnes",
                        "ssn": "946-07-9322",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2008-11-10T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "85",
                                "DateAdministered": "2009-11-10T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2010-05-05T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2009-11-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0192",
                            "2013-0553"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sphillipsmw@ucsd.edu"
                        },
                        "phone": {
                            "cell": "9-(263)632-8543",
                            "work": "9-(708)958-9385"
                        }
                    },
                    "address": {
                        "street": "33399 Rockefeller Park",
                        "city": "Amarillo",
                        "state": "Texas",
                        "postalCode": "79188"
                    },
                    "geo": {
                        "latitude": "35.1885",
                        "longitude": "-101.8165"
                    },
                    "docType": "medical",
                    "_id": "29201706b0f0b9296f444dc5bb0999e7",
                    "identity": {
                        "firstName": "Sandra",
                        "lastName": "Phillips",
                        "ssn": "512-19-2894",
                        "gender": "F",
                        "race": "White",
                        "dob": "2001-04-04T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "85",
                                "DateAdministered": "2009-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            },
                            {
                                "Cvx": "85",
                                "DateAdministered": "2009-09-30T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep A Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0193"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dwilliamsmv@addthis.com"
                        },
                        "phone": {
                            "cell": "0-(948)746-4924",
                            "work": "5-(615)426-1605"
                        }
                    },
                    "address": {
                        "street": "16690 Mifflin Parkway",
                        "city": "New Orleans",
                        "state": "Louisiana",
                        "postalCode": "70129"
                    },
                    "geo": {
                        "latitude": "30.0877",
                        "longitude": "-89.8462"
                    },
                    "docType": "medical",
                    "_id": "3f4180165ebe174d8e2c337d49d86aab",
                    "identity": {
                        "firstName": "Debra",
                        "lastName": "Williams",
                        "ssn": "193-59-9117",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-12-12T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0198"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "smorrisms@zimbio.com"
                        },
                        "phone": {
                            "cell": "3-(775)976-3873",
                            "work": "5-(235)516-5588"
                        }
                    },
                    "address": {
                        "street": "5600 Raven Plaza",
                        "city": "Lexington",
                        "state": "Kentucky",
                        "postalCode": "40596"
                    },
                    "geo": {
                        "latitude": "38.0283",
                        "longitude": "-84.4715"
                    },
                    "docType": "medical",
                    "_id": "6c63bfbe9b1307cdad42daa889b81dee",
                    "identity": {
                        "firstName": "Sharon",
                        "lastName": "Morris",
                        "ssn": "587-00-3097",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2006-10-11T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "45",
                                "DateAdministered": "2006-12-11T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2007-04-11T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2007-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0204"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "preynoldsmr@uol.com.br"
                        },
                        "phone": {
                            "cell": "5-(211)524-2532",
                            "work": "6-(961)227-0393"
                        }
                    },
                    "address": {
                        "street": "34 Thackeray Circle",
                        "city": "Tempe",
                        "state": "Arizona",
                        "postalCode": "85284"
                    },
                    "geo": {
                        "latitude": "33.3363",
                        "longitude": "-111.9197"
                    },
                    "docType": "medical",
                    "_id": "8d17828b2c7ee6e944ca955eb11f6ce0",
                    "identity": {
                        "firstName": "Patricia",
                        "lastName": "Reynolds",
                        "ssn": "424-64-9437",
                        "gender": "F",
                        "race": "White",
                        "dob": "2004-07-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "45",
                                "DateAdministered": "2004-10-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2004-11-07T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2005-01-16T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2005-06-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0205",
                            "2013-0564"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "khernandezmq@networksolutions.com"
                        },
                        "phone": {
                            "cell": "9-(575)492-5969",
                            "work": "1-(129)503-3207"
                        }
                    },
                    "address": {
                        "street": "8879 Crownhardt Pass",
                        "city": "Rochester",
                        "state": "New York",
                        "postalCode": "14646"
                    },
                    "geo": {
                        "latitude": "43.286",
                        "longitude": "-77.6843"
                    },
                    "docType": "medical",
                    "_id": "4a87119391ac92e1b423f1e92772adc9",
                    "identity": {
                        "firstName": "Kimberly",
                        "lastName": "Hernandez",
                        "ssn": "674-59-6730",
                        "gender": "F",
                        "race": "White",
                        "dob": "1999-05-05T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "43",
                                "DateAdministered": "2011-11-25T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            }
                        ],
                        "cases": [
                            "2013-0208"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kbrownmp@youtube.com"
                        },
                        "phone": {
                            "cell": "7-(996)347-3285",
                            "work": "7-(091)204-7515"
                        }
                    },
                    "address": {
                        "street": "9529 Bultman Pass",
                        "city": "Indianapolis",
                        "state": "Indiana",
                        "postalCode": "46231"
                    },
                    "geo": {
                        "latitude": "39.7038",
                        "longitude": "-86.3029"
                    },
                    "docType": "medical",
                    "_id": "1a86dbbf8db816bd9fe9a4f6d9cc7603",
                    "identity": {
                        "firstName": "Kimberly",
                        "lastName": "Brown",
                        "gender": "F",
                        "dob": "1997-04-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "43",
                                "DateAdministered": "2009-10-13T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            },
                            {
                                "Cvx": "43",
                                "DateAdministered": "2010-02-13T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            }
                        ],
                        "cases": [
                            "2013-0210"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "twhiteml@dyndns.org"
                        },
                        "phone": {
                            "cell": "6-(363)833-6446",
                            "work": "2-(671)266-0826"
                        }
                    },
                    "address": {
                        "street": "82 Lighthouse Bay Center",
                        "city": "Phoenix",
                        "state": "Arizona",
                        "postalCode": "85083"
                    },
                    "geo": {
                        "latitude": "33.7352",
                        "longitude": "-112.1294"
                    },
                    "docType": "medical",
                    "_id": "36dcb92ddd2927ba50fe0d6e154a79d1",
                    "identity": {
                        "firstName": "Teresa",
                        "lastName": "White",
                        "gender": "F",
                        "dob": "1996-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "43",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            },
                            {
                                "Cvx": "43",
                                "DateAdministered": "2007-08-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            }
                        ],
                        "cases": [
                            "2013-0211"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mgutierrezmb@google.it"
                        },
                        "phone": {
                            "cell": "7-(366)869-8962",
                            "work": "7-(350)744-5547"
                        }
                    },
                    "address": {
                        "street": "823 Corry Circle",
                        "city": "Boca Raton",
                        "state": "Florida",
                        "postalCode": "33499"
                    },
                    "geo": {
                        "latitude": "26.6459",
                        "longitude": "-80.4303"
                    },
                    "docType": "medical",
                    "_id": "40e72b02392936ed8a3c227c7aa5b4d3",
                    "identity": {
                        "firstName": "Margaret",
                        "lastName": "Gutierrez",
                        "ssn": "720-19-5561",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1992-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "43",
                                "DateAdministered": "2005-09-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            },
                            {
                                "Cvx": "43",
                                "DateAdministered": "2005-12-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-ADULT"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2006-01-21T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            }
                        ],
                        "cases": [
                            "2013-0212"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aevansm7@bandcamp.com"
                        },
                        "phone": {
                            "cell": "7-(378)305-4080",
                            "work": "1-(096)070-2454"
                        }
                    },
                    "address": {
                        "street": "323 Sommers Road",
                        "city": "Detroit",
                        "state": "Michigan",
                        "postalCode": "48206"
                    },
                    "geo": {
                        "latitude": "42.3749",
                        "longitude": "-83.1087"
                    },
                    "docType": "medical",
                    "_id": "2f26d2f3c39c88800d7253507c5f0657",
                    "identity": {
                        "firstName": "Amy",
                        "lastName": "Evans",
                        "ssn": "316-14-7229",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2004-02-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2004-02-04T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2004-03-13T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2004-08-04T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0213"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "msandersm6@tripod.com"
                        },
                        "phone": {
                            "cell": "8-(152)631-3794",
                            "work": "4-(267)011-8011"
                        }
                    },
                    "address": {
                        "street": "966 Ramsey Drive",
                        "city": "Evansville",
                        "state": "Indiana",
                        "postalCode": "47737"
                    },
                    "geo": {
                        "latitude": "37.9971",
                        "longitude": "-87.575"
                    },
                    "docType": "medical",
                    "_id": "e7d9734b03f9b0ea722fb40d3c73069b",
                    "identity": {
                        "firstName": "Marilyn",
                        "lastName": "Sanders",
                        "ssn": "516-27-6989",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2006-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "45",
                                "DateAdministered": "2006-02-02T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-03-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-08-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0216"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "elopezm4@nature.com"
                        },
                        "phone": {
                            "cell": "6-(330)347-8704",
                            "work": "5-(163)521-0321"
                        }
                    },
                    "address": {
                        "street": "7439 Mccormick Park",
                        "city": "Portland",
                        "state": "Oregon",
                        "postalCode": "97240"
                    },
                    "geo": {
                        "latitude": "45.5806",
                        "longitude": "-122.3748"
                    },
                    "docType": "medical",
                    "_id": "bac8c1170141c525c4b0fe860c327464",
                    "identity": {
                        "firstName": "Emily",
                        "lastName": "Lopez",
                        "ssn": "210-58-4243",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2006-05-05T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2006-05-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-10-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-11-26T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0219",
                            "2013-0586"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kalvarezm3@fc2.com"
                        },
                        "phone": {
                            "cell": "1-(290)927-4053",
                            "work": "7-(091)000-7891"
                        }
                    },
                    "address": {
                        "street": "01588 Spaight Pass",
                        "city": "Phoenix",
                        "state": "Arizona",
                        "postalCode": "85045"
                    },
                    "geo": {
                        "latitude": "33.3022",
                        "longitude": "-112.1226"
                    },
                    "docType": "medical",
                    "_id": "f0c54346b1e9207ba4377b36060119e3",
                    "identity": {
                        "firstName": "Kathy",
                        "lastName": "Alvarez",
                        "ssn": "182-66-4698",
                        "gender": "F",
                        "race": "White",
                        "dob": "2006-06-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2006-06-06T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-11-06T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2007-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2006-08-08T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2006-10-10T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2006-12-12T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2007-09-06T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            }
                        ],
                        "cases": [
                            "2013-0221",
                            "2013-0620"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "athompsonm1@geocities.jp"
                        },
                        "phone": {
                            "cell": "0-(069)280-3547",
                            "work": "5-(578)202-8719"
                        }
                    },
                    "address": {
                        "street": "61318 Corry Alley",
                        "city": "Roanoke",
                        "state": "Virginia",
                        "postalCode": "24020"
                    },
                    "geo": {
                        "latitude": "37.3589",
                        "longitude": "-79.9448"
                    },
                    "docType": "medical",
                    "_id": "7355b4d719828994713b5a8091016a9f",
                    "identity": {
                        "firstName": "Ashley",
                        "lastName": "Thompson",
                        "gender": "F",
                        "dob": "2002-05-15T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "51",
                                "DateAdministered": "2002-08-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2002-09-20T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2002-11-16T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0222"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jburkem0@networksolutions.com"
                        },
                        "phone": {
                            "cell": "1-(380)691-2355",
                            "work": "5-(082)804-8413"
                        }
                    },
                    "address": {
                        "street": "2147 Westport Circle",
                        "city": "Los Angeles",
                        "state": "California",
                        "postalCode": "90087"
                    },
                    "geo": {
                        "latitude": "33.7866",
                        "longitude": "-118.2987"
                    },
                    "docType": "medical",
                    "_id": "89adca286978334eadd6b9f7f9c4311d",
                    "identity": {
                        "firstName": "Janet",
                        "lastName": "Burke",
                        "gender": "F",
                        "dob": "2006-08-08T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-10-31T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-12-22T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2007-02-20T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0224"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mhenryly@nps.gov"
                        },
                        "phone": {
                            "cell": "6-(703)627-2951",
                            "work": "9-(174)995-4040"
                        }
                    },
                    "address": {
                        "street": "2 Lake View Lane",
                        "city": "Saint Louis",
                        "state": "Missouri",
                        "postalCode": "63158"
                    },
                    "geo": {
                        "latitude": "38.6531",
                        "longitude": "-90.2435"
                    },
                    "docType": "medical",
                    "_id": "192d47876a3e6d4c3123be732214233f",
                    "identity": {
                        "firstName": "Mary",
                        "lastName": "Henry",
                        "gender": "F",
                        "dob": "2006-10-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "51",
                                "DateAdministered": "2006-10-10T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            }
                        ],
                        "cases": [
                            "2013-0225"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bbakerlx@dropbox.com"
                        },
                        "phone": {
                            "cell": "1-(397)134-4302",
                            "work": "6-(831)984-0145"
                        }
                    },
                    "address": {
                        "street": "879 Barnett Way",
                        "city": "Pittsburgh",
                        "state": "Pennsylvania",
                        "postalCode": "15266"
                    },
                    "geo": {
                        "latitude": "40.4344",
                        "longitude": "-80.0248"
                    },
                    "docType": "medical",
                    "_id": "8ca9646d1ececd4c730bda2201bd954b",
                    "identity": {
                        "firstName": "Betty",
                        "lastName": "Baker",
                        "ssn": "421-70-9837",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2006-09-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0226"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2006-11-11T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            }
                        ],
                        "cases": [
                            "2013-0226"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mryanlw@seattletimes.com"
                        },
                        "phone": {
                            "cell": "1-(256)181-9903",
                            "work": "1-(478)574-3974"
                        }
                    },
                    "address": {
                        "street": "84436 Garrison Crossing",
                        "city": "Simi Valley",
                        "state": "California",
                        "postalCode": "93094"
                    },
                    "geo": {
                        "latitude": "34.0324",
                        "longitude": "-119.1343"
                    },
                    "docType": "medical",
                    "_id": "21972daf16afecdbcc0b0230515a87dd",
                    "identity": {
                        "firstName": "Margaret",
                        "lastName": "Ryan",
                        "ssn": "663-45-2282",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-08-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2010-08-24T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0227",
                            "2013-0597"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rallenlv@linkedin.com"
                        },
                        "phone": {
                            "cell": "0-(578)898-8400",
                            "work": "3-(093)883-0177"
                        }
                    },
                    "address": {
                        "street": "69 Summit Hill",
                        "city": "Philadelphia",
                        "state": "Pennsylvania",
                        "postalCode": "19141"
                    },
                    "geo": {
                        "latitude": "40.0365",
                        "longitude": "-75.1451"
                    },
                    "docType": "medical",
                    "_id": "229bf62b389048396bd5d3964fb0dea2",
                    "identity": {
                        "firstName": "Rachel",
                        "lastName": "Allen",
                        "gender": "F",
                        "dob": "2011-02-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-02-25T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2012-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2012-02-29T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0228",
                            "2013-0583",
                            "2013-0593",
                            "2013-0825"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mfranklinlu@e-recht24.de"
                        },
                        "phone": {
                            "cell": "8-(442)194-2427",
                            "work": "7-(768)138-1452"
                        }
                    },
                    "address": {
                        "street": "5703 Ohio Point",
                        "city": "Brooklyn",
                        "state": "New York",
                        "postalCode": "11231"
                    },
                    "geo": {
                        "latitude": "40.6794",
                        "longitude": "-74.0014"
                    },
                    "docType": "medical",
                    "_id": "28c69b728097506bc6f0a9c31b6e075b",
                    "identity": {
                        "firstName": "Mildred",
                        "lastName": "Franklin",
                        "ssn": "116-93-6387",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2011-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            },
                            {
                                "Cvx": "45",
                                "DateAdministered": "2011-06-13T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hep B Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0230"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "swheelerlq@zdnet.com"
                        },
                        "phone": {
                            "cell": "1-(185)048-2343",
                            "work": "2-(318)555-4854"
                        }
                    },
                    "address": {
                        "street": "15 Russell Center",
                        "city": "Lexington",
                        "state": "Kentucky",
                        "postalCode": "40510"
                    },
                    "geo": {
                        "latitude": "38.0702",
                        "longitude": "-84.591"
                    },
                    "docType": "medical",
                    "_id": "435867e3e0207425f6973758978e88d0",
                    "identity": {
                        "firstName": "Susan",
                        "lastName": "Wheeler",
                        "ssn": "993-43-3873",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-12-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "08",
                                "DateAdministered": "2010-12-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "08",
                                "DateAdministered": "2011-05-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "RECOMBIVAX-PEDS"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-12-03T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-12-30T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-17T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-11T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-17T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-05-15T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0231",
                            "2013-0547",
                            "2013-0610",
                            "2013-0611"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "acunninghamlo@reddit.com"
                        },
                        "phone": {
                            "cell": "9-(352)910-8532",
                            "work": "2-(942)546-6492"
                        }
                    },
                    "address": {
                        "street": "1 Maple Wood Junction",
                        "city": "Lafayette",
                        "state": "Indiana",
                        "postalCode": "47905"
                    },
                    "geo": {
                        "latitude": "40.4001",
                        "longitude": "-86.8602"
                    },
                    "docType": "medical",
                    "_id": "4b37da17ca31ae1dc3917499e7440466",
                    "identity": {
                        "firstName": "Angela",
                        "lastName": "Cunningham",
                        "gender": "F",
                        "dob": "2010-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-07T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-04-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-04-04T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-07T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-08T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-09T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-26T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-02-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-08T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-04-04T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "47",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "HIBTITER"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "47",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "HIBTITER"
                            },
                            {
                                "Cvx": "47",
                                "DateAdministered": "2010-05-29T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "HIBTITER"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-28T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-29T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-11-11T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-11-10T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-04-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-11-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "47",
                                "DateAdministered": "2010-12-27T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "HIBTITER"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-07-27T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-27T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-28T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-29T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2011-02-04T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2011-02-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2010-12-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2011-02-06T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-03-27T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-03-28T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2011-02-21T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "47",
                                "DateAdministered": "2011-02-22T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "HIBTITER"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2011-02-23T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-03-29T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0273",
                            "2013-0274",
                            "2013-0275",
                            "2013-0276",
                            "2013-0277",
                            "2013-0278",
                            "2013-0279",
                            "2013-0280",
                            "2013-0281",
                            "2013-0282",
                            "2013-0286",
                            "2013-0287",
                            "2013-0288",
                            "2013-0294",
                            "2013-0296",
                            "2013-0297",
                            "2013-0298",
                            "2013-0299",
                            "2013-0300",
                            "2013-0301",
                            "2013-0302",
                            "2013-0303",
                            "2013-0304",
                            "2013-0305",
                            "2013-0306",
                            "2013-0307",
                            "2013-0308",
                            "2013-0309",
                            "2013-0310",
                            "2013-0315",
                            "2013-0320",
                            "2013-0321",
                            "2013-0322",
                            "2013-0323",
                            "2013-0327",
                            "2013-0331",
                            "2013-0332",
                            "2013-0333",
                            "2013-0343",
                            "2013-0344",
                            "2013-0345",
                            "2013-0346",
                            "2013-0347",
                            "2013-0348",
                            "2013-0349",
                            "2013-0350",
                            "2013-0352",
                            "2013-0587"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kmitchellll@alexa.com"
                        },
                        "phone": {
                            "cell": "0-(323)815-9138",
                            "work": "9-(056)046-1443"
                        }
                    },
                    "address": {
                        "street": "07971 Bartillon Way",
                        "city": "Pueblo",
                        "state": "Colorado",
                        "postalCode": "81005"
                    },
                    "geo": {
                        "latitude": "38.2352",
                        "longitude": "-104.66"
                    },
                    "docType": "medical",
                    "_id": "7fe7128513ba0b17f6e5c33b3ad9c146",
                    "identity": {
                        "firstName": "Kathy",
                        "lastName": "Mitchell",
                        "gender": "F",
                        "dob": "2008-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            }
                        ],
                        "cases": [
                            "2013-0283"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bmorrisonlk@tamu.edu"
                        },
                        "phone": {
                            "cell": "9-(455)567-6333",
                            "work": "1-(249)862-4057"
                        }
                    },
                    "address": {
                        "street": "86 Gateway Place",
                        "city": "Englewood",
                        "state": "Colorado",
                        "postalCode": "80150"
                    },
                    "geo": {
                        "latitude": "39.7388",
                        "longitude": "-104.4083"
                    },
                    "docType": "medical",
                    "_id": "a948f6fbdbe69462da5374457c09a1df",
                    "identity": {
                        "firstName": "Bonnie",
                        "lastName": "Morrison",
                        "ssn": "900-98-0751",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2006-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "48",
                                "DateAdministered": "2011-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2010-12-31T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            }
                        ],
                        "cases": [
                            "2013-0284",
                            "2013-0353"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "swellsli@cbslocal.com"
                        },
                        "phone": {
                            "cell": "1-(940)021-8930",
                            "work": "2-(402)170-2823"
                        }
                    },
                    "address": {
                        "street": "99173 Thackeray Place",
                        "city": "Worcester",
                        "state": "Massachusetts",
                        "postalCode": "01654"
                    },
                    "geo": {
                        "latitude": "42.3648",
                        "longitude": "-71.8969"
                    },
                    "docType": "medical",
                    "_id": "1f28689a567a2727bff92105c0b577d1",
                    "identity": {
                        "firstName": "Sharon",
                        "lastName": "Wells",
                        "gender": "F",
                        "dob": "2007-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "48",
                                "DateAdministered": "2007-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2007-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2007-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-01-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "51",
                                "DateAdministered": "2007-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "COMVAX"
                            },
                            {
                                "Cvx": "49",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PEDVAXHIB"
                            },
                            {
                                "Cvx": "17",
                                "DateAdministered": "2011-12-31T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Hib Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0295",
                            "2013-0313",
                            "2013-0326"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "acolemanle@drupal.org"
                        },
                        "phone": {
                            "cell": "2-(430)444-9058",
                            "work": "8-(754)419-4719"
                        }
                    },
                    "address": {
                        "street": "2 Northport Pass",
                        "city": "Terre Haute",
                        "state": "Indiana",
                        "postalCode": "47812"
                    },
                    "geo": {
                        "latitude": "39.4336",
                        "longitude": "-87.4101"
                    },
                    "docType": "medical",
                    "_id": "6bd0a54f9b984ac804f7ee51dd4d7ad8",
                    "identity": {
                        "firstName": "Amanda",
                        "lastName": "Coleman",
                        "ssn": "146-67-4820",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2012-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-03-01T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "48",
                                "DateAdministered": "2012-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "ACTHIB"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-07T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-08T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-12T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            }
                        ],
                        "cases": [
                            "2013-0355",
                            "2013-0764",
                            "2013-0772",
                            "2013-0775",
                            "2013-0781"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "vsanchezlb@guardian.co.uk"
                        },
                        "phone": {
                            "cell": "6-(378)402-1708",
                            "work": "0-(100)466-0436"
                        }
                    },
                    "address": {
                        "street": "6 Victoria Drive",
                        "city": "Dallas",
                        "state": "Texas",
                        "postalCode": "75397"
                    },
                    "geo": {
                        "latitude": "32.7673",
                        "longitude": "-96.7776"
                    },
                    "docType": "medical",
                    "_id": "ddb5c506137aba25cff7761080b0e56c",
                    "identity": {
                        "firstName": "Virginia",
                        "lastName": "Sanchez",
                        "ssn": "139-76-9477",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2010-05-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-12T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            },
                            {
                                "Cvx": "120",
                                "DateAdministered": "2010-06-12T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "PENTACEL"
                            }
                        ],
                        "cases": [
                            "2013-0367",
                            "2013-0728"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jbaileyl7@google.ru"
                        },
                        "phone": {
                            "cell": "1-(489)806-0282",
                            "work": "9-(443)772-7978"
                        }
                    },
                    "address": {
                        "street": "6125 Merry Pass",
                        "city": "Charleston",
                        "state": "West Virginia",
                        "postalCode": "25326"
                    },
                    "geo": {
                        "latitude": "38.2968",
                        "longitude": "-81.5547"
                    },
                    "docType": "medical",
                    "_id": "1b16907b743ec383fa7f5e6223396599",
                    "identity": {
                        "firstName": "Joan",
                        "lastName": "Bailey",
                        "ssn": "120-72-1329",
                        "gender": "F",
                        "race": "White",
                        "dob": "2002-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-24T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-08-20T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-10-16T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-10-16T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-08-21T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-06-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-06-26T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-10-19T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0392",
                            "2013-0393",
                            "2013-0394",
                            "2013-0400",
                            "2013-0401",
                            "2013-0402",
                            "2013-0409",
                            "2013-0410",
                            "2013-0418",
                            "2013-0419",
                            "2013-0421",
                            "2013-0427",
                            "2013-0428",
                            "2013-0433",
                            "2013-0444",
                            "2013-0451",
                            "2013-0452",
                            "2013-0453",
                            "2013-0456",
                            "2013-0457",
                            "2013-0458",
                            "2013-0459"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aallenl6@sbwire.com"
                        },
                        "phone": {
                            "cell": "6-(948)480-4091",
                            "work": "2-(251)512-4088"
                        }
                    },
                    "address": {
                        "street": "0 Algoma Road",
                        "city": "New Haven",
                        "state": "Connecticut",
                        "postalCode": "06520"
                    },
                    "geo": {
                        "latitude": "41.3657",
                        "longitude": "-72.9275"
                    },
                    "docType": "medical",
                    "_id": "087ffb2f7e838f261daf272823920b7f",
                    "identity": {
                        "firstName": "Alice",
                        "lastName": "Allen",
                        "ssn": "309-73-8829",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2000-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-08-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-06-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-08-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-10-16T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-05-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-08-21T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-21T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-26T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2012-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2012-06-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-21T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-21T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-04-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-21T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-06-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            }
                        ],
                        "cases": [
                            "2013-0395",
                            "2013-0403",
                            "2013-0411",
                            "2013-0422",
                            "2013-0429",
                            "2013-0434",
                            "2013-0440",
                            "2013-0441",
                            "2013-0442",
                            "2013-0443",
                            "2013-0445",
                            "2013-0446",
                            "2013-0447",
                            "2013-0448",
                            "2013-0450",
                            "2013-0487",
                            "2013-0488",
                            "2013-0489",
                            "2013-0490",
                            "2013-0492",
                            "2013-0493",
                            "2013-0497",
                            "2013-0498",
                            "2013-0499",
                            "2013-0500",
                            "2013-0501"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "scampbellro@icq.com"
                        },
                        "phone": {
                            "cell": "1-(245)292-5608",
                            "work": "8-(208)112-9439"
                        }
                    },
                    "address": {
                        "street": "323 Scoville Junction",
                        "city": "Savannah",
                        "state": "Georgia",
                        "postalCode": "31422"
                    },
                    "geo": {
                        "latitude": "31.9714",
                        "longitude": "-81.0716"
                    },
                    "docType": "medical",
                    "_id": "4128ad59a75c7ba3a6c07beec8abb18b",
                    "identity": {
                        "firstName": "Samuel",
                        "lastName": "Campbell",
                        "ssn": "406-93-6994",
                        "gender": "M",
                        "race": "AIAN",
                        "dob": "2002-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-24T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-08-20T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-10-16T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-27T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-04-28T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-22T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-29T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-10-19T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            }
                        ],
                        "cases": [
                            "2013-0396",
                            "2013-0397",
                            "2013-0398",
                            "2013-0404",
                            "2013-0405",
                            "2013-0406",
                            "2013-0413",
                            "2013-0414",
                            "2013-0423",
                            "2013-0424",
                            "2013-0425",
                            "2013-0430",
                            "2013-0437"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jcarpenterrn@foxnews.com"
                        },
                        "phone": {
                            "cell": "4-(210)245-1280",
                            "work": "4-(734)307-7131"
                        }
                    },
                    "address": {
                        "street": "711 Hollow Ridge Hill",
                        "city": "Kent",
                        "state": "Washington",
                        "postalCode": "98042"
                    },
                    "geo": {
                        "latitude": "47.368",
                        "longitude": "-122.1206"
                    },
                    "docType": "medical",
                    "_id": "0099f868e9b718415d1f9c33f077e4e1",
                    "identity": {
                        "firstName": "Jack",
                        "lastName": "Carpenter",
                        "ssn": "378-22-6939",
                        "gender": "M",
                        "race": "Asian",
                        "dob": "2000-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "62",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-11-01T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            }
                        ],
                        "cases": [
                            "2013-0399",
                            "2013-0407",
                            "2013-0415",
                            "2013-0426",
                            "2013-0438"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jhartl4@reuters.com"
                        },
                        "phone": {
                            "cell": "5-(261)839-1789",
                            "work": "1-(322)693-4563"
                        }
                    },
                    "address": {
                        "street": "46 Kenwood Junction",
                        "city": "Wichita Falls",
                        "state": "Texas",
                        "postalCode": "76310"
                    },
                    "geo": {
                        "latitude": "33.8581",
                        "longitude": "-98.5755"
                    },
                    "docType": "medical",
                    "_id": "dd504401736ee02257c6b4356384cb1b",
                    "identity": {
                        "firstName": "Jean",
                        "lastName": "Hart",
                        "ssn": "967-63-7237",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1985-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2012-05-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            },
                            {
                                "Cvx": "118",
                                "DateAdministered": "2012-05-02T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            }
                        ],
                        "cases": [
                            "2013-0416",
                            "2013-0439"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "gwilsonrf@miibeian.gov.cn"
                        },
                        "phone": {
                            "cell": "9-(342)728-4466",
                            "work": "5-(634)391-4597"
                        }
                    },
                    "address": {
                        "street": "57839 Rutledge Junction",
                        "city": "Lancaster",
                        "state": "Pennsylvania",
                        "postalCode": "17622"
                    },
                    "geo": {
                        "latitude": "40.0418",
                        "longitude": "-76.3012"
                    },
                    "docType": "medical",
                    "_id": "0d5e5cdb837e0052054513c64aff76d1",
                    "identity": {
                        "firstName": "George",
                        "lastName": "Wilson",
                        "ssn": "232-49-8961",
                        "gender": "M",
                        "race": "AIAN",
                        "dob": "1985-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "62",
                                "DateAdministered": "2012-05-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "GARDASIL"
                            }
                        ],
                        "cases": [
                            "2013-0417"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "djamesl2@tripadvisor.com"
                        },
                        "phone": {
                            "cell": "2-(867)909-2079",
                            "work": "8-(655)444-5416"
                        }
                    },
                    "address": {
                        "street": "83033 Paget Point",
                        "city": "Montgomery",
                        "state": "Alabama",
                        "postalCode": "36114"
                    },
                    "geo": {
                        "latitude": "32.404",
                        "longitude": "-86.2539"
                    },
                    "docType": "medical",
                    "_id": "0e61cae9b2ed8233e9ad9fe8b5449cfe",
                    "identity": {
                        "firstName": "Diana",
                        "lastName": "James",
                        "ssn": "584-42-6372",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1998-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-07-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2009-11-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0454",
                            "2013-0455"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rstewartrc@webmd.com"
                        },
                        "phone": {
                            "cell": "8-(512)578-9343",
                            "work": "1-(695)899-8726"
                        }
                    },
                    "address": {
                        "street": "0 Nelson Point",
                        "city": "Sacramento",
                        "state": "California",
                        "postalCode": "94250"
                    },
                    "geo": {
                        "latitude": "38.3774",
                        "longitude": "-121.4444"
                    },
                    "docType": "medical",
                    "_id": "5f92aef1f3b84502487f8086efbd26bb",
                    "identity": {
                        "firstName": "Ralph",
                        "lastName": "Stewart",
                        "ssn": "153-68-7876",
                        "gender": "M",
                        "race": "Asian",
                        "dob": "1999-04-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0460"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lmorrisl1@artisteer.com"
                        },
                        "phone": {
                            "cell": "7-(284)882-7082",
                            "work": "6-(414)881-1657"
                        }
                    },
                    "address": {
                        "street": "4 Nancy Park",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "postalCode": "28235"
                    },
                    "geo": {
                        "latitude": "35.26",
                        "longitude": "-80.8042"
                    },
                    "docType": "medical",
                    "_id": "eb44cdbbfcd531f89d8364a6d29f0253",
                    "identity": {
                        "firstName": "Lillian",
                        "lastName": "Morris",
                        "ssn": "874-92-8432",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2001-12-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-30T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-24T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-30T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-30T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-28T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-03-22T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0461",
                            "2013-0462",
                            "2013-0463",
                            "2013-0465"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "vaustinl0@fema.gov"
                        },
                        "phone": {
                            "cell": "8-(497)537-4038",
                            "work": "9-(966)670-9920"
                        }
                    },
                    "address": {
                        "street": "2 Coleman Parkway",
                        "city": "Suffolk",
                        "state": "Virginia",
                        "postalCode": "23436"
                    },
                    "geo": {
                        "latitude": "36.8926",
                        "longitude": "-76.5142"
                    },
                    "docType": "medical",
                    "_id": "f6f35396e7d399e8a31e75f7f9829605",
                    "identity": {
                        "firstName": "Virginia",
                        "lastName": "Austin",
                        "ssn": "584-85-7663",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2002-12-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-12-01T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-12-29T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2012-03-22T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0466"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mperrykz@slate.com"
                        },
                        "phone": {
                            "cell": "8-(213)172-0275",
                            "work": "2-(677)098-1405"
                        }
                    },
                    "address": {
                        "street": "0238 Springs Lane",
                        "city": "Escondido",
                        "state": "California",
                        "postalCode": "92030"
                    },
                    "geo": {
                        "latitude": "33.0169",
                        "longitude": "-116.846"
                    },
                    "docType": "medical",
                    "_id": "7c57d84899bca678b5a0e036b42f6111",
                    "identity": {
                        "firstName": "Margaret",
                        "lastName": "Perry",
                        "ssn": "678-22-1129",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1985-04-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-04-04T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2012-03-19T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0467"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bblackkp@blogspot.com"
                        },
                        "phone": {
                            "cell": "9-(268)106-7954",
                            "work": "0-(277)049-2824"
                        }
                    },
                    "address": {
                        "street": "58 Commercial Alley",
                        "city": "Oklahoma City",
                        "state": "Oklahoma",
                        "postalCode": "73157"
                    },
                    "geo": {
                        "latitude": "35.5514",
                        "longitude": "-97.4075"
                    },
                    "docType": "medical",
                    "_id": "e2de62ab325c83c9f5c3b85ee7dbc100",
                    "identity": {
                        "firstName": "Betty",
                        "lastName": "Black",
                        "ssn": "370-75-8399",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1999-04-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-24T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-07-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0468",
                            "2013-0469"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pdunnkd@shinystat.com"
                        },
                        "phone": {
                            "cell": "1-(327)336-7686",
                            "work": "6-(162)969-9647"
                        }
                    },
                    "address": {
                        "street": "0 Canary Trail",
                        "city": "Des Moines",
                        "state": "Iowa",
                        "postalCode": "50347"
                    },
                    "geo": {
                        "latitude": "41.6727",
                        "longitude": "-93.5722"
                    },
                    "docType": "medical",
                    "_id": "6123fa83f1048990d72791ddf54b07dc",
                    "identity": {
                        "firstName": "Patricia",
                        "lastName": "Dunn",
                        "ssn": "377-21-5699",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1999-12-25T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0470"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dhansenkb@desdev.cn"
                        },
                        "phone": {
                            "cell": "6-(916)930-0292",
                            "work": "0-(806)031-1416"
                        }
                    },
                    "address": {
                        "street": "0799 Cordelia Junction",
                        "city": "Oklahoma City",
                        "state": "Oklahoma",
                        "postalCode": "73197"
                    },
                    "geo": {
                        "latitude": "35.5514",
                        "longitude": "-97.4075"
                    },
                    "docType": "medical",
                    "_id": "f03f68db04668b02e58f93a73ca870e5",
                    "identity": {
                        "firstName": "Dorothy",
                        "lastName": "Hansen",
                        "ssn": "923-00-0713",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2000-09-16T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-09-20T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-20T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-02-07T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-09-20T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-20T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-02-08T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-09-20T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-11-20T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-02-12T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0471",
                            "2013-0472",
                            "2013-0473"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mhawkinsk9@scientificamerican.com"
                        },
                        "phone": {
                            "cell": "2-(675)683-9033",
                            "work": "3-(603)022-4401"
                        }
                    },
                    "address": {
                        "street": "2 Oneill Alley",
                        "city": "Pasadena",
                        "state": "California",
                        "postalCode": "91131"
                    },
                    "geo": {
                        "latitude": "33.7866",
                        "longitude": "-118.2987"
                    },
                    "docType": "medical",
                    "_id": "f19d4954594929eb9b92614154fc5f14",
                    "identity": {
                        "firstName": "Melissa",
                        "lastName": "Hawkins",
                        "ssn": "721-98-5614",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1996-03-21T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-04-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-05-16T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-08-07T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-04-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-05-16T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2008-08-08T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0474",
                            "2013-0475"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kgilbertk6@pen.io"
                        },
                        "phone": {
                            "cell": "3-(467)452-5965",
                            "work": "1-(960)081-9666"
                        }
                    },
                    "address": {
                        "street": "586 5th Parkway",
                        "city": "San Antonio",
                        "state": "Texas",
                        "postalCode": "78245"
                    },
                    "geo": {
                        "latitude": "29.4189",
                        "longitude": "-98.6895"
                    },
                    "docType": "medical",
                    "_id": "fc6cc8daa120fc4d56c9733b225dd25e",
                    "identity": {
                        "firstName": "Kathleen",
                        "lastName": "Gilbert",
                        "ssn": "418-06-5243",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "1997-01-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-09-23T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-12T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-03-01T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-03-29T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-04-24T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-04-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-06-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-06-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-01-04T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0476",
                            "2013-0809",
                            "2013-0810",
                            "2013-0811",
                            "2013-0812",
                            "2013-0844"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "revansk5@csmonitor.com"
                        },
                        "phone": {
                            "cell": "9-(556)739-2513",
                            "work": "0-(043)112-9649"
                        }
                    },
                    "address": {
                        "street": "12362 Gateway Crossing",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92191"
                    },
                    "geo": {
                        "latitude": "33.0169",
                        "longitude": "-116.846"
                    },
                    "docType": "medical",
                    "_id": "744c3d7f16bc7c24ba122abbd8549d24",
                    "identity": {
                        "firstName": "Ruby",
                        "lastName": "Evans",
                        "ssn": "862-36-3872",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2001-07-21T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-10-21T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-05-05T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0477"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jowensk0@prlog.org"
                        },
                        "phone": {
                            "cell": "0-(012)165-9340",
                            "work": "9-(668)683-7634"
                        }
                    },
                    "address": {
                        "street": "7 Grasskamp Court",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92110"
                    },
                    "geo": {
                        "latitude": "32.7635",
                        "longitude": "-117.2028"
                    },
                    "docType": "medical",
                    "_id": "76543f42f094a6113d027c65ef9385a3",
                    "identity": {
                        "firstName": "Janice",
                        "lastName": "Owens",
                        "ssn": "501-57-8078",
                        "gender": "F",
                        "race": "White",
                        "dob": "1998-12-25T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-02-25T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-03-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-08-25T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0478"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jgordonjz@mtv.com"
                        },
                        "phone": {
                            "cell": "9-(256)843-1810",
                            "work": "3-(265)438-9386"
                        }
                    },
                    "address": {
                        "street": "1 Superior Crossing",
                        "city": "Hicksville",
                        "state": "New York",
                        "postalCode": "11854"
                    },
                    "geo": {
                        "latitude": "40.7548",
                        "longitude": "-73.6018"
                    },
                    "docType": "medical",
                    "_id": "c966cd199fe2aec990250c42a0886353",
                    "identity": {
                        "firstName": "Judy",
                        "lastName": "Gordon",
                        "ssn": "802-78-8718",
                        "gender": "F",
                        "race": "White",
                        "dob": "2000-05-19T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0479"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2011-06-19T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0479"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rscottjy@java.com"
                        },
                        "phone": {
                            "cell": "6-(709)931-1395",
                            "work": "0-(833)081-2309"
                        }
                    },
                    "address": {
                        "street": "52 Acker Court",
                        "city": "Rockford",
                        "state": "Illinois",
                        "postalCode": "61110"
                    },
                    "geo": {
                        "latitude": "42.3254",
                        "longitude": "-89.1705"
                    },
                    "docType": "medical",
                    "_id": "21f62304d923b659e4d040749cad58e6",
                    "identity": {
                        "firstName": "Rose",
                        "lastName": "Scott",
                        "ssn": "978-41-6532",
                        "gender": "F",
                        "race": "White",
                        "dob": "1985-03-30T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0480"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "eandrewsjx@samsung.com"
                        },
                        "phone": {
                            "cell": "8-(543)863-8176",
                            "work": "3-(897)994-0256"
                        }
                    },
                    "address": {
                        "street": "251 Toban Avenue",
                        "city": "El Paso",
                        "state": "Texas",
                        "postalCode": "79989"
                    },
                    "geo": {
                        "latitude": "31.6948",
                        "longitude": "-106.3"
                    },
                    "docType": "medical",
                    "_id": "882a03b45a0e6777ef31259de3f01f39",
                    "identity": {
                        "firstName": "Evelyn",
                        "lastName": "Andrews",
                        "gender": "F",
                        "dob": "1989-04-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0481"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "acunninghamjv@patch.com"
                        },
                        "phone": {
                            "cell": "1-(505)127-2132",
                            "work": "4-(068)512-4151"
                        }
                    },
                    "address": {
                        "street": "77025 Old Gate Crossing",
                        "city": "Chicago",
                        "state": "Illinois",
                        "postalCode": "60609"
                    },
                    "geo": {
                        "latitude": "41.8097",
                        "longitude": "-87.6533"
                    },
                    "docType": "medical",
                    "_id": "90956f3ec63c2dfc56db565b35eb9dd7",
                    "identity": {
                        "firstName": "Alice",
                        "lastName": "Cunningham",
                        "ssn": "327-50-8585",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1998-04-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0482"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cburkera@geocities.com"
                        },
                        "phone": {
                            "cell": "6-(914)735-7224",
                            "work": "2-(275)084-6065"
                        }
                    },
                    "address": {
                        "street": "8 Corscot Terrace",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "postalCode": "28263"
                    },
                    "geo": {
                        "latitude": "35.2268",
                        "longitude": "-80.8432"
                    },
                    "docType": "medical",
                    "_id": "e5f2be65f55e82494a17cd89f9cb1085",
                    "identity": {
                        "firstName": "Charles",
                        "lastName": "Burke",
                        "ssn": "672-96-3671",
                        "gender": "M",
                        "race": "Black",
                        "dob": "2000-06-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "118",
                                "DateAdministered": "2011-06-20T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "CERVARIX"
                            }
                        ],
                        "cases": [
                            "2013-0483"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lhicksju@engadget.com"
                        },
                        "phone": {
                            "cell": "2-(751)194-2581",
                            "work": "1-(417)153-0215"
                        }
                    },
                    "address": {
                        "street": "4 Fallview Junction",
                        "city": "Hialeah",
                        "state": "Florida",
                        "postalCode": "33018"
                    },
                    "geo": {
                        "latitude": "25.9098",
                        "longitude": "-80.3889"
                    },
                    "docType": "medical",
                    "_id": "3026b6ecfaba4fdbfb8a9856b8ee29c2",
                    "identity": {
                        "firstName": "Lillian",
                        "lastName": "Hicks",
                        "ssn": "360-96-8257",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2001-12-08T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-03T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-04T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            },
                            {
                                "Cvx": "137",
                                "DateAdministered": "2010-12-08T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "HPV Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0484",
                            "2013-0485",
                            "2013-0486"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kwoodsjt@chicagotribune.com"
                        },
                        "phone": {
                            "cell": "9-(157)573-4541",
                            "work": "7-(176)662-7452"
                        }
                    },
                    "address": {
                        "street": "98 Mallard Hill",
                        "city": "New York City",
                        "state": "New York",
                        "postalCode": "10110"
                    },
                    "geo": {
                        "latitude": "40.754",
                        "longitude": "-73.9808"
                    },
                    "docType": "medical",
                    "_id": "a974745558eda44109d08d782a73a903",
                    "identity": {
                        "firstName": "Kimberly",
                        "lastName": "Woods",
                        "ssn": "972-40-7217",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1990-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "114",
                                "DateAdministered": "2001-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2006-07-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            },
                            {
                                "Cvx": "114",
                                "DateAdministered": "2011-05-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "MENACTRA"
                            }
                        ],
                        "cases": [
                            "2013-0491",
                            "2013-0494",
                            "2013-0495"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aschmidtjs@reference.com"
                        },
                        "phone": {
                            "cell": "4-(324)489-3918",
                            "work": "0-(222)471-2848"
                        }
                    },
                    "address": {
                        "street": "15 Myrtle Hill",
                        "city": "Tulsa",
                        "state": "Oklahoma",
                        "postalCode": "74141"
                    },
                    "geo": {
                        "latitude": "36.1398",
                        "longitude": "-96.0297"
                    },
                    "docType": "medical",
                    "_id": "977997ff1af51ae92b2373f7f81bdaf9",
                    "identity": {
                        "firstName": "Andrea",
                        "lastName": "Schmidt",
                        "ssn": "784-06-7164",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1995-01-06T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2006-03-27T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2006-05-17T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0503"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jsnyderjq@cam.ac.uk"
                        },
                        "phone": {
                            "cell": "0-(314)272-7251",
                            "work": "3-(498)172-1311"
                        }
                    },
                    "address": {
                        "street": "29 Sauthoff Circle",
                        "city": "South Bend",
                        "state": "Indiana",
                        "postalCode": "46620"
                    },
                    "geo": {
                        "latitude": "41.5968",
                        "longitude": "-86.293"
                    },
                    "docType": "medical",
                    "_id": "22c2d0653d333163554f5cd25290d051",
                    "identity": {
                        "firstName": "Jane",
                        "lastName": "Snyder",
                        "ssn": "727-01-4611",
                        "gender": "F",
                        "race": "White",
                        "dob": "2000-03-18T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-03-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-05-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-05-20T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-07-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-03-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-05-08T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-03-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-05-13T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0504",
                            "2013-0505",
                            "2013-0513",
                            "2013-0514"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jburtonjo@hugedomains.com"
                        },
                        "phone": {
                            "cell": "6-(683)428-5414",
                            "work": "5-(180)669-6615"
                        }
                    },
                    "address": {
                        "street": "80654 Sage Road",
                        "city": "Macon",
                        "state": "Georgia",
                        "postalCode": "31205"
                    },
                    "geo": {
                        "latitude": "32.8067",
                        "longitude": "-83.6913"
                    },
                    "docType": "medical",
                    "_id": "c02ede45cd160de3a7d23e9f37660d75",
                    "identity": {
                        "firstName": "Janice",
                        "lastName": "Burton",
                        "gender": "F",
                        "dob": "2000-02-26T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0506"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2011-03-15T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0506"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mevansjm@xrea.com"
                        },
                        "phone": {
                            "cell": "3-(313)255-8722",
                            "work": "5-(684)041-8035"
                        }
                    },
                    "address": {
                        "street": "5994 Burrows Drive",
                        "city": "Minneapolis",
                        "state": "Minnesota",
                        "postalCode": "55441"
                    },
                    "geo": {
                        "latitude": "45.0058",
                        "longitude": "-93.4193"
                    },
                    "docType": "medical",
                    "_id": "7f29e446813e8c37ff3ca55b83b7086d",
                    "identity": {
                        "firstName": "Marilyn",
                        "lastName": "Evans",
                        "ssn": "473-92-0697",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1996-09-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2007-09-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0507"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kfosterjl@fda.gov"
                        },
                        "phone": {
                            "cell": "6-(777)123-1475",
                            "work": "7-(454)469-6887"
                        }
                    },
                    "address": {
                        "street": "2 Prentice Center",
                        "city": "Vero Beach",
                        "state": "Florida",
                        "postalCode": "32964"
                    },
                    "geo": {
                        "latitude": "27.709",
                        "longitude": "-80.5726"
                    },
                    "docType": "medical",
                    "_id": "7d31f443cbf75879d73b6715d5bf34a4",
                    "identity": {
                        "firstName": "Katherine",
                        "lastName": "Foster",
                        "ssn": "523-27-1671",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "1990-01-07T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0508"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ehunterjk@homestead.com"
                        },
                        "phone": {
                            "cell": "1-(154)130-0769",
                            "work": "2-(329)491-4337"
                        }
                    },
                    "address": {
                        "street": "88 Warbler Park",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "postalCode": "28263"
                    },
                    "geo": {
                        "latitude": "35.2268",
                        "longitude": "-80.8432"
                    },
                    "docType": "medical",
                    "_id": "e3ee5952c5877198cc5f98e4c933b2a9",
                    "identity": {
                        "firstName": "Emily",
                        "lastName": "Hunter",
                        "ssn": "411-25-2567",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1995-04-21T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2010-04-29T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0509"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "drodriguezji@google.fr"
                        },
                        "phone": {
                            "cell": "8-(020)316-2333",
                            "work": "8-(638)800-9957"
                        }
                    },
                    "address": {
                        "street": "441 Lindbergh Circle",
                        "city": "West Palm Beach",
                        "state": "Florida",
                        "postalCode": "33421"
                    },
                    "geo": {
                        "latitude": "26.6459",
                        "longitude": "-80.4303"
                    },
                    "docType": "medical",
                    "_id": "3ed46462643de3ae20ed0e6052360b27",
                    "identity": {
                        "firstName": "Dorothy",
                        "lastName": "Rodriguez",
                        "ssn": "305-02-2370",
                        "gender": "F",
                        "race": "White",
                        "dob": "1994-08-22T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2010-08-17T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2010-08-18T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2010-08-22T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0510",
                            "2013-0511",
                            "2013-0512"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "crobinsonjh@scribd.com"
                        },
                        "phone": {
                            "cell": "1-(684)031-7195",
                            "work": "6-(307)980-1898"
                        }
                    },
                    "address": {
                        "street": "0 Kingsford Trail",
                        "city": "Springfield",
                        "state": "Illinois",
                        "postalCode": "62723"
                    },
                    "geo": {
                        "latitude": "39.7495",
                        "longitude": "-89.606"
                    },
                    "docType": "medical",
                    "_id": "2df1adbbb8e302f5a5ea08bc5b6d7de6",
                    "identity": {
                        "firstName": "Catherine",
                        "lastName": "Robinson",
                        "ssn": "545-86-5031",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "1994-04-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "147",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            },
                            {
                                "Cvx": "147",
                                "DateAdministered": "2010-04-09T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Meningococcal MCV4 Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0515"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mharperjg@usatoday.com"
                        },
                        "phone": {
                            "cell": "6-(703)915-4904",
                            "work": "4-(556)120-7931"
                        }
                    },
                    "address": {
                        "street": "92 Norway Maple Crossing",
                        "city": "Salt Lake City",
                        "state": "Utah",
                        "postalCode": "84125"
                    },
                    "geo": {
                        "latitude": "40.6681",
                        "longitude": "-111.9083"
                    },
                    "docType": "medical",
                    "_id": "eab8ddd147913cb42433392ebf816d43",
                    "identity": {
                        "firstName": "Marilyn",
                        "lastName": "Harper",
                        "ssn": "141-28-8384",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2000-03-14T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2004-03-14T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2007-03-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-03-09T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-03-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-03-14T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2001-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0523",
                            "2013-0524",
                            "2013-0525",
                            "2013-0540",
                            "2013-0541",
                            "2013-0542",
                            "2013-0788",
                            "2013-0789"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pelliottja@rakuten.co.jp"
                        },
                        "phone": {
                            "cell": "3-(648)531-5612",
                            "work": "6-(904)390-7814"
                        }
                    },
                    "address": {
                        "street": "143 Stephen Road",
                        "city": "Seattle",
                        "state": "Washington",
                        "postalCode": "98158"
                    },
                    "geo": {
                        "latitude": "47.4497",
                        "longitude": "-122.3076"
                    },
                    "docType": "medical",
                    "_id": "26b5c84a8f013998e625cd637c3b909f",
                    "identity": {
                        "firstName": "Patricia",
                        "lastName": "Elliott",
                        "ssn": "320-33-6823",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1999-03-05T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2000-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2000-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2004-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2004-05-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2000-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2000-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2004-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2000-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2000-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2004-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2004-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2004-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2004-06-04T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2000-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2000-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2000-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2004-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2004-04-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2004-04-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            }
                        ],
                        "cases": [
                            "2013-0527",
                            "2013-0528",
                            "2013-0530",
                            "2013-0535",
                            "2013-0537",
                            "2013-0538"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jwestj9@hhs.gov"
                        },
                        "phone": {
                            "cell": "4-(128)150-7087",
                            "work": "5-(670)536-4370"
                        }
                    },
                    "address": {
                        "street": "2595 Dottie Trail",
                        "city": "Rochester",
                        "state": "New York",
                        "postalCode": "14609"
                    },
                    "geo": {
                        "latitude": "43.174",
                        "longitude": "-77.5637"
                    },
                    "docType": "medical",
                    "_id": "b0d442330206b4402e0d48c49931c6b9",
                    "identity": {
                        "firstName": "Jane",
                        "lastName": "West",
                        "ssn": "159-74-2137",
                        "gender": "F",
                        "race": "White",
                        "dob": "2000-03-05T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "05",
                                "DateAdministered": "2001-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2001-05-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2001-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2001-04-13T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "07",
                                "DateAdministered": "2001-03-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2001-04-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2001-06-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2001-04-13T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2001-09-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2002-02-17T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            }
                        ],
                        "cases": [
                            "2013-0531",
                            "2013-0532",
                            "2013-0534",
                            "2013-0536",
                            "2013-0539"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sricej7@telegraph.co.uk"
                        },
                        "phone": {
                            "cell": "3-(142)915-3345",
                            "work": "6-(030)885-6774"
                        }
                    },
                    "address": {
                        "street": "39853 Jay Place",
                        "city": "Colorado Springs",
                        "state": "Colorado",
                        "postalCode": "80925"
                    },
                    "geo": {
                        "latitude": "38.7378",
                        "longitude": "-104.6459"
                    },
                    "docType": "medical",
                    "_id": "75e68e546d5ef870b89833a3d8e7eeaf",
                    "identity": {
                        "firstName": "Shirley",
                        "lastName": "Rice",
                        "ssn": "715-02-5722",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2004-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "38907003",
                                "codeSys": "SCT",
                                "text": "History of varicella infection",
                                "caseId": "2013-0834"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2007-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2007-05-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-07-15T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-08-12T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0544",
                            "2013-0551",
                            "2013-0552",
                            "2013-0822",
                            "2013-0834"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rgrahamj5@wired.com"
                        },
                        "phone": {
                            "cell": "4-(604)162-3212",
                            "work": "4-(670)776-0266"
                        }
                    },
                    "address": {
                        "street": "32 Hooker Place",
                        "city": "Punta Gorda",
                        "state": "Florida",
                        "postalCode": "33982"
                    },
                    "geo": {
                        "latitude": "26.9668",
                        "longitude": "-81.9545"
                    },
                    "docType": "medical",
                    "_id": "93bacb73b995ccd3f2ff8ca7fabdd9d1",
                    "identity": {
                        "firstName": "Rose",
                        "lastName": "Graham",
                        "ssn": "118-75-9489",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2004-08-08T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2005-08-08T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2005-08-08T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0545"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "njonesj4@washington.edu"
                        },
                        "phone": {
                            "cell": "1-(866)182-6498",
                            "work": "3-(212)285-1044"
                        }
                    },
                    "address": {
                        "street": "31980 Warrior Plaza",
                        "city": "Arlington",
                        "state": "Virginia",
                        "postalCode": "22212"
                    },
                    "geo": {
                        "latitude": "38.8808",
                        "longitude": "-77.113"
                    },
                    "docType": "medical",
                    "_id": "f9e5351fdc935275c45a59a089365637",
                    "identity": {
                        "firstName": "Nancy",
                        "lastName": "Jones",
                        "gender": "F",
                        "dob": "2010-06-14T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-07-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-07-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0546"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dparkerj2@oracle.com"
                        },
                        "phone": {
                            "cell": "6-(929)362-3217",
                            "work": "8-(588)023-2807"
                        }
                    },
                    "address": {
                        "street": "926 Brown Street",
                        "city": "Lexington",
                        "state": "Kentucky",
                        "postalCode": "40576"
                    },
                    "geo": {
                        "latitude": "38.0283",
                        "longitude": "-84.4715"
                    },
                    "docType": "medical",
                    "_id": "51e07f3fb3a14f55914c5ab6058b5f29",
                    "identity": {
                        "firstName": "Doris",
                        "lastName": "Parker",
                        "ssn": "191-04-0970",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2009-10-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-10-13T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2010-11-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0548"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "skimj1@bluehost.com"
                        },
                        "phone": {
                            "cell": "6-(149)708-6504",
                            "work": "1-(632)008-1224"
                        }
                    },
                    "address": {
                        "street": "3 Brown Hill",
                        "city": "Akron",
                        "state": "Ohio",
                        "postalCode": "44329"
                    },
                    "geo": {
                        "latitude": "41.0655",
                        "longitude": "-81.5203"
                    },
                    "docType": "medical",
                    "_id": "332e27f19682ba13ab1f31a9be9b6ab6",
                    "identity": {
                        "firstName": "Sandra",
                        "lastName": "Kim",
                        "ssn": "516-55-2560",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2005-07-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0550",
                            "2013-0819"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jhansoniy@yellowpages.com"
                        },
                        "phone": {
                            "cell": "4-(103)639-6392",
                            "work": "8-(800)205-5998"
                        }
                    },
                    "address": {
                        "street": "62008 Hudson Road",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92137"
                    },
                    "geo": {
                        "latitude": "32.8538",
                        "longitude": "-117.1197"
                    },
                    "docType": "medical",
                    "_id": "517d382ff95e628b433d0a2780e70180",
                    "identity": {
                        "firstName": "Jacqueline",
                        "lastName": "Hanson",
                        "ssn": "624-69-2593",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2004-09-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-09-06T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2005-09-30T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2008-10-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2008-10-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0554",
                            "2013-0823"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "celliottix@umich.edu"
                        },
                        "phone": {
                            "cell": "0-(747)948-4794",
                            "work": "9-(820)380-0720"
                        }
                    },
                    "address": {
                        "street": "9 Spaight Way",
                        "city": "Shreveport",
                        "state": "Louisiana",
                        "postalCode": "71105"
                    },
                    "geo": {
                        "latitude": "32.4589",
                        "longitude": "-93.7143"
                    },
                    "docType": "medical",
                    "_id": "cf96600ee74b9b623649ced54f8744e3",
                    "identity": {
                        "firstName": "Catherine",
                        "lastName": "Elliott",
                        "ssn": "223-82-2215",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-02-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-03-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-03-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-03-30T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-03-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2008-08-13T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2008-11-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0555",
                            "2013-0557",
                            "2013-0824",
                            "2013-0826"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "candersoniw@smh.com.au"
                        },
                        "phone": {
                            "cell": "0-(752)319-5043",
                            "work": "2-(740)234-2804"
                        }
                    },
                    "address": {
                        "street": "08 Sunbrook Avenue",
                        "city": "Lexington",
                        "state": "Kentucky",
                        "postalCode": "40546"
                    },
                    "geo": {
                        "latitude": "38.0283",
                        "longitude": "-84.4715"
                    },
                    "docType": "medical",
                    "_id": "083120261750a2f1f6951b15ddef2587",
                    "identity": {
                        "firstName": "Carol",
                        "lastName": "Anderson",
                        "ssn": "498-30-6555",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2005-01-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-02-02T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-02-26T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0556"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ccarteriv@shareasale.com"
                        },
                        "phone": {
                            "cell": "1-(137)563-5312",
                            "work": "1-(389)254-8058"
                        }
                    },
                    "address": {
                        "street": "60 Village Green Park",
                        "city": "San Francisco",
                        "state": "California",
                        "postalCode": "94121"
                    },
                    "geo": {
                        "latitude": "37.7786",
                        "longitude": "-122.4892"
                    },
                    "docType": "medical",
                    "_id": "06d0d1c4d0926566dfb187ca00f86f0e",
                    "identity": {
                        "firstName": "Christina",
                        "lastName": "Carter",
                        "ssn": "532-45-9947",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-05-22T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-06-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-05-17T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-06-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-05-17T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-06-14T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0558",
                            "2013-0559",
                            "2013-0827",
                            "2013-0829"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bbarnesiu@liveinternet.ru"
                        },
                        "phone": {
                            "cell": "1-(074)199-0867",
                            "work": "0-(942)304-2796"
                        }
                    },
                    "address": {
                        "street": "4657 Mayer Drive",
                        "city": "Lehigh Acres",
                        "state": "Florida",
                        "postalCode": "33972"
                    },
                    "geo": {
                        "latitude": "26.6492",
                        "longitude": "-81.6167"
                    },
                    "docType": "medical",
                    "_id": "37fa0da9bda23a4eb9b7a02baf71a4c1",
                    "identity": {
                        "firstName": "Brenda",
                        "lastName": "Barnes",
                        "ssn": "771-76-6455",
                        "gender": "F",
                        "race": "White",
                        "dob": "2005-07-16T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-07-11T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-08-03T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-07-11T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-08-03T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-07-11T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2006-08-04T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0562",
                            "2013-0563",
                            "2013-0831"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jmurphyit@reference.com"
                        },
                        "phone": {
                            "cell": "5-(670)591-3818",
                            "work": "5-(990)481-1390"
                        }
                    },
                    "address": {
                        "street": "81 West Road",
                        "city": "Albany",
                        "state": "New York",
                        "postalCode": "12210"
                    },
                    "geo": {
                        "latitude": "42.6568",
                        "longitude": "-73.7605"
                    },
                    "docType": "medical",
                    "_id": "bb275d64c3386cc375e30e0c91a69d6b",
                    "identity": {
                        "firstName": "Julia",
                        "lastName": "Murphy",
                        "ssn": "412-80-6306",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2004-09-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "07",
                                "DateAdministered": "2005-11-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MUMPSVAX"
                            },
                            {
                                "Cvx": "06",
                                "DateAdministered": "2006-01-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "MERUVAX II"
                            },
                            {
                                "Cvx": "05",
                                "DateAdministered": "2006-09-15T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ATTENUVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2007-09-15T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0565"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "eelliottir@phoca.cz"
                        },
                        "phone": {
                            "cell": "5-(748)524-1888",
                            "work": "4-(621)112-4457"
                        }
                    },
                    "address": {
                        "street": "8 Judy Crossing",
                        "city": "Philadelphia",
                        "state": "Pennsylvania",
                        "postalCode": "19120"
                    },
                    "geo": {
                        "latitude": "40.0343",
                        "longitude": "-75.1213"
                    },
                    "docType": "medical",
                    "_id": "044c17b91f995c860a257ee1c848b636",
                    "identity": {
                        "firstName": "Evelyn",
                        "lastName": "Elliott",
                        "ssn": "843-03-2267",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-08-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0567"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2011-09-02T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0567"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rrodrigueziq@shareasale.com"
                        },
                        "phone": {
                            "cell": "3-(778)527-4103",
                            "work": "6-(555)537-7524"
                        }
                    },
                    "address": {
                        "street": "32426 Clemons Avenue",
                        "city": "Miami",
                        "state": "Florida",
                        "postalCode": "33196"
                    },
                    "geo": {
                        "latitude": "25.6615",
                        "longitude": "-80.441"
                    },
                    "docType": "medical",
                    "_id": "5a9d9632ffec84efff7a5391a47ce82b",
                    "identity": {
                        "firstName": "Ruth",
                        "lastName": "Rodriguez",
                        "ssn": "178-36-3522",
                        "gender": "F",
                        "race": "White",
                        "dob": "2011-09-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC27",
                                "codeSys": "CDCPHINVS",
                                "text": "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
                                "caseId": "2013-0568"
                            }
                        ],
                        "series": [],
                        "cases": [
                            "2013-0568"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mmorrisonip@nba.com"
                        },
                        "phone": {
                            "cell": "1-(643)898-2316",
                            "work": "5-(047)444-0031"
                        }
                    },
                    "address": {
                        "street": "50977 Talmadge Trail",
                        "city": "Albany",
                        "state": "New York",
                        "postalCode": "12247"
                    },
                    "geo": {
                        "latitude": "42.6149",
                        "longitude": "-73.9708"
                    },
                    "docType": "medical",
                    "_id": "101868c5934405efaff2c402a32321de",
                    "identity": {
                        "firstName": "Michelle",
                        "lastName": "Morrison",
                        "ssn": "183-33-3643",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2007-08-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-07-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-08-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-08-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-08-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2008-09-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0570",
                            "2013-0571",
                            "2013-0572"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jrobinsonio@opera.com"
                        },
                        "phone": {
                            "cell": "3-(019)380-9598",
                            "work": "5-(073)275-3568"
                        }
                    },
                    "address": {
                        "street": "20933 Pawling Trail",
                        "city": "Bronx",
                        "state": "New York",
                        "postalCode": "10459"
                    },
                    "geo": {
                        "latitude": "40.8247",
                        "longitude": "-73.894"
                    },
                    "docType": "medical",
                    "_id": "f9bf5f08d0670eec812dd6665858ee3b",
                    "identity": {
                        "firstName": "Julia",
                        "lastName": "Robinson",
                        "ssn": "653-41-6994",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2004-04-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-07-05T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-07-28T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0573"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "kgordonin@kickstarter.com"
                        },
                        "phone": {
                            "cell": "6-(675)277-5017",
                            "work": "0-(244)082-0803"
                        }
                    },
                    "address": {
                        "street": "620 Marquette Hill",
                        "city": "Philadelphia",
                        "state": "Pennsylvania",
                        "postalCode": "19184"
                    },
                    "geo": {
                        "latitude": "40.0018",
                        "longitude": "-75.1179"
                    },
                    "docType": "medical",
                    "_id": "0d965fa49382138d51efb1290a54f706",
                    "identity": {
                        "firstName": "Kelly",
                        "lastName": "Gordon",
                        "ssn": "910-72-2678",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2004-04-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2005-05-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2005-05-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0574"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mcollinsim@sfgate.com"
                        },
                        "phone": {
                            "cell": "7-(007)030-7185",
                            "work": "9-(734)146-3833"
                        }
                    },
                    "address": {
                        "street": "2 Morrow Pass",
                        "city": "Denton",
                        "state": "Texas",
                        "postalCode": "76210"
                    },
                    "geo": {
                        "latitude": "33.1428",
                        "longitude": "-97.0727"
                    },
                    "docType": "medical",
                    "_id": "e6c2aa0d4969b13aee334aef30951b7c",
                    "identity": {
                        "firstName": "Mildred",
                        "lastName": "Collins",
                        "ssn": "361-20-7731",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2009-10-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-10T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0576"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lfordil@harvard.edu"
                        },
                        "phone": {
                            "cell": "4-(298)480-8991",
                            "work": "2-(128)839-6177"
                        }
                    },
                    "address": {
                        "street": "54 Kingsford Circle",
                        "city": "Abilene",
                        "state": "Texas",
                        "postalCode": "79605"
                    },
                    "geo": {
                        "latitude": "32.432",
                        "longitude": "-99.7724"
                    },
                    "docType": "medical",
                    "_id": "1b470f5dbc78c9a6dfdac94098f9e64e",
                    "identity": {
                        "firstName": "Lois",
                        "lastName": "Ford",
                        "ssn": "919-49-9757",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2008-03-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "100",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            }
                        ],
                        "cases": [
                            "2013-0577"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "smartinezij@adobe.com"
                        },
                        "phone": {
                            "cell": "7-(202)024-4188",
                            "work": "6-(522)110-0997"
                        }
                    },
                    "address": {
                        "street": "9028 Meadow Valley Parkway",
                        "city": "Akron",
                        "state": "Ohio",
                        "postalCode": "44329"
                    },
                    "geo": {
                        "latitude": "41.0655",
                        "longitude": "-81.5203"
                    },
                    "docType": "medical",
                    "_id": "018d2e93216991a1daebdb2012bef7f9",
                    "identity": {
                        "firstName": "Sarah",
                        "lastName": "Martinez",
                        "ssn": "101-84-4127",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2009-07-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-07-10T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0578"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "cmurrayig@studiopress.com"
                        },
                        "phone": {
                            "cell": "7-(661)924-7596",
                            "work": "3-(306)546-7281"
                        }
                    },
                    "address": {
                        "street": "7 Bunker Hill Junction",
                        "city": "Memphis",
                        "state": "Tennessee",
                        "postalCode": "38150"
                    },
                    "geo": {
                        "latitude": "35.2017",
                        "longitude": "-89.9715"
                    },
                    "docType": "medical",
                    "_id": "ac4bce5284c69fd1b4dc8c93c8f94864",
                    "identity": {
                        "firstName": "Cynthia",
                        "lastName": "Murray",
                        "gender": "F",
                        "dob": "2010-09-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-18T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-11-14T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0579"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "awallaceif@cocolog-nifty.com"
                        },
                        "phone": {
                            "cell": "9-(679)887-7275",
                            "work": "7-(548)368-7294"
                        }
                    },
                    "address": {
                        "street": "19 8th Crossing",
                        "city": "Glendale",
                        "state": "Arizona",
                        "postalCode": "85311"
                    },
                    "geo": {
                        "latitude": "33.2765",
                        "longitude": "-112.1872"
                    },
                    "docType": "medical",
                    "_id": "bb619396f188daed4e8bf37eb0f620b1",
                    "identity": {
                        "firstName": "Ann",
                        "lastName": "Wallace",
                        "ssn": "962-19-8237",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2011-07-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-14T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-11T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-07T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-14T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-11T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-08T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-08-17T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-09-14T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-12T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0590",
                            "2013-0591",
                            "2013-0592"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sdayid@tamu.edu"
                        },
                        "phone": {
                            "cell": "4-(217)745-2853",
                            "work": "8-(098)396-1270"
                        }
                    },
                    "address": {
                        "street": "61 Oak Valley Hill",
                        "city": "Springfield",
                        "state": "Ohio",
                        "postalCode": "45505"
                    },
                    "geo": {
                        "latitude": "39.9106",
                        "longitude": "-83.7856"
                    },
                    "docType": "medical",
                    "_id": "4ac95886f3fa0e56b66b6e02d45244b7",
                    "identity": {
                        "firstName": "Shirley",
                        "lastName": "Day",
                        "ssn": "420-66-7336",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-03-04T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "100",
                                "DateAdministered": "2010-09-04T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-11-04T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-04T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0594"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dbanksib@cornell.edu"
                        },
                        "phone": {
                            "cell": "3-(860)905-5236",
                            "work": "2-(926)038-6733"
                        }
                    },
                    "address": {
                        "street": "5050 Mccormick Crossing",
                        "city": "Orlando",
                        "state": "Florida",
                        "postalCode": "32854"
                    },
                    "geo": {
                        "latitude": "28.5663",
                        "longitude": "-81.2608"
                    },
                    "docType": "medical",
                    "_id": "e387a2d8165f688d22f61c436ba7c225",
                    "identity": {
                        "firstName": "Doris",
                        "lastName": "Banks",
                        "ssn": "932-86-7268",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2009-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "100",
                                "DateAdministered": "2010-01-01T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2010-02-01T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-06-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2009-12-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-06-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2009-10-01T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2009-12-01T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0595",
                            "2013-0600",
                            "2013-0601",
                            "2013-0649"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dgreenei7@disqus.com"
                        },
                        "phone": {
                            "cell": "8-(396)754-9008",
                            "work": "5-(036)600-2123"
                        }
                    },
                    "address": {
                        "street": "0090 Loftsgordon Parkway",
                        "city": "Berkeley",
                        "state": "California",
                        "postalCode": "94712"
                    },
                    "geo": {
                        "latitude": "37.6802",
                        "longitude": "-121.9215"
                    },
                    "docType": "medical",
                    "_id": "e025ec4e34df17036b380503975b8018",
                    "identity": {
                        "firstName": "Diane",
                        "lastName": "Greene",
                        "ssn": "961-18-2038",
                        "gender": "F",
                        "race": "White",
                        "dob": "2010-11-10T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-12-17T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-12-17T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0596",
                            "2013-0658"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "akingi4@cafepress.com"
                        },
                        "phone": {
                            "cell": "4-(592)006-3767",
                            "work": "1-(053)565-5631"
                        }
                    },
                    "address": {
                        "street": "1 Bowman Place",
                        "city": "Aurora",
                        "state": "Colorado",
                        "postalCode": "80015"
                    },
                    "geo": {
                        "latitude": "39.6255",
                        "longitude": "-104.7874"
                    },
                    "docType": "medical",
                    "_id": "417c63cfb6bda132a9f463ecc15bc2c1",
                    "identity": {
                        "firstName": "Anne",
                        "lastName": "King",
                        "ssn": "357-57-4785",
                        "gender": "F",
                        "race": "White",
                        "dob": "2011-09-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-10-11T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-11-05T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0603"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lgardneri3@symantec.com"
                        },
                        "phone": {
                            "cell": "2-(711)682-3126",
                            "work": "6-(865)007-0050"
                        }
                    },
                    "address": {
                        "street": "69 Southridge Alley",
                        "city": "Kingsport",
                        "state": "Tennessee",
                        "postalCode": "37665"
                    },
                    "geo": {
                        "latitude": "36.5799",
                        "longitude": "-82.5733"
                    },
                    "docType": "medical",
                    "_id": "e2360eaf0baa920adce8454e11ea7e5a",
                    "identity": {
                        "firstName": "Louise",
                        "lastName": "Gardner",
                        "ssn": "725-31-4376",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2009-12-12T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC27",
                                "codeSys": "CDCPHINVS",
                                "text": "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
                                "caseId": "2013-0837"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-01-22T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-02-18T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-03-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-12-24T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-12-20T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0604",
                            "2013-0837"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "agilberti1@jigsy.com"
                        },
                        "phone": {
                            "cell": "3-(913)297-4523",
                            "work": "4-(892)192-0757"
                        }
                    },
                    "address": {
                        "street": "4 Bultman Point",
                        "city": "Philadelphia",
                        "state": "Pennsylvania",
                        "postalCode": "19104"
                    },
                    "geo": {
                        "latitude": "39.9597",
                        "longitude": "-75.2024"
                    },
                    "docType": "medical",
                    "_id": "03bcc0c6788d7127610fcbd7dd586ef6",
                    "identity": {
                        "firstName": "Annie",
                        "lastName": "Gilbert",
                        "ssn": "491-34-8204",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2010-04-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-21T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-22T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2010-10-01T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-02-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-03-01T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-04-26T04:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-08-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0612",
                            "2013-0613",
                            "2013-0614",
                            "2013-0652"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jelliotti0@indiatimes.com"
                        },
                        "phone": {
                            "cell": "8-(999)841-8497",
                            "work": "1-(229)765-8324"
                        }
                    },
                    "address": {
                        "street": "8153 Fordem Circle",
                        "city": "Los Angeles",
                        "state": "California",
                        "postalCode": "90065"
                    },
                    "geo": {
                        "latitude": "34.1073",
                        "longitude": "-118.2266"
                    },
                    "docType": "medical",
                    "_id": "944c4f23aa3d48e195f84989511f391c",
                    "identity": {
                        "firstName": "Judith",
                        "lastName": "Elliott",
                        "ssn": "670-78-7490",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2008-06-06T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "100",
                                "DateAdministered": "2008-08-06T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2008-10-06T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2008-12-06T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "100",
                                "DateAdministered": "2009-12-06T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            },
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-03-05T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0619"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "agonzalezhz@tumblr.com"
                        },
                        "phone": {
                            "cell": "7-(075)706-2880",
                            "work": "3-(625)142-0908"
                        }
                    },
                    "address": {
                        "street": "222 Crowley Court",
                        "city": "Springfield",
                        "state": "Massachusetts",
                        "postalCode": "01152"
                    },
                    "geo": {
                        "latitude": "42.1707",
                        "longitude": "-72.6048"
                    },
                    "docType": "medical",
                    "_id": "289b0f3428d6a3ea034dad7a41fd87a6",
                    "identity": {
                        "firstName": "Ashley",
                        "lastName": "Gonzalez",
                        "ssn": "775-32-1091",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2007-07-11T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0621"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "100",
                                "DateAdministered": "2007-09-11T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "PREVNAR 7"
                            }
                        ],
                        "cases": [
                            "2013-0621"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "sharthy@reverbnation.com"
                        },
                        "phone": {
                            "cell": "2-(239)156-8423",
                            "work": "6-(299)926-9489"
                        }
                    },
                    "address": {
                        "street": "81202 Grasskamp Street",
                        "city": "Des Moines",
                        "state": "Iowa",
                        "postalCode": "50310"
                    },
                    "geo": {
                        "latitude": "41.6255",
                        "longitude": "-93.6736"
                    },
                    "docType": "medical",
                    "_id": "8300c08aa0f407c0572e9823fbf2a3cf",
                    "identity": {
                        "firstName": "Shirley",
                        "lastName": "Hart",
                        "ssn": "383-21-8111",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-02-03T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2012-01-03T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            }
                        ],
                        "cases": [
                            "2013-0624"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ddixonhx@prweb.com"
                        },
                        "phone": {
                            "cell": "3-(379)678-5642",
                            "work": "7-(648)548-5817"
                        }
                    },
                    "address": {
                        "street": "04134 Stuart Hill",
                        "city": "Indianapolis",
                        "state": "Indiana",
                        "postalCode": "46226"
                    },
                    "geo": {
                        "latitude": "39.8326",
                        "longitude": "-86.0836"
                    },
                    "docType": "medical",
                    "_id": "65820ce86839dcc9d2b389b66a3a1a1c",
                    "identity": {
                        "firstName": "Diana",
                        "lastName": "Dixon",
                        "ssn": "787-90-4361",
                        "gender": "F",
                        "race": "White",
                        "dob": "2010-12-12T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0836"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "133",
                                "DateAdministered": "2011-12-12T05:00:00.000Z",
                                "Mvx": "PFR",
                                "VaccineName": "PREVNAR 13"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2012-03-15T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0625",
                            "2013-0836"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "plawrencehw@cnet.com"
                        },
                        "phone": {
                            "cell": "6-(008)103-9662",
                            "work": "3-(224)366-9517"
                        }
                    },
                    "address": {
                        "street": "2 Towne Road",
                        "city": "Oakland",
                        "state": "California",
                        "postalCode": "94622"
                    },
                    "geo": {
                        "latitude": "37.799",
                        "longitude": "-122.2337"
                    },
                    "docType": "medical",
                    "_id": "c5304e1ac47030eb515ab86617828ce5",
                    "identity": {
                        "firstName": "Paula",
                        "lastName": "Lawrence",
                        "gender": "F",
                        "dob": "2007-07-08T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-09-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-04-08T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0629"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rpalmerhq@tiny.cc"
                        },
                        "phone": {
                            "cell": "5-(049)178-2536",
                            "work": "2-(308)871-8449"
                        }
                    },
                    "address": {
                        "street": "2 Pepper Wood Place",
                        "city": "Brockton",
                        "state": "Massachusetts",
                        "postalCode": "02405"
                    },
                    "geo": {
                        "latitude": "41.9705",
                        "longitude": "-70.7014"
                    },
                    "docType": "medical",
                    "_id": "0e7b6644237f81f6c2b071c5d41e0d5e",
                    "identity": {
                        "firstName": "Rebecca",
                        "lastName": "Palmer",
                        "ssn": "984-58-2738",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2007-12-12T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-12-12T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-12T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0630"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rmoorehm@ask.com"
                        },
                        "phone": {
                            "cell": "8-(638)738-2257",
                            "work": "0-(490)440-9647"
                        }
                    },
                    "address": {
                        "street": "9175 Blaine Street",
                        "city": "Austin",
                        "state": "Texas",
                        "postalCode": "78737"
                    },
                    "geo": {
                        "latitude": "30.2107",
                        "longitude": "-97.9427"
                    },
                    "docType": "medical",
                    "_id": "72653face4d51bc0d8683303c47a2ee7",
                    "identity": {
                        "firstName": "Robin",
                        "lastName": "Moore",
                        "ssn": "194-53-1975",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1999-06-23T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "1999-08-23T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "1999-10-23T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2003-06-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0635"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mharthk@simplemachines.org"
                        },
                        "phone": {
                            "cell": "5-(996)959-5526",
                            "work": "5-(682)583-8754"
                        }
                    },
                    "address": {
                        "street": "7 Lindbergh Drive",
                        "city": "Wichita",
                        "state": "Kansas",
                        "postalCode": "67236"
                    },
                    "geo": {
                        "latitude": "37.5422",
                        "longitude": "-97.2871"
                    },
                    "docType": "medical",
                    "_id": "4c4071ca46420efe0141b73f118dcbc2",
                    "identity": {
                        "firstName": "Martha",
                        "lastName": "Hart",
                        "ssn": "461-72-1425",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2007-08-22T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-10-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-12-22T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-08-17T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-08-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-03-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-08-18T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-08-22T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-01-22T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-08-18T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0636",
                            "2013-0638",
                            "2013-0639"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lleehh@weibo.com"
                        },
                        "phone": {
                            "cell": "2-(294)805-8717",
                            "work": "5-(116)349-4868"
                        }
                    },
                    "address": {
                        "street": "9 Sloan Trail",
                        "city": "Houston",
                        "state": "Texas",
                        "postalCode": "77040"
                    },
                    "geo": {
                        "latitude": "29.8744",
                        "longitude": "-95.5278"
                    },
                    "docType": "medical",
                    "_id": "f816361683b3caf7af3e1ada5d2724c6",
                    "identity": {
                        "firstName": "Laura",
                        "lastName": "Lee",
                        "ssn": "135-62-1853",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1997-03-18T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "1997-05-18T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "1997-07-18T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2001-03-18T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0641"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jhowardhe@soundcloud.com"
                        },
                        "phone": {
                            "cell": "5-(827)468-8308",
                            "work": "4-(969)366-0347"
                        }
                    },
                    "address": {
                        "street": "6141 Bobwhite Street",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20566"
                    },
                    "geo": {
                        "latitude": "38.8971",
                        "longitude": "-77.0554"
                    },
                    "docType": "medical",
                    "_id": "5b389f34e7732c79a8700f75cfc6bb9e",
                    "identity": {
                        "firstName": "Jacqueline",
                        "lastName": "Howard",
                        "ssn": "251-67-6283",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2007-12-25T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-03-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-07-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-12-26T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-20T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-03-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-07-25T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-12-26T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-12-21T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0643",
                            "2013-0644"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rporterhb@live.com"
                        },
                        "phone": {
                            "cell": "5-(440)407-0974",
                            "work": "7-(217)535-0386"
                        }
                    },
                    "address": {
                        "street": "65 Tony Circle",
                        "city": "San Francisco",
                        "state": "California",
                        "postalCode": "94154"
                    },
                    "geo": {
                        "latitude": "37.7848",
                        "longitude": "-122.7278"
                    },
                    "docType": "medical",
                    "_id": "7b10951833147eca8157a25ab00eda39",
                    "identity": {
                        "firstName": "Ruth",
                        "lastName": "Porter",
                        "ssn": "936-38-7605",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2001-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2001-08-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2001-10-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2002-02-02T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0645"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "ebellh9@acquirethisname.com"
                        },
                        "phone": {
                            "cell": "4-(611)536-7072",
                            "work": "8-(518)781-1595"
                        }
                    },
                    "address": {
                        "street": "87442 Sundown Road",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20430"
                    },
                    "geo": {
                        "latitude": "38.9164",
                        "longitude": "-76.9948"
                    },
                    "docType": "medical",
                    "_id": "f6fccf0f0b70fc9fea4e520913fe4ad4",
                    "identity": {
                        "firstName": "Evelyn",
                        "lastName": "Bell",
                        "ssn": "859-41-7049",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2007-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-07-13T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-08-07T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-09-02T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2011-06-01T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0648"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lcolemanh8@nba.com"
                        },
                        "phone": {
                            "cell": "9-(681)227-3675",
                            "work": "4-(942)467-9742"
                        }
                    },
                    "address": {
                        "street": "766 Oak Valley Hill",
                        "city": "Stockton",
                        "state": "California",
                        "postalCode": "95205"
                    },
                    "geo": {
                        "latitude": "37.9625",
                        "longitude": "-121.2624"
                    },
                    "docType": "medical",
                    "_id": "1efb277ef00b51a3242520edf91bdd23",
                    "identity": {
                        "firstName": "Louise",
                        "lastName": "Coleman",
                        "ssn": "251-59-4678",
                        "gender": "F",
                        "race": "White",
                        "dob": "2006-11-15T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-05-20T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-05-19T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2007-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2008-11-15T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-05-19T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-11-19T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0655",
                            "2013-0656",
                            "2013-0657"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mbrooksh7@flickr.com"
                        },
                        "phone": {
                            "cell": "5-(183)989-8637",
                            "work": "3-(644)745-2947"
                        }
                    },
                    "address": {
                        "street": "50 New Castle Place",
                        "city": "Tyler",
                        "state": "Texas",
                        "postalCode": "75705"
                    },
                    "geo": {
                        "latitude": "32.3766",
                        "longitude": "-95.1252"
                    },
                    "docType": "medical",
                    "_id": "6be75e7cdf123b1ff00420fcde83a328",
                    "identity": {
                        "firstName": "Martha",
                        "lastName": "Brooks",
                        "ssn": "152-37-4083",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2004-10-16T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "02",
                                "DateAdministered": "2004-12-16T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "ORIMUNE"
                            },
                            {
                                "Cvx": "02",
                                "DateAdministered": "2005-02-16T05:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "ORIMUNE"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2009-10-16T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0661"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tholmesh6@soundcloud.com"
                        },
                        "phone": {
                            "cell": "5-(113)144-1992",
                            "work": "1-(414)871-6740"
                        }
                    },
                    "address": {
                        "street": "84 Maywood Road",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20575"
                    },
                    "geo": {
                        "latitude": "38.8933",
                        "longitude": "-77.0146"
                    },
                    "docType": "medical",
                    "_id": "3f5c3e7e002cb55c38ba03687a9b023a",
                    "identity": {
                        "firstName": "Theresa",
                        "lastName": "Holmes",
                        "ssn": "502-26-4111",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "1999-04-13T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "02",
                                "DateAdministered": "1999-06-13T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "ORIMUNE"
                            },
                            {
                                "Cvx": "02",
                                "DateAdministered": "1999-08-13T04:00:00.000Z",
                                "Mvx": "WAL",
                                "VaccineName": "ORIMUNE"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2002-04-13T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2004-04-17T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0662"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "jfoxh5@fastcompany.com"
                        },
                        "phone": {
                            "cell": "2-(255)846-7442",
                            "work": "3-(703)564-6567"
                        }
                    },
                    "address": {
                        "street": "8234 Lillian Road",
                        "city": "Jackson",
                        "state": "Mississippi",
                        "postalCode": "39204"
                    },
                    "geo": {
                        "latitude": "32.2832",
                        "longitude": "-90.2306"
                    },
                    "docType": "medical",
                    "_id": "50131f958ea8b72cd8b6713b2ab34c9c",
                    "identity": {
                        "firstName": "Julia",
                        "lastName": "Fox",
                        "ssn": "789-64-7669",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2010-07-24T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC20",
                                "codeSys": "CDCPHINVS",
                                "text": "allergy to previous dose of this vaccine or to any of its unlisted vaccine components (anaphylactic)",
                                "caseId": "2013-0663"
                            }
                        ],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2010-09-24T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0663"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tstewarth3@weebly.com"
                        },
                        "phone": {
                            "cell": "6-(934)349-3230",
                            "work": "9-(935)363-7831"
                        }
                    },
                    "address": {
                        "street": "10 Goodland Terrace",
                        "city": "New York City",
                        "state": "New York",
                        "postalCode": "10105"
                    },
                    "geo": {
                        "latitude": "40.7628",
                        "longitude": "-73.9785"
                    },
                    "docType": "medical",
                    "_id": "35cd954a986cca647a8c02e572c99b19",
                    "identity": {
                        "firstName": "Theresa",
                        "lastName": "Stewart",
                        "ssn": "536-29-3497",
                        "gender": "F",
                        "race": "White",
                        "dob": "2005-09-10T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-10-18T04:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            },
                            {
                                "Cvx": "10",
                                "DateAdministered": "2005-11-14T05:00:00.000Z",
                                "Mvx": "PMC",
                                "VaccineName": "IPOL"
                            }
                        ],
                        "cases": [
                            "2013-0674"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "stuckerh1@topsy.com"
                        },
                        "phone": {
                            "cell": "4-(721)100-8775",
                            "work": "2-(175)484-9492"
                        }
                    },
                    "address": {
                        "street": "635 Northport Point",
                        "city": "Raleigh",
                        "state": "North Carolina",
                        "postalCode": "27615"
                    },
                    "geo": {
                        "latitude": "35.8887",
                        "longitude": "-78.6393"
                    },
                    "docType": "medical",
                    "_id": "be0e8ddc49e84f09c9c429310daa89a6",
                    "identity": {
                        "firstName": "Susan",
                        "lastName": "Tucker",
                        "gender": "F",
                        "dob": "2012-02-05T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-04-17T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-04-18T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-25T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-04-22T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            }
                        ],
                        "cases": [
                            "2013-0756",
                            "2013-0757",
                            "2013-0758"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dmooreh0@istockphoto.com"
                        },
                        "phone": {
                            "cell": "6-(951)541-6991",
                            "work": "0-(691)828-5746"
                        }
                    },
                    "address": {
                        "street": "870 Hoard Hill",
                        "city": "Boston",
                        "state": "Massachusetts",
                        "postalCode": "02208"
                    },
                    "geo": {
                        "latitude": "42.3389",
                        "longitude": "-70.9196"
                    },
                    "docType": "medical",
                    "_id": "7b966902fb4b4f077df0bc28571364fd",
                    "identity": {
                        "firstName": "Diane",
                        "lastName": "Moore",
                        "ssn": "829-03-2738",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2012-01-02T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-08T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-13T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            }
                        ],
                        "cases": [
                            "2013-0762",
                            "2013-0763",
                            "2013-0765"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lleegz@prlog.org"
                        },
                        "phone": {
                            "cell": "5-(868)472-8446",
                            "work": "4-(374)356-7428"
                        }
                    },
                    "address": {
                        "street": "58 Kinsman Plaza",
                        "city": "Sacramento",
                        "state": "California",
                        "postalCode": "94280"
                    },
                    "geo": {
                        "latitude": "38.3774",
                        "longitude": "-121.4444"
                    },
                    "docType": "medical",
                    "_id": "e3a6cfccb3e3be5979775c8346c1844c",
                    "identity": {
                        "firstName": "Linda",
                        "lastName": "Lee",
                        "ssn": "726-09-9281",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2011-12-01T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-01-10T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-04T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-01-12T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-05T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-01-12T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-09T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-24T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-25T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-01T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-02-29T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-04T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-12T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-05T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-01-12T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-02-09T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            }
                        ],
                        "cases": [
                            "2013-0766",
                            "2013-0767",
                            "2013-0768",
                            "2013-0769",
                            "2013-0770",
                            "2013-0771",
                            "2013-0782",
                            "2013-0783",
                            "2013-0784"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "hfullergy@macromedia.com"
                        },
                        "phone": {
                            "cell": "1-(902)127-8829",
                            "work": "0-(492)907-4555"
                        }
                    },
                    "address": {
                        "street": "00 Pennsylvania Way",
                        "city": "Washington",
                        "state": "District of Columbia",
                        "postalCode": "20238"
                    },
                    "geo": {
                        "latitude": "38.8933",
                        "longitude": "-77.0146"
                    },
                    "docType": "medical",
                    "_id": "2821a848ac5bd576949d8963cb7283dd",
                    "identity": {
                        "firstName": "Helen",
                        "lastName": "Fuller",
                        "ssn": "439-94-7013",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2011-12-28T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-04-15T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            }
                        ],
                        "cases": [
                            "2013-0773"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "agonzalesgx@rakuten.co.jp"
                        },
                        "phone": {
                            "cell": "0-(211)679-9054",
                            "work": "3-(833)601-9666"
                        }
                    },
                    "address": {
                        "street": "84 Meadow Vale Street",
                        "city": "El Paso",
                        "state": "Texas",
                        "postalCode": "88589"
                    },
                    "geo": {
                        "latitude": "31.6948",
                        "longitude": "-106.3"
                    },
                    "docType": "medical",
                    "_id": "be71bc257ef08a7c4187250eeae79918",
                    "identity": {
                        "firstName": "Anne",
                        "lastName": "Gonzales",
                        "ssn": "560-23-2475",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-08-17T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "119",
                                "DateAdministered": "2011-11-17T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            }
                        ],
                        "cases": [
                            "2013-0774"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "dmorenogw@w3.org"
                        },
                        "phone": {
                            "cell": "1-(741)263-1168",
                            "work": "9-(952)572-6803"
                        }
                    },
                    "address": {
                        "street": "94 Muir Crossing",
                        "city": "Carol Stream",
                        "state": "Illinois",
                        "postalCode": "60351"
                    },
                    "geo": {
                        "latitude": "41.9166",
                        "longitude": "-88.1208"
                    },
                    "docType": "medical",
                    "_id": "6c62001f74185fcde0f13e73edd1638b",
                    "identity": {
                        "firstName": "Denise",
                        "lastName": "Moreno",
                        "ssn": "766-18-3142",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2012-01-06T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-03-06T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-05-06T04:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "119",
                                "DateAdministered": "2012-03-06T05:00:00.000Z",
                                "Mvx": "SKB",
                                "VaccineName": "ROTARIX"
                            },
                            {
                                "Cvx": "116",
                                "DateAdministered": "2012-05-06T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "ROTATEQ"
                            }
                        ],
                        "cases": [
                            "2013-0776",
                            "2013-0777"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mdixongu@ebay.co.uk"
                        },
                        "phone": {
                            "cell": "0-(430)900-3278",
                            "work": "8-(002)765-5829"
                        }
                    },
                    "address": {
                        "street": "04 Canary Terrace",
                        "city": "San Antonio",
                        "state": "Texas",
                        "postalCode": "78230"
                    },
                    "geo": {
                        "latitude": "29.5407",
                        "longitude": "-98.5521"
                    },
                    "docType": "medical",
                    "_id": "65a95c8aea1db017ba912fd21e8e8e61",
                    "identity": {
                        "firstName": "Michelle",
                        "lastName": "Dixon",
                        "ssn": "136-70-4506",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2011-12-06T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "122",
                                "DateAdministered": "2012-02-06T05:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Rotavirus Unspecified"
                            },
                            {
                                "Cvx": "122",
                                "DateAdministered": "2012-04-06T04:00:00.000Z",
                                "Mvx": null,
                                "VaccineName": "Rotavirus Unspecified"
                            }
                        ],
                        "cases": [
                            "2013-0778"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "pfloresgs@soup.io"
                        },
                        "phone": {
                            "cell": "7-(928)261-6226",
                            "work": "5-(034)012-2050"
                        }
                    },
                    "address": {
                        "street": "8 Arapahoe Point",
                        "city": "Pittsburgh",
                        "state": "Pennsylvania",
                        "postalCode": "15286"
                    },
                    "geo": {
                        "latitude": "40.4344",
                        "longitude": "-80.0248"
                    },
                    "docType": "medical",
                    "_id": "2f619e19541bae74b23d89a7cd919342",
                    "identity": {
                        "firstName": "Patricia",
                        "lastName": "Flores",
                        "ssn": "182-32-8518",
                        "gender": "F",
                        "race": "Black",
                        "dob": "1991-06-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2004-06-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0794"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "lcoxgq@dmoz.org"
                        },
                        "phone": {
                            "cell": "3-(475)033-4263",
                            "work": "7-(097)596-9461"
                        }
                    },
                    "address": {
                        "street": "2272 Columbus Point",
                        "city": "Phoenix",
                        "state": "Arizona",
                        "postalCode": "85040"
                    },
                    "geo": {
                        "latitude": "33.4061",
                        "longitude": "-112.0265"
                    },
                    "docType": "medical",
                    "_id": "4425ad5fc5ee2ee5b3d08dc11b48030e",
                    "identity": {
                        "firstName": "Lori",
                        "lastName": "Cox",
                        "ssn": "422-58-1639",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "1991-06-02T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [],
                        "cases": [
                            "2013-0795"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aharpergo@nba.com"
                        },
                        "phone": {
                            "cell": "5-(871)025-6171",
                            "work": "0-(924)644-0559"
                        }
                    },
                    "address": {
                        "street": "7631 Bayside Point",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92137"
                    },
                    "geo": {
                        "latitude": "32.8538",
                        "longitude": "-117.1197"
                    },
                    "docType": "medical",
                    "_id": "5e0719c1c8a07d635fd4272ea6d79897",
                    "identity": {
                        "firstName": "Amanda",
                        "lastName": "Harper",
                        "ssn": "472-69-2196",
                        "gender": "F",
                        "race": "White",
                        "dob": "1998-10-18T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-10-18T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-11-15T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0807"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mfergusongn@seesaa.net"
                        },
                        "phone": {
                            "cell": "8-(874)366-3304",
                            "work": "8-(061)760-1153"
                        }
                    },
                    "address": {
                        "street": "5 Northport Place",
                        "city": "Baton Rouge",
                        "state": "Louisiana",
                        "postalCode": "70883"
                    },
                    "geo": {
                        "latitude": "30.5159",
                        "longitude": "-91.0804"
                    },
                    "docType": "medical",
                    "_id": "bd9c1ee1788ae4fa10829bcd70da4c7d",
                    "identity": {
                        "firstName": "Mildred",
                        "lastName": "Ferguson",
                        "ssn": "684-56-9678",
                        "gender": "F",
                        "race": "Black",
                        "dob": "2009-11-11T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-11-12T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-12-09T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0808"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "phawkinsgl@wunderground.com"
                        },
                        "phone": {
                            "cell": "8-(494)925-5272",
                            "work": "4-(737)218-8735"
                        }
                    },
                    "address": {
                        "street": "35 Pepper Wood Way",
                        "city": "San Diego",
                        "state": "California",
                        "postalCode": "92160"
                    },
                    "geo": {
                        "latitude": "33.0169",
                        "longitude": "-116.846"
                    },
                    "docType": "medical",
                    "_id": "1d4f91b868a084bfb403a511d5bba53f",
                    "identity": {
                        "firstName": "Phyllis",
                        "lastName": "Hawkins",
                        "ssn": "202-33-5241",
                        "gender": "F",
                        "race": "White",
                        "dob": "2008-08-08T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2009-08-08T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2009-08-08T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0813"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "shuntgk@theguardian.com"
                        },
                        "phone": {
                            "cell": "8-(188)495-9027",
                            "work": "9-(282)598-4058"
                        }
                    },
                    "address": {
                        "street": "0 Kenwood Street",
                        "city": "Los Angeles",
                        "state": "California",
                        "postalCode": "90094"
                    },
                    "geo": {
                        "latitude": "33.9754",
                        "longitude": "-118.417"
                    },
                    "docType": "medical",
                    "_id": "d80473efe1002f3f06a86039a6871567",
                    "identity": {
                        "firstName": "Stephanie",
                        "lastName": "Hunt",
                        "ssn": "950-15-9898",
                        "gender": "F",
                        "race": "AIAN",
                        "dob": "2009-09-09T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2010-09-09T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-09-09T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "03",
                                "DateAdministered": "2010-10-07T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-10-07T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0814"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "rmendozagi@ox.ac.uk"
                        },
                        "phone": {
                            "cell": "6-(551)703-0743",
                            "work": "2-(106)957-0870"
                        }
                    },
                    "address": {
                        "street": "770 East Park",
                        "city": "Albany",
                        "state": "Georgia",
                        "postalCode": "31704"
                    },
                    "geo": {
                        "latitude": "31.55",
                        "longitude": "-84.0612"
                    },
                    "docType": "medical",
                    "_id": "dfc9dfacac3348ac08eb1e855dea119b",
                    "identity": {
                        "firstName": "Rebecca",
                        "lastName": "Mendoza",
                        "ssn": "483-32-1346",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2005-07-07T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2006-07-07T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2006-08-03T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0815"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mcolegf@macromedia.com"
                        },
                        "phone": {
                            "cell": "0-(078)668-8601",
                            "work": "1-(324)340-1259"
                        }
                    },
                    "address": {
                        "street": "44363 Buell Court",
                        "city": "Spring",
                        "state": "Texas",
                        "postalCode": "77388"
                    },
                    "geo": {
                        "latitude": "30.0505",
                        "longitude": "-95.4695"
                    },
                    "docType": "medical",
                    "_id": "4d61235c9aaf2b9e3c6500182b286556",
                    "identity": {
                        "firstName": "Marilyn",
                        "lastName": "Cole",
                        "ssn": "123-45-1362",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2009-07-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "94",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-06-27T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2010-07-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0820",
                            "2013-0828",
                            "2013-0838"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aberryg8@elpais.com"
                        },
                        "phone": {
                            "cell": "8-(116)452-9141",
                            "work": "9-(797)017-8118"
                        }
                    },
                    "address": {
                        "street": "79563 Kipling Point",
                        "city": "Philadelphia",
                        "state": "Pennsylvania",
                        "postalCode": "19151"
                    },
                    "geo": {
                        "latitude": "39.9772",
                        "longitude": "-75.2545"
                    },
                    "docType": "medical",
                    "_id": "2103de20388ac5669f8c54c5045ef75b",
                    "identity": {
                        "firstName": "Alice",
                        "lastName": "Berry",
                        "ssn": "157-01-7995",
                        "gender": "F",
                        "race": "White",
                        "dob": "2008-05-01T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "94",
                                "DateAdministered": "2009-06-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            },
                            {
                                "Cvx": "94",
                                "DateAdministered": "2009-06-29T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "PROQUAD"
                            }
                        ],
                        "cases": [
                            "2013-0821"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "mmartinezg7@boston.com"
                        },
                        "phone": {
                            "cell": "0-(291)745-5957",
                            "work": "2-(337)893-4245"
                        }
                    },
                    "address": {
                        "street": "184 Glacier Hill Avenue",
                        "city": "Huntsville",
                        "state": "Alabama",
                        "postalCode": "35895"
                    },
                    "geo": {
                        "latitude": "34.734",
                        "longitude": "-86.5229"
                    },
                    "docType": "medical",
                    "_id": "34a605f104f0b2f4c24e1117448b0398",
                    "identity": {
                        "firstName": "Martha",
                        "lastName": "Martinez",
                        "ssn": "752-78-3915",
                        "gender": "F",
                        "race": "Asian",
                        "dob": "2008-10-14T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "111",
                                "DateAdministered": "2011-10-14T04:00:00.000Z",
                                "Mvx": "MED",
                                "VaccineName": "FLUMIST"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-11-10T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "111",
                                "DateAdministered": "2011-10-14T04:00:00.000Z",
                                "Mvx": "MED",
                                "VaccineName": "FLUMIST"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2011-11-11T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0832",
                            "2013-0833"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "tknightg4@craigslist.org"
                        },
                        "phone": {
                            "cell": "6-(094)445-6800",
                            "work": "0-(863)964-5403"
                        }
                    },
                    "address": {
                        "street": "25 Bellgrove Avenue",
                        "city": "Tucson",
                        "state": "Arizona",
                        "postalCode": "85720"
                    },
                    "geo": {
                        "latitude": "31.9701",
                        "longitude": "-111.8907"
                    },
                    "docType": "medical",
                    "_id": "be155981738a1ba1edb3dabf19de7d1a",
                    "identity": {
                        "firstName": "Tammy",
                        "lastName": "Knight",
                        "ssn": "267-28-0074",
                        "gender": "F",
                        "race": "White",
                        "dob": "2010-11-18T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [
                            {
                                "code": "VXC27",
                                "codeSys": "CDCPHINVS",
                                "text": "immunodeficiency due to any cause, including HIV (hematologic and solid tumors, congenital immunodeficiency, long-term immunosuppressive therapy, including steroids)",
                                "caseId": "2013-0839"
                            }
                        ],
                        "series": [],
                        "cases": [
                            "2013-0839"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "aoliverg3@sohu.com"
                        },
                        "phone": {
                            "cell": "5-(531)696-0475",
                            "work": "4-(981)867-3109"
                        }
                    },
                    "address": {
                        "street": "17210 Blackbird Road",
                        "city": "Salinas",
                        "state": "California",
                        "postalCode": "93907"
                    },
                    "geo": {
                        "latitude": "36.7563",
                        "longitude": "-121.6703"
                    },
                    "docType": "medical",
                    "_id": "6bcc759110c9fa6fdef204d73bee45d9",
                    "identity": {
                        "firstName": "Amy",
                        "lastName": "Oliver",
                        "ssn": "886-91-1934",
                        "gender": "F",
                        "race": "White",
                        "dob": "2011-03-17T04:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "03",
                                "DateAdministered": "2012-04-01T04:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "M-M-R II"
                            }
                        ],
                        "cases": [
                            "2013-0840"
                        ]
                    }
                },
                {
                    "contact": {
                        "email": {
                            "personal": "bgarzafx@mac.com"
                        },
                        "phone": {
                            "cell": "3-(124)658-4556",
                            "work": "5-(562)568-0754"
                        }
                    },
                    "address": {
                        "street": "7 Novick Terrace",
                        "city": "Cleveland",
                        "state": "Ohio",
                        "postalCode": "44125"
                    },
                    "geo": {
                        "latitude": "41.4335",
                        "longitude": "-81.6323"
                    },
                    "docType": "medical",
                    "_id": "69ba5ae638780ebc19915379fa08d04c",
                    "identity": {
                        "firstName": "Barbara",
                        "lastName": "Garza",
                        "ssn": "238-64-4320",
                        "gender": "F",
                        "race": "NHOPI",
                        "dob": "2007-11-28T05:00:00.000Z"
                    },
                    "medical": {
                        "history": [],
                        "series": [
                            {
                                "Cvx": "21",
                                "DateAdministered": "2008-11-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2008-12-26T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2008-11-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            },
                            {
                                "Cvx": "21",
                                "DateAdministered": "2009-02-28T05:00:00.000Z",
                                "Mvx": "MSD",
                                "VaccineName": "VARIVAX"
                            }
                        ],
                        "cases": [
                            "2013-0842",
                            "2013-0843"
                        ]
                    }
                }]
        }
    }}
    );