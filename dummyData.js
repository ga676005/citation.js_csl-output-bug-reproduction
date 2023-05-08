/**
 * returns a book
 */
export function data1() {
    return [
        {
            "type": "book",
            "title": "Immunology, Infection, and Immunity (Hardcover)",
            "author": [
                {
                    "given": "Pier",
                    "family": "Gerald"
                },
                {
                    "given": "Lyczak",
                    "family": "Jeffrey"
                },
                {
                    "given": "Wetzler",
                    "family": "Lee"
                },
                {
                    "given": "ASM",
                    "family": "Press"
                }
            ],
            "archive_location": "",
            "edition": "1",
            "volume": "",
            "number-of-volumes": "",
            "abstract": "With a focus on the relatedness of immunology and microbiology, Immunology, Infection, and Immunity covers both the foundation concepts of immunology, among the most exciting in modern biology and medicine, and their application to the real world of diseases and health. This new text combines clear narratives of how the immune system functions relying in many instances on supporting data from experiments. The editors use examples and illustrations depicting basic immunologic processes in conjunction with their role in infectious or other diseases in order to teach both basic and applied aspects of immunology. Ideally suited for upper division and graduate level students as well as medical and dental students with a good background in basic biology, biochemistry, genetics, and cell biology, the text complements traditional views and dogmas about immunology with today's cutting edge ideas and experimental data describing how the immune system works.",
            "note": "",
            "publisher-place": "",
            "issued": {
                "raw": "April 2004"
            },
            "number-of-pages": "718",
            "ISBN": "978-1555812461",
            "source": "",
            "URL": "",
            "year-suffix": "2004",
            "id": "b6c8ba8aa63b925c49fec55f8c89c937",
        }
    ]
}


/**
 * returns a data that lacks author field which 
 * can cause unexpected output of processCitationCluster
 */
export function noAuthorData({ injectUnknownAuthorToNoAuthorData = false, noAuthorDataIsWithOtherDataThatHasAuthor = false } = {}) {
    // empty author field seems to be the root of the bug
    // one way to walkaround is to provide "unknown" value
    // I tried { literal: "unknown" } and it doesn't work
    // it has to be ↓ in this case. Maybe the problem also
    // related to the which style we choose
    const maybeEmptyAuthorField = injectUnknownAuthorToNoAuthorData
        ? [{ "given": "unknown", "family": "unknown" }]
        : []

    const data = [
        {
            "type": "webpage",
            "title": "Brief introduction to Kudos",

            "author": maybeEmptyAuthorField,

            "URL": "https://www.youtube.com/watch?v=1i3tqPCalaA",
            "abstract": "You've published your article, but who's going to read and cite it? Our free service can help your publication rise to the top of the millions published every year, with simple steps including:- explaining: giving your publication a short title, a lay summary and an impact statement- enriching: linking related sources such as videos and presentations to your article- sharing: sending links via email, social media, websites and blogs- measuring: seeing the impact of these steps on metrics such as views and downloads of your work.",
            "note": "",
            "issued": {
                "raw": "2015/11/02"
            },
            "source": "",
            "year-suffix": "2014",
            "id": "2C3C5FB13E414632A098073469797D14",
        }
    ]

    // if we include another data that has non-empty author field
    // then processCitationCluster will behave as expected.
    if (noAuthorDataIsWithOtherDataThatHasAuthor === true) {
        // this simply add an item that has author data 
        data.push(data4()[0])
    }

    return data
}

export function data3() {
    return [
        {
            "type": "article-journal",
            "title": "Development of electronic governor and simulator for the generating diesel engine",
            "collection-title": "",
            "author": [
                {
                    "given": "S.",
                    "family": "H."
                },
                {
                    "given": "H.",
                    "family": "S."
                },
                {
                    "given": "J.",
                    "family": "C."
                },
                {
                    "given": "B.",
                    "family": "Y."
                },
                {
                    "given": "S.",
                    "family": "E."
                },
                {
                    "given": "S.",
                    "family": "H."
                }
            ],
            "archive-place": "",
            "volume": "",
            "issue": "",
            "abstract": "Engine speed controller of the conventional diesel engine is called a governor. In order to control engine speed, the governor controls amount of fuel using the fuel rack. Because a mechanical governor has a good speed control performance and is relatively inexpensive, it is used more popularly. However, it is difficult to link several engines. In the power generating syste...",
            "note": "",
            "issued": "",
            "page": "",
            "ISSN": "",
            "DOI": "",
            "PMID": "",
            "source": "",
            "URL": "https://ieeexplore.ieee.org/document/5333587/",
            "year-suffix": "-1",
            "container-title-short": "",
            "id": "8AB96F78E131482D986D28B918537A20",
            "item": {
                "type": "article-journal",
                "title": "Development of electronic governor and simulator for the generating diesel engine",
                "collection-title": "",
                "author": [
                    {
                        "given": "S.",
                        "family": "H."
                    },
                    {
                        "given": "H.",
                        "family": "S."
                    },
                    {
                        "given": "J.",
                        "family": "C."
                    },
                    {
                        "given": "B.",
                        "family": "Y."
                    },
                    {
                        "given": "S.",
                        "family": "E."
                    },
                    {
                        "given": "S.",
                        "family": "H."
                    }
                ],
                "archive-place": "",
                "volume": "",
                "issue": "",
                "abstract": "Engine speed controller of the conventional diesel engine is called a governor. In order to control engine speed, the governor controls amount of fuel using the fuel rack. Because a mechanical governor has a good speed control performance and is relatively inexpensive, it is used more popularly. However, it is difficult to link several engines. In the power generating syste...",
                "note": "",
                "issued": "",
                "page": "",
                "ISSN": "",
                "DOI": "",
                "PMID": "",
                "source": "",
                "URL": "https://ieeexplore.ieee.org/document/5333587/",
                "year-suffix": "-1",
                "id": "8AB96F78E131482D986D28B918537A20"
            }
        },
        {
            "type": "article-journal",
            "title": "Emission Characteristics of Diesel Engine Fueled with Ethanol-diesel Blends in Different Altitude Regions",
            "collection-title": "",
            "author": [
                {
                    "given": "J.",
                    "family": "Lei"
                },
                {
                    "given": "Z.",
                    "family": "Tan"
                },
                {
                    "given": "S.",
                    "family": "Liu"
                },
                {
                    "given": "Y.",
                    "family": "Bi"
                },
                {
                    "given": "L.",
                    "family": "Shen"
                }
            ],
            "archive-place": "",
            "volume": "",
            "issue": "",
            "abstract": "In order to investigate the effects ethanol-diesel blends and altitude on the emissions of diesel engine, the comparative experiments were carried out on the bench of turbo-charged diesel engine fueled with pure diesel (as prototype) and ethanol-diesel blends (E10, E15, E20 and E30) under different atmospheric pressures (81kPa, 90kPa and 100kPa). The experimental results indicate that ...",
            "note": "",
            "issued": "",
            "page": "",
            "ISSN": "",
            "DOI": "10.1109/ICDMA.2010.43",
            "PMID": "",
            "source": "",
            "URL": "https://ieeexplore.ieee.org/document/5701241/",
            "year-suffix": "-1",
            "container-title-short": "",
            "id": "55F541F327134B558CF2EF31CBE11D2D",
            "item": {
                "type": "article-journal",
                "title": "Emission Characteristics of Diesel Engine Fueled with Ethanol-diesel Blends in Different Altitude Regions",
                "collection-title": "",
                "author": [
                    {
                        "given": "J.",
                        "family": "Lei"
                    },
                    {
                        "given": "Z.",
                        "family": "Tan"
                    },
                    {
                        "given": "S.",
                        "family": "Liu"
                    },
                    {
                        "given": "Y.",
                        "family": "Bi"
                    },
                    {
                        "given": "L.",
                        "family": "Shen"
                    }
                ],
                "archive-place": "",
                "volume": "",
                "issue": "",
                "abstract": "In order to investigate the effects ethanol-diesel blends and altitude on the emissions of diesel engine, the comparative experiments were carried out on the bench of turbo-charged diesel engine fueled with pure diesel (as prototype) and ethanol-diesel blends (E10, E15, E20 and E30) under different atmospheric pressures (81kPa, 90kPa and 100kPa). The experimental results indicate that ...",
                "note": "",
                "issued": "",
                "page": "",
                "ISSN": "",
                "DOI": "10.1109/ICDMA.2010.43",
                "PMID": "",
                "source": "",
                "URL": "https://ieeexplore.ieee.org/document/5701241/",
                "year-suffix": "-1",
                "id": "55F541F327134B558CF2EF31CBE11D2D"
            }
        },
        {
            "type": "article-journal",
            "title": "Features of computer modeling of the working process of small-scale gas turbine engines",
            "collection-title": "",
            "author": [
                {
                    "given": "V.",
                    "family": "S."
                },
                {
                    "given": "A.",
                    "family": "Y."
                },
                {
                    "given": "Y.",
                    "family": "A."
                },
                {
                    "given": "I.",
                    "family": "N."
                },
                {
                    "given": "E.",
                    "family": "P."
                }
            ],
            "archive-place": "",
            "volume": "",
            "issue": "",
            "abstract": "The article describes the thermogasdynamic model of small-scale gas turbine engine. This model takes the engine size into account during the efficiency assessment. The engine size is defined by the value of mass flow rate corrected by parameters at the exit of the compressor. The important features of working process of small-scale gas turbine engines are the increased hydr...",
            "note": "",
            "issued": "",
            "page": "",
            "ISSN": "",
            "DOI": "10.1109/ICMSC.2017.7959458",
            "PMID": "",
            "source": "",
            "URL": "https://ieeexplore.ieee.org/document/7959458/",
            "year-suffix": "-1",
            "container-title-short": "",
            "id": "BF85F146704F4C31A0FB2B4D37F436F7",
            "item": {
                "type": "article-journal",
                "title": "Features of computer modeling of the working process of small-scale gas turbine engines",
                "collection-title": "",
                "author": [
                    {
                        "given": "V.",
                        "family": "S."
                    },
                    {
                        "given": "A.",
                        "family": "Y."
                    },
                    {
                        "given": "Y.",
                        "family": "A."
                    },
                    {
                        "given": "I.",
                        "family": "N."
                    },
                    {
                        "given": "E.",
                        "family": "P."
                    }
                ],
                "archive-place": "",
                "volume": "",
                "issue": "",
                "abstract": "The article describes the thermogasdynamic model of small-scale gas turbine engine. This model takes the engine size into account during the efficiency assessment. The engine size is defined by the value of mass flow rate corrected by parameters at the exit of the compressor. The important features of working process of small-scale gas turbine engines are the increased hydr...",
                "note": "",
                "issued": "",
                "page": "",
                "ISSN": "",
                "DOI": "10.1109/ICMSC.2017.7959458",
                "PMID": "",
                "source": "",
                "URL": "https://ieeexplore.ieee.org/document/7959458/",
                "year-suffix": "-1",
                "id": "BF85F146704F4C31A0FB2B4D37F436F7"
            }
        }
    ]
}

export function data4() {
    return [
        {
            "type": "patent",
            "title": "Apparatus and method for anchoring sutures",
            "author": [
                {
                    "given": "C",
                    "family": "BARTLETT"
                },
                {
                    "given": "F",
                    "family": "WENSTROM"
                },
                {
                    "literal": ""
                }
            ],
            "archive_location": "",
            "abstract": "A suture anchor having a conical surface and a bore in which an end of an insertion tool is inserted. The insertion end of the insertion tool is made of material having elastic properties. The bore and base of the suture anchor are angled with respect to the central axis of the suture anchor and preferably are parallel to each other. During insertion, the suture anchor is reoriented to fit into the hole, thereby bending the elastic end of the insertion tool. When the suture anchor is within cancellous bone tissue, the elastic properties of the insertion tool deploys the suture anchor to an orientation in which the suture anchor cannot fit through the bone hole, thereby firmly anchoring the suture anchor in the human bone.\n\n\n\n                                                 \n\n\n                                             \n\n\nData supplied from the esp@cenet database - Worldwide",
            "note": "",
            "publisher-place": "",
            "issued": "",
            "page": "",
            "number": "US2006036283",
            "call-number": "US20050195576 20050802",
            "source": "Espacenet",
            "URL": "",
            "year-suffix": "2006",
            "submitted": {
                "raw": "2006-02-16"
            },
            "id": "AA8CDDEAB15943D59FF059FF568F21A3",
            "item": {
                "type": "patent",
                "title": "Apparatus and method for anchoring sutures",
                "author": [
                    {
                        "given": "C",
                        "family": "BARTLETT"
                    },
                    {
                        "given": "F",
                        "family": "WENSTROM"
                    },
                    {
                        "literal": "",
                        "family": "",
                        "given": ""
                    }
                ],
                "archive_location": "",
                "abstract": "A suture anchor having a conical surface and a bore in which an end of an insertion tool is inserted. The insertion end of the insertion tool is made of material having elastic properties. The bore and base of the suture anchor are angled with respect to the central axis of the suture anchor and preferably are parallel to each other. During insertion, the suture anchor is reoriented to fit into the hole, thereby bending the elastic end of the insertion tool. When the suture anchor is within cancellous bone tissue, the elastic properties of the insertion tool deploys the suture anchor to an orientation in which the suture anchor cannot fit through the bone hole, thereby firmly anchoring the suture anchor in the human bone.\n\n\n\n                                                 \n\n\n                                             \n\n\nData supplied from the esp@cenet database - Worldwide",
                "note": "",
                "publisher-place": "",
                "issued": "",
                "page": "",
                "number": "US2006036283",
                "call-number": "US20050195576 20050802",
                "source": "Espacenet",
                "URL": "",
                "year-suffix": "2006",
                "submitted": {
                    "year": 2006,
                    "month": 2,
                    "day": 16
                },
                "id": "AA8CDDEAB15943D59FF059FF568F21A3"
            }
        },
        {
            "type": "patent",
            "title": "Astronaut's work station device",
            "author": [
                {
                    "given": "Paton",
                    "family": "Boris"
                },
                {
                    "given": "Kryukov",
                    "family": "Valeri"
                },
                {
                    "given": "Gavrish",
                    "family": "Sergei"
                },
                {
                    "given": "Bulatsev",
                    "family": "AlexanR"
                },
                {
                    "given": "Demyanenko",
                    "family": "Vladimir"
                },
                {
                    "given": "Zagrebelnii",
                    "family": "AlexanA"
                },
                {
                    "given": "Markov",
                    "family": "AlexanV"
                },
                {
                    "given": "Perepechenko",
                    "family": "Boris"
                },
                {
                    "given": "Moreinis",
                    "family": "Mikhail"
                },
                {
                    "given": "Lubomuov",
                    "family": "Igor"
                },
                {
                    "given": "The",
                    "family": "E.O."
                }
            ],
            "archive_location": "",
            "abstract": "An astronaut's work station for performing experiments or other work in space is designed for use under the conditions of open space on board space vehicles by an astronaut in a spacesuit, using a system of hardware, for instance electron beam, which it accommodates, as well as samples of materials to be worked on, located in a replaceable samples module. The work station is fastened on the outer surface of a long-term orbital space station of the MIR type, or in the cargo bay of a cargo reusable space vehicle of the Shuttle type. The work station comprises a frame containing a base with a foot rail, a hand rail with a holder, a seat with latches for locking-in the replaceable samples module, and an astronaut's sliding foot restraint which moves over the foot rail.",
            "note": "<b>Claims</b>\nWe claim:1.  An astronaut's work station device for performing experiments in space, comprising:a frame having a base connecting a foot rail and a hand rail;assemblies for fastening a replaceable samples module located on the hand rail;an astronaut's mobile foot restraint slideable along the foot rail.2.  The device of claim 1, wherein the frame is made foldable and comprises:at least two hinged joints between the hand rail and the base;latch locks for the hinged joints, axles of which are mad...",
            "publisher-place": "",
            "issued": "",
            "page": "",
            "number": "US5779002",
            "call-number": "08/599,972",
            "source": "USPTO Issued",
            "URL": "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2Fsearch-adv.htm&r=0&f=S&l=50&d=PALL&Query=ref/5779002",
            "year-suffix": "1996",
            "submitted": {
                "raw": "February 14, 1996"
            },
            "id": "FD383D6A86434FA28DC1A30ECDE81FDE",
            "item": {
                "type": "patent",
                "title": "Astronaut's work station device",
                "author": [
                    {
                        "given": "Paton",
                        "family": "Boris"
                    },
                    {
                        "given": "Kryukov",
                        "family": "Valeri"
                    },
                    {
                        "given": "Gavrish",
                        "family": "Sergei"
                    },
                    {
                        "given": "Bulatsev",
                        "family": "AlexanR"
                    },
                    {
                        "given": "Demyanenko",
                        "family": "Vladimir"
                    },
                    {
                        "given": "Zagrebelnii",
                        "family": "AlexanA"
                    },
                    {
                        "given": "Markov",
                        "family": "AlexanV"
                    },
                    {
                        "given": "Perepechenko",
                        "family": "Boris"
                    },
                    {
                        "given": "Moreinis",
                        "family": "Mikhail"
                    },
                    {
                        "given": "Lubomuov",
                        "family": "Igor"
                    },
                    {
                        "given": "The",
                        "family": "E.O."
                    }
                ],
                "archive_location": "",
                "abstract": "An astronaut's work station for performing experiments or other work in space is designed for use under the conditions of open space on board space vehicles by an astronaut in a spacesuit, using a system of hardware, for instance electron beam, which it accommodates, as well as samples of materials to be worked on, located in a replaceable samples module. The work station is fastened on the outer surface of a long-term orbital space station of the MIR type, or in the cargo bay of a cargo reusable space vehicle of the Shuttle type. The work station comprises a frame containing a base with a foot rail, a hand rail with a holder, a seat with latches for locking-in the replaceable samples module, and an astronaut's sliding foot restraint which moves over the foot rail.",
                "note": "<b>Claims</b>\nWe claim:1.  An astronaut's work station device for performing experiments in space, comprising:a frame having a base connecting a foot rail and a hand rail;assemblies for fastening a replaceable samples module located on the hand rail;an astronaut's mobile foot restraint slideable along the foot rail.2.  The device of claim 1, wherein the frame is made foldable and comprises:at least two hinged joints between the hand rail and the base;latch locks for the hinged joints, axles of which are mad...",
                "publisher-place": "",
                "issued": "",
                "page": "",
                "number": "US5779002",
                "call-number": "08/599,972",
                "source": "USPTO Issued",
                "URL": "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2Fsearch-adv.htm&r=0&f=S&l=50&d=PALL&Query=ref/5779002",
                "year-suffix": "1996",
                "submitted": {
                    "month": 2,
                    "year": 1996,
                    "day": 14
                },
                "id": "FD383D6A86434FA28DC1A30ECDE81FDE"
            }
        },
        {
            "type": "patent",
            "title": "Bone cement injector gun",
            "author": [
                {
                    "given": "Hawkins",
                    "family": "Michael"
                },
                {
                    "given": "Hoag",
                    "family": "Stephen"
                },
                {
                    "given": "Case",
                    "family": "Kirt"
                },
                {
                    "given": "Chan",
                    "family": "Kwan-Ho"
                },
                {
                    "literal": "Zimmer"
                }
            ],
            "archive_location": "",
            "abstract": "A paste injector gun, especially adapted for injecting bone cement, has first and second mechanical advantages corresponding to different portions of the trigger stroke. The first mechanical advantage is greater than the second such that the first facilitates pressurizing the bone cement and the second facilitates high volume dispensing of the bone cement. The injector gun also includes a pair of U-shaped slots. One of the slots is sized to accept a large cement cartridge and the other slot is sized to accept a small cement cartridge.",
            "note": "<b>Claims</b>\nWhat is claimed is:1. A paste injector gun comprising:a trigger having a range of travel with first and second stages, the first stage being from an initial rest position to an intermediate position and the second stage being from the intermediate position to a subsequent position of further trigger travel;first pivot means for providing a first center of rotation for the trigger, the first pivot means being engaged during the first stage of travel, the first pivot means corresponding to a first...",
            "publisher-place": "",
            "issued": {
                "raw": "Jun 17, 1997"
            },
            "page": "",
            "number": "US5638997",
            "call-number": "",
            "source": "Google",
            "URL": "http://www.google.com/patents?id=WK8jAAAAEBAJ&dq=chan+kwan-ho",
            "year-suffix": "1995",
            "submitted": {
                "raw": "Sep 18, 1995"
            },
            "id": "8BD397B8990A409C9FA98FB38C5FBB6F",
            "item": {
                "type": "patent",
                "title": "Bone cement injector gun",
                "author": [
                    {
                        "given": "Hawkins",
                        "family": "Michael"
                    },
                    {
                        "given": "Hoag",
                        "family": "Stephen"
                    },
                    {
                        "given": "Case",
                        "family": "Kirt"
                    },
                    {
                        "given": "Chan",
                        "family": "Kwan-Ho"
                    },
                    {
                        "literal": "Zimmer"
                    }
                ],
                "archive_location": "",
                "abstract": "A paste injector gun, especially adapted for injecting bone cement, has first and second mechanical advantages corresponding to different portions of the trigger stroke. The first mechanical advantage is greater than the second such that the first facilitates pressurizing the bone cement and the second facilitates high volume dispensing of the bone cement. The injector gun also includes a pair of U-shaped slots. One of the slots is sized to accept a large cement cartridge and the other slot is sized to accept a small cement cartridge.",
                "note": "<b>Claims</b>\nWhat is claimed is:1. A paste injector gun comprising:a trigger having a range of travel with first and second stages, the first stage being from an initial rest position to an intermediate position and the second stage being from the intermediate position to a subsequent position of further trigger travel;first pivot means for providing a first center of rotation for the trigger, the first pivot means being engaged during the first stage of travel, the first pivot means corresponding to a first...",
                "publisher-place": "",
                "issued": {
                    "month": 6,
                    "year": 1997,
                    "day": 17
                },
                "page": "",
                "number": "US5638997",
                "call-number": "",
                "source": "Google",
                "URL": "http://www.google.com/patents?id=WK8jAAAAEBAJ&dq=chan+kwan-ho",
                "year-suffix": "1995",
                "submitted": {
                    "month": 9,
                    "year": 1995,
                    "day": 18
                },
                "id": "8BD397B8990A409C9FA98FB38C5FBB6F"
            }
        }
    ]
}

export function data5() {
    return [
        {
            "type": "article-journal",
            "title": "Optical Mapping of Impulse Propagation in Engineered Cardiac Tissue.",
            "collection-title": "Tissue engineering. Part A",
            "author": [
                {
                    "given": "Radisic",
                    "family": "Milica"
                },
                {
                    "given": "Fast",
                    "family": "Vladimir"
                },
                {
                    "given": "Sharifov",
                    "family": "Oleg"
                },
                {
                    "given": "Iyer",
                    "family": "Rohin"
                },
                {
                    "given": "Park",
                    "family": "Hyoungshin"
                },
                {
                    "given": "Vunjak-Novakovic",
                    "family": "Gordana"
                }
            ],
            "archive-place": "Institute of Biomaterials and Biomedical Engineering, University of Toronto, Toronto, Ontario, Canada.",
            "volume": "",
            "issue": "",
            "abstract": "Cardiac tissue engineering has a potential to provide functional, synchronously contractile tissue constructs for heart repair, and for studies of development and disease using in vivo-like yet controllable in vitro settings. In both cases, the utilization of bioreactors capable of providing biomimetic culture environments is instrumental for supporting cell differentiation and functional assembly. In the present study, neonatal rat heart cells were cultured on highly porous collagen scaffolds in bioreactors with electrical field stimulation. A hallmark of excitable tissues such as myocardium is the ability to propagate electrical impulses. We utilized the method of optical mapping to measure the electrical impulse propagation. The average conduction velocity recorded for the stimulated constructs (14.4 +/- 4.1 cm/s) was significantly higher than that of the nonstimulated constructs (8.6 +/- 2.3 cm/s, p = 0.003). The measured electrical propagation properties correlated to the contractile behavior and the compositions of tissue constructs. Electrical stimulation during culture significantly improved amplitude of contractions, tissue morphology, and connexin-43 expression compared to the nonsimulated controls. These data provide evidence that electrical stimulation during bioreactor cultivation can improve electrical signal propagation in engineered cardiac constructs.",
            "note": "",
            "issued": {
                "raw": "2008 Oct 10"
            },
            "page": "",
            "ISSN": "1937-3341",
            "DOI": "10.1089/ten.tea.2008.0223",
            "PMID": "18847360",
            "source": "Pubmed",
            "URL": "http://www.ncbi.nlm.nih.gov/sites/entrez?Db=pubmed&DbFrom=pubmed&Cmd=Link&LinkName=pubmed_pubmed&LinkReadableName=Related%20Articles&IdsFromResult=18847360&ordinalpos=3&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum",
            "year-suffix": "2008",
            "container-title-short": "",
            "id": "E94A703B26674497AFC2D75EAC3E0BDE",
            "item": {
                "type": "article-journal",
                "title": "Optical Mapping of Impulse Propagation in Engineered Cardiac Tissue.",
                "collection-title": "Tissue engineering. Part A",
                "author": [
                    {
                        "given": "Radisic",
                        "family": "Milica"
                    },
                    {
                        "given": "Fast",
                        "family": "Vladimir"
                    },
                    {
                        "given": "Sharifov",
                        "family": "Oleg"
                    },
                    {
                        "given": "Iyer",
                        "family": "Rohin"
                    },
                    {
                        "given": "Park",
                        "family": "Hyoungshin"
                    },
                    {
                        "given": "Vunjak-Novakovic",
                        "family": "Gordana"
                    }
                ],
                "archive-place": "Institute of Biomaterials and Biomedical Engineering, University of Toronto, Toronto, Ontario, Canada.",
                "volume": "",
                "issue": "",
                "abstract": "Cardiac tissue engineering has a potential to provide functional, synchronously contractile tissue constructs for heart repair, and for studies of development and disease using in vivo-like yet controllable in vitro settings. In both cases, the utilization of bioreactors capable of providing biomimetic culture environments is instrumental for supporting cell differentiation and functional assembly. In the present study, neonatal rat heart cells were cultured on highly porous collagen scaffolds in bioreactors with electrical field stimulation. A hallmark of excitable tissues such as myocardium is the ability to propagate electrical impulses. We utilized the method of optical mapping to measure the electrical impulse propagation. The average conduction velocity recorded for the stimulated constructs (14.4 +/- 4.1 cm/s) was significantly higher than that of the nonstimulated constructs (8.6 +/- 2.3 cm/s, p = 0.003). The measured electrical propagation properties correlated to the contractile behavior and the compositions of tissue constructs. Electrical stimulation during culture significantly improved amplitude of contractions, tissue morphology, and connexin-43 expression compared to the nonsimulated controls. These data provide evidence that electrical stimulation during bioreactor cultivation can improve electrical signal propagation in engineered cardiac constructs.",
                "note": "",
                "issued": {
                    "year": 2008,
                    "month": 10,
                    "day": 10
                },
                "page": "",
                "ISSN": "1937-3341",
                "DOI": "10.1089/ten.tea.2008.0223",
                "PMID": "18847360",
                "source": "Pubmed",
                "URL": "http://www.ncbi.nlm.nih.gov/sites/entrez?Db=pubmed&DbFrom=pubmed&Cmd=Link&LinkName=pubmed_pubmed&LinkReadableName=Related%20Articles&IdsFromResult=18847360&ordinalpos=3&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum",
                "year-suffix": "2008",
                "id": "E94A703B26674497AFC2D75EAC3E0BDE"
            }
        },
        {
            "type": "article-journal",
            "title": "Semi-automated biobank sample processing with a 384 high density sample tube robot used in cancer and cardiovascular studies.",
            "collection-title": "Clinical and translational medicine",
            "author": [
                {
                    "given": "Malm",
                    "family": "Johan"
                },
                {
                    "given": "Lindberg",
                    "family": "Henrik"
                },
                {
                    "given": "Erlinge",
                    "family": "David"
                },
                {
                    "given": "Appelqvist",
                    "family": "Roger"
                },
                {
                    "given": "Yakovleva",
                    "family": "Maria"
                },
                {
                    "given": "Welinder",
                    "family": "Charlotte"
                },
                {
                    "given": "Steinfelder",
                    "family": "Erik"
                },
                {
                    "given": "Fehniger",
                    "family": "Thomas"
                },
                {
                    "given": "Marko-Varga",
                    "family": "György"
                }
            ],
            "archive-place": "Section for Clinical Chemistry, Department of Translational Medicine, Lund University, Skåne University Hospital Malmö, 205 02, Malmö, Sweden, johan.malm@med.lu.se.",
            "volume": "4",
            "issue": "1",
            "abstract": "In the postgenomic era, it has become evident that analysis of genetic and protein expression changes alone is not sufficient to understand most disease processes in e.g. cardiovascular and cancer disease. Biobanking has been identified as an important area for development and discovery of better diagnostic tools and new treatment modalities. Biobanks are developed in order to integrate the collection of clinical samples from both healthy individuals and patients and provide valuable information that will make possible improved patient care. Modern healthcare developments are intimately linked to information based on studies of patient samples from biobank archives in large scale studies. Today biobanks form important national, as well as international, networks that share and combine global resources.We have developed and validated a novel biobanking workflow process that utilizes 384-tube systems with a high speed sample array robot with unique processing principles.The 384-tube format and robotic processing is incorporated into a cancer and cardiovascular diagnostic/prognostic research program with therapeutic interventions. Our biobank practice has gained acceptance within many hospitals and research units and is based on high-density sample storage with small aliquot sample volumes. The previous standard of 5-10 mL sample volume tubes is being replaced by smaller volumes of 50-70 μL blood fractions that typically result in hundreds of thousands of aliquot fractions in 384-tube systems.Our novel biobanking workflow process is robust and well suited for clinical studies.",
            "note": "",
            "issued": {
                "raw": "2015 Dec"
            },
            "page": "67",
            "ISSN": "",
            "DOI": "10.1186/s40169-015-0067-0",
            "PMID": "26272727",
            "source": "Pubmed",
            "URL": "http://www.ncbi.nlm.nih.gov/sites/entrez?Db=pubmed&DbFrom=pubmed&Cmd=Link&LinkName=pubmed_pubmed&LinkReadableName=Related%20Articles&IdsFromResult=26272727&ordinalpos=3&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum",
            "year-suffix": "2015",
            "container-title-short": "",
            "id": "6FF10D8578924D47B412BB11729D35C6",
            "item": {
                "type": "article-journal",
                "title": "Semi-automated biobank sample processing with a 384 high density sample tube robot used in cancer and cardiovascular studies.",
                "collection-title": "Clinical and translational medicine",
                "author": [
                    {
                        "given": "Malm",
                        "family": "Johan"
                    },
                    {
                        "given": "Lindberg",
                        "family": "Henrik"
                    },
                    {
                        "given": "Erlinge",
                        "family": "David"
                    },
                    {
                        "given": "Appelqvist",
                        "family": "Roger"
                    },
                    {
                        "given": "Yakovleva",
                        "family": "Maria"
                    },
                    {
                        "given": "Welinder",
                        "family": "Charlotte"
                    },
                    {
                        "given": "Steinfelder",
                        "family": "Erik"
                    },
                    {
                        "given": "Fehniger",
                        "family": "Thomas"
                    },
                    {
                        "given": "Marko-Varga",
                        "family": "György"
                    }
                ],
                "archive-place": "Section for Clinical Chemistry, Department of Translational Medicine, Lund University, Skåne University Hospital Malmö, 205 02, Malmö, Sweden, johan.malm@med.lu.se.",
                "volume": "4",
                "issue": "1",
                "abstract": "In the postgenomic era, it has become evident that analysis of genetic and protein expression changes alone is not sufficient to understand most disease processes in e.g. cardiovascular and cancer disease. Biobanking has been identified as an important area for development and discovery of better diagnostic tools and new treatment modalities. Biobanks are developed in order to integrate the collection of clinical samples from both healthy individuals and patients and provide valuable information that will make possible improved patient care. Modern healthcare developments are intimately linked to information based on studies of patient samples from biobank archives in large scale studies. Today biobanks form important national, as well as international, networks that share and combine global resources.We have developed and validated a novel biobanking workflow process that utilizes 384-tube systems with a high speed sample array robot with unique processing principles.The 384-tube format and robotic processing is incorporated into a cancer and cardiovascular diagnostic/prognostic research program with therapeutic interventions. Our biobank practice has gained acceptance within many hospitals and research units and is based on high-density sample storage with small aliquot sample volumes. The previous standard of 5-10 mL sample volume tubes is being replaced by smaller volumes of 50-70 μL blood fractions that typically result in hundreds of thousands of aliquot fractions in 384-tube systems.Our novel biobanking workflow process is robust and well suited for clinical studies.",
                "note": "",
                "issued": {
                    "year": 2015,
                    "month": 12
                },
                "page": "67",
                "ISSN": "",
                "DOI": "10.1186/s40169-015-0067-0",
                "PMID": "26272727",
                "source": "Pubmed",
                "URL": "http://www.ncbi.nlm.nih.gov/sites/entrez?Db=pubmed&DbFrom=pubmed&Cmd=Link&LinkName=pubmed_pubmed&LinkReadableName=Related%20Articles&IdsFromResult=26272727&ordinalpos=3&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum",
                "year-suffix": "2015",
                "id": "6FF10D8578924D47B412BB11729D35C6",
                "page-first": "67"
            }
        }
    ]
}

