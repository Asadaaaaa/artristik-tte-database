'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('masterdata_country', [
      {
        "name": "Afghanistan",
        "code": "AFG",
        "phone_code": "+93"
      },
      {
        "name": "Albania",
        "code": "ALB",
        "phone_code": "+355"
      },
      {
        "name": "Algeria",
        "code": "DZA",
        "phone_code": "+213"
      },
      {
        "name": "American Samoa",
        "code": "ASM",
        "phone_code": "+1684"
      },
      {
        "name": "Andorra",
        "code": "AND",
        "phone_code": "+376"
      },
      {
        "name": "Angola",
        "code": "AGO",
        "phone_code": "+244"
      },
      {
        "name": "Anguilla",
        "code": "AIA",
        "phone_code": "+1264"
      },
      {
        "name": "Antarctica",
        "code": "",
        "phone_code": "+0"
      },
      {
        "name": "Antigua and Barbuda",
        "code": "ATG",
        "phone_code": "+1268"
      },
      {
        "name": "Argentina",
        "code": "ARG",
        "phone_code": "+54"
      },
      {
        "name": "Armenia",
        "code": "ARM",
        "phone_code": "+374"
      },
      {
        "name": "Aruba",
        "code": "ABW",
        "phone_code": "+297"
      },
      {
        "name": "Australia",
        "code": "AUS",
        "phone_code": "+61"
      },
      {
        "name": "Austria",
        "code": "AUT",
        "phone_code": "+43"
      },
      {
        "name": "Azerbaijan",
        "code": "AZE",
        "phone_code": "+994"
      },
      {
        "name": "Bahamas",
        "code": "BHS",
        "phone_code": "+1242"
      },
      {
        "name": "Bahrain",
        "code": "BHR",
        "phone_code": "+973"
      },
      {
        "name": "Bangladesh",
        "code": "BGD",
        "phone_code": "+880"
      },
      {
        "name": "Barbados",
        "code": "BRB",
        "phone_code": "+1246"
      },
      {
        "name": "Belarus",
        "code": "BLR",
        "phone_code": "+375"
      },
      {
        "name": "Belgium",
        "code": "BEL",
        "phone_code": "+32"
      },
      {
        "name": "Belize",
        "code": "BLZ",
        "phone_code": "+501"
      },
      {
        "name": "Benin",
        "code": "BEN",
        "phone_code": "+229"
      },
      {
        "name": "Bermuda",
        "code": "BMU",
        "phone_code": "+1441"
      },
      {
        "name": "Bhutan",
        "code": "BTN",
        "phone_code": "+975"
      },
      {
        "name": "Bolivia",
        "code": "BOL",
        "phone_code": "+591"
      },
      {
        "name": "Bosnia and Herzegovina",
        "code": "BIH",
        "phone_code": "+387"
      },
      {
        "name": "Botswana",
        "code": "BWA",
        "phone_code": "+267"
      },
      {
        "name": "Bouvet Island",
        "code": "",
        "phone_code": "+0"
      },
      {
        "name": "Brazil",
        "code": "BRA",
        "phone_code": "+55"
      },
      {
        "name": "British Indian Ocean Territory",
        "code": "",
        "phone_code": "+246"
      },
      {
        "name": "Brunei Darussalam",
        "code": "BRN",
        "phone_code": "+673"
      },
      {
        "name": "Bulgaria",
        "code": "BGR",
        "phone_code": "+359"
      },
      {
        "name": "Burkina Faso",
        "code": "BFA",
        "phone_code": "+226"
      },
      {
        "name": "Burundi",
        "code": "BDI",
        "phone_code": "+257"
      },
      {
        "name": "Cambodia",
        "code": "KHM",
        "phone_code": "+855"
      },
      {
        "name": "Cameroon",
        "code": "CMR",
        "phone_code": "+237"
      },
      {
        "name": "Canada",
        "code": "CAN",
        "phone_code": "+1"
      },
      {
        "name": "Cape Verde",
        "code": "CPV",
        "phone_code": "+238"
      },
      {
        "name": "Cayman Islands",
        "code": "CYM",
        "phone_code": "+1345"
      },
      {
        "name": "Central African Republic",
        "code": "CAF",
        "phone_code": "+236"
      },
      {
        "name": "Chad",
        "code": "TCD",
        "phone_code": "+235"
      },
      {
        "name": "Chile",
        "code": "CHL",
        "phone_code": "+56"
      },
      {
        "name": "China",
        "code": "CHN",
        "phone_code": "+86"
      },
      {
        "name": "Christmas Island",
        "code": "",
        "phone_code": "+61"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "code": "",
        "phone_code": "+672"
      },
      {
        "name": "Colombia",
        "code": "COL",
        "phone_code": "+57"
      },
      {
        "name": "Comoros",
        "code": "COM",
        "phone_code": "+269"
      },
      {
        "name": "Congo",
        "code": "COG",
        "phone_code": "+242"
      },
      {
        "name": "Congo, the Democratic Republic of the",
        "code": "COD",
        "phone_code": "+242"
      },
      {
        "name": "Cook Islands",
        "code": "COK",
        "phone_code": "+682"
      },
      {
        "name": "Costa Rica",
        "code": "CRI",
        "phone_code": "+506"
      },
      {
        "name": "Cote D'Ivoire",
        "code": "CIV",
        "phone_code": "+225"
      },
      {
        "name": "Croatia",
        "code": "HRV",
        "phone_code": "+385"
      },
      {
        "name": "Cuba",
        "code": "CUB",
        "phone_code": "+53"
      },
      {
        "name": "Cyprus",
        "code": "CYP",
        "phone_code": "+357"
      },
      {
        "name": "Czech Republic",
        "code": "CZE",
        "phone_code": "+420"
      },
      {
        "name": "Denmark",
        "code": "DNK",
        "phone_code": "+45"
      },
      {
        "name": "Djibouti",
        "code": "DJI",
        "phone_code": "+253"
      },
      {
        "name": "Dominica",
        "code": "DMA",
        "phone_code": "+1767"
      },
      {
        "name": "Dominican Republic",
        "code": "DOM",
        "phone_code": "+1809"
      },
      {
        "name": "Ecuador",
        "code": "ECU",
        "phone_code": "+593"
      },
      {
        "name": "Egypt",
        "code": "EGY",
        "phone_code": "+20"
      },
      {
        "name": "El Salvador",
        "code": "SLV",
        "phone_code": "+503"
      },
      {
        "name": "Equatorial Guinea",
        "code": "GNQ",
        "phone_code": "+240"
      },
      {
        "name": "Eritrea",
        "code": "ERI",
        "phone_code": "+291"
      },
      {
        "name": "Estonia",
        "code": "EST",
        "phone_code": "+372"
      },
      {
        "name": "Ethiopia",
        "code": "ETH",
        "phone_code": "+251"
      },
      {
        "name": "Falkland Islands (Malvinas)",
        "code": "FLK",
        "phone_code": "+500"
      },
      {
        "name": "Faroe Islands",
        "code": "FRO",
        "phone_code": "+298"
      },
      {
        "name": "Fiji",
        "code": "FJI",
        "phone_code": "+679"
      },
      {
        "name": "Finland",
        "code": "FIN",
        "phone_code": "+358"
      },
      {
        "name": "France",
        "code": "FRA",
        "phone_code": "+33"
      },
      {
        "name": "French Guiana",
        "code": "GUF",
        "phone_code": "+594"
      },
      {
        "name": "French Polynesia",
        "code": "PYF",
        "phone_code": "+689"
      },
      {
        "name": "French Southern Territories",
        "code": "",
        "phone_code": "+0"
      },
      {
        "name": "Gabon",
        "code": "GAB",
        "phone_code": "+241"
      },
      {
        "name": "Gambia",
        "code": "GMB",
        "phone_code": "+220"
      },
      {
        "name": "Georgia",
        "code": "GEO",
        "phone_code": "+995"
      },
      {
        "name": "Germany",
        "code": "DEU",
        "phone_code": "+49"
      },
      {
        "name": "Ghana",
        "code": "GHA",
        "phone_code": "+233"
      },
      {
        "name": "Gibraltar",
        "code": "GIB",
        "phone_code": "+350"
      },
      {
        "name": "Greece",
        "code": "GRC",
        "phone_code": "+30"
      },
      {
        "name": "Greenland",
        "code": "GRL",
        "phone_code": "+299"
      },
      {
        "name": "Grenada",
        "code": "GRD",
        "phone_code": "+1473"
      },
      {
        "name": "Guadeloupe",
        "code": "GLP",
        "phone_code": "+590"
      },
      {
        "name": "Guam",
        "code": "GUM",
        "phone_code": "+1671"
      },
      {
        "name": "Guatemala",
        "code": "GTM",
        "phone_code": "+502"
      },
      {
        "name": "Guinea",
        "code": "GIN",
        "phone_code": "+224"
      },
      {
        "name": "Guinea-Bissau",
        "code": "GNB",
        "phone_code": "+245"
      },
      {
        "name": "Guyana",
        "code": "GUY",
        "phone_code": "+592"
      },
      {
        "name": "Haiti",
        "code": "HTI",
        "phone_code": "+509"
      },
      {
        "name": "Heard Island and Mcdonald Islands",
        "code": "",
        "phone_code": "+0"
      },
      {
        "name": "Holy See (Vatican City State)",
        "code": "VAT",
        "phone_code": "+39"
      },
      {
        "name": "Honduras",
        "code": "HND",
        "phone_code": "+504"
      },
      {
        "name": "Hong Kong",
        "code": "HKG",
        "phone_code": "+852"
      },
      {
        "name": "Hungary",
        "code": "HUN",
        "phone_code": "+36"
      },
      {
        "name": "Iceland",
        "code": "ISL",
        "phone_code": "+354"
      },
      {
        "name": "India",
        "code": "IND",
        "phone_code": "+91"
      },
      {
        "name": "Indonesia",
        "code": "IDN",
        "phone_code": "+62"
      },
      {
        "name": "Iran, Islamic Republic of",
        "code": "IRN",
        "phone_code": "+98"
      },
      {
        "name": "Iraq",
        "code": "IRQ",
        "phone_code": "+964"
      },
      {
        "name": "Ireland",
        "code": "IRL",
        "phone_code": "+353"
      },
      {
        "name": "Israel",
        "code": "ISR",
        "phone_code": "+972"
      },
      {
        "name": "Italy",
        "code": "ITA",
        "phone_code": "+39"
      },
      {
        "name": "Jamaica",
        "code": "JAM",
        "phone_code": "+1876"
      },
      {
        "name": "Japan",
        "code": "JPN",
        "phone_code": "+81"
      },
      {
        "name": "Jordan",
        "code": "JOR",
        "phone_code": "+962"
      },
      {
        "name": "Kazakhstan",
        "code": "KAZ",
        "phone_code": "+7"
      },
      {
        "name": "Kenya",
        "code": "KEN",
        "phone_code": "+254"
      },
      {
        "name": "Kiribati",
        "code": "KIR",
        "phone_code": "+686"
      },
      {
        "name": "Korea, Democratic People's Republic of",
        "code": "PRK",
        "phone_code": "+850"
      },
      {
        "name": "Korea, Republic of",
        "code": "KOR",
        "phone_code": "+82"
      },
      {
        "name": "Kuwait",
        "code": "KWT",
        "phone_code": "+965"
      },
      {
        "name": "Kyrgyzstan",
        "code": "KGZ",
        "phone_code": "+996"
      },
      {
        "name": "Lao People's Democratic Republic",
        "code": "LAO",
        "phone_code": "+856"
      },
      {
        "name": "Latvia",
        "code": "LVA",
        "phone_code": "+371"
      },
      {
        "name": "Lebanon",
        "code": "LBN",
        "phone_code": "+961"
      },
      {
        "name": "Lesotho",
        "code": "LSO",
        "phone_code": "+266"
      },
      {
        "name": "Liberia",
        "code": "LBR",
        "phone_code": "+231"
      },
      {
        "name": "Libyan Arab Jamahiriya",
        "code": "LBY",
        "phone_code": "+218"
      },
      {
        "name": "Liechtenstein",
        "code": "LIE",
        "phone_code": "+423"
      },
      {
        "name": "Lithuania",
        "code": "LTU",
        "phone_code": "+370"
      },
      {
        "name": "Luxembourg",
        "code": "LUX",
        "phone_code": "+352"
      },
      {
        "name": "Macao",
        "code": "MAC",
        "phone_code": "+853"
      },
      {
        "name": "Macedonia, the Former Yugoslav Republic of",
        "code": "MKD",
        "phone_code": "+389"
      },
      {
        "name": "Madagascar",
        "code": "MDG",
        "phone_code": "+261"
      },
      {
        "name": "Malawi",
        "code": "MWI",
        "phone_code": "+265"
      },
      {
        "name": "Malaysia",
        "code": "MYS",
        "phone_code": "+60"
      },
      {
        "name": "Maldives",
        "code": "MDV",
        "phone_code": "+960"
      },
      {
        "name": "Mali",
        "code": "MLI",
        "phone_code": "+223"
      },
      {
        "name": "Malta",
        "code": "MLT",
        "phone_code": "+356"
      },
      {
        "name": "Marshall Islands",
        "code": "MHL",
        "phone_code": "+692"
      },
      {
        "name": "Martinique",
        "code": "MTQ",
        "phone_code": "+596"
      },
      {
        "name": "Mauritania",
        "code": "MRT",
        "phone_code": "+222"
      },
      {
        "name": "Mauritius",
        "code": "MUS",
        "phone_code": "+230"
      },
      {
        "name": "Mayotte",
        "code": "",
        "phone_code": "+269"
      },
      {
        "name": "Mexico",
        "code": "MEX",
        "phone_code": "+52"
      },
      {
        "name": "Micronesia, Federated States of",
        "code": "FSM",
        "phone_code": "+691"
      },
      {
        "name": "Moldova, Republic of",
        "code": "MDA",
        "phone_code": "+373"
      },
      {
        "name": "Monaco",
        "code": "MCO",
        "phone_code": "+377"
      },
      {
        "name": "Mongolia",
        "code": "MNG",
        "phone_code": "+976"
      },
      {
        "name": "Montserrat",
        "code": "MSR",
        "phone_code": "+1664"
      },
      {
        "name": "Morocco",
        "code": "MAR",
        "phone_code": "+212"
      },
      {
        "name": "Mozambique",
        "code": "MOZ",
        "phone_code": "+258"
      },
      {
        "name": "Myanmar",
        "code": "MMR",
        "phone_code": "+95"
      },
      {
        "name": "Namibia",
        "code": "NAM",
        "phone_code": "+264"
      },
      {
        "name": "Nauru",
        "code": "NRU",
        "phone_code": "+674"
      },
      {
        "name": "Nepal",
        "code": "NPL",
        "phone_code": "+977"
      },
      {
        "name": "Netherlands",
        "code": "NLD",
        "phone_code": "+31"
      },
      {
        "name": "Netherlands Antilles",
        "code": "ANT",
        "phone_code": "+599"
      },
      {
        "name": "New Caledonia",
        "code": "NCL",
        "phone_code": "+687"
      },
      {
        "name": "New Zealand",
        "code": "NZL",
        "phone_code": "+64"
      },
      {
        "name": "Nicaragua",
        "code": "NIC",
        "phone_code": "+505"
      },
      {
        "name": "Niger",
        "code": "NER",
        "phone_code": "+227"
      },
      {
        "name": "Nigeria",
        "code": "NGA",
        "phone_code": "+234"
      },
      {
        "name": "Niue",
        "code": "NIU",
        "phone_code": "+683"
      },
      {
        "name": "Norfolk Island",
        "code": "NFK",
        "phone_code": "+672"
      },
      {
        "name": "Northern Mariana Islands",
        "code": "MNP",
        "phone_code": "+1670"
      },
      {
        "name": "Norway",
        "code": "NOR",
        "phone_code": "+47"
      },
      {
        "name": "Oman",
        "code": "OMN",
        "phone_code": "+968"
      },
      {
        "name": "Pakistan",
        "code": "PAK",
        "phone_code": "+92"
      },
      {
        "name": "Palau",
        "code": "PLW",
        "phone_code": "+680"
      },
      {
        "name": "Palestinian Territory, Occupied",
        "code": "",
        "phone_code": "+970"
      },
      {
        "name": "Panama",
        "code": "PAN",
        "phone_code": "+507"
      },
      {
        "name": "Papua New Guinea",
        "code": "PNG",
        "phone_code": "+675"
      },
      {
        "name": "Paraguay",
        "code": "PRY",
        "phone_code": "+595"
      },
      {
        "name": "Peru",
        "code": "PER",
        "phone_code": "+51"
      },
      {
        "name": "Philippines",
        "code": "PHL",
        "phone_code": "+63"
      },
      {
        "name": "Pitcairn",
        "code": "PCN",
        "phone_code": "+0"
      },
      {
        "name": "Poland",
        "code": "POL",
        "phone_code": "+48"
      },
      {
        "name": "Portugal",
        "code": "PRT",
        "phone_code": "+351"
      },
      {
        "name": "Puerto Rico",
        "code": "PRI",
        "phone_code": "+1787"
      },
      {
        "name": "Qatar",
        "code": "QAT",
        "phone_code": "+974"
      },
      {
        "name": "Reunion",
        "code": "REU",
        "phone_code": "+262"
      },
      {
        "name": "Romania",
        "code": "ROM",
        "phone_code": "+40"
      },
      {
        "name": "Russian Federation",
        "code": "RUS",
        "phone_code": "+70"
      },
      {
        "name": "Rwanda",
        "code": "RWA",
        "phone_code": "+250"
      },
      {
        "name": "Saint Helena",
        "code": "SHN",
        "phone_code": "+290"
      },
      {
        "name": "Saint Kitts and Nevis",
        "code": "KNA",
        "phone_code": "+1869"
      },
      {
        "name": "Saint Lucia",
        "code": "LCA",
        "phone_code": "+1758"
      },
      {
        "name": "Saint Pierre and Miquelon",
        "code": "SPM",
        "phone_code": "+508"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "code": "VCT",
        "phone_code": "+1784"
      },
      {
        "name": "Samoa",
        "code": "WSM",
        "phone_code": "+684"
      },
      {
        "name": "San Marino",
        "code": "SMR",
        "phone_code": "+378"
      },
      {
        "name": "Sao Tome and Principe",
        "code": "STP",
        "phone_code": "+239"
      },
      {
        "name": "Saudi Arabia",
        "code": "SAU",
        "phone_code": "+966"
      },
      {
        "name": "Senegal",
        "code": "SEN",
        "phone_code": "+221"
      },
      {
        "name": "Serbia and Montenegro",
        "code": "",
        "phone_code": "+381"
      },
      {
        "name": "Seychelles",
        "code": "SYC",
        "phone_code": "+248"
      },
      {
        "name": "Sierra Leone",
        "code": "SLE",
        "phone_code": "+232"
      },
      {
        "name": "Singapore",
        "code": "SGP",
        "phone_code": "+65"
      },
      {
        "name": "Slovakia",
        "code": "SVK",
        "phone_code": "+421"
      },
      {
        "name": "Slovenia",
        "code": "SVN",
        "phone_code": "+386"
      },
      {
        "name": "Solomon Islands",
        "code": "SLB",
        "phone_code": "+677"
      },
      {
        "name": "Somalia",
        "code": "SOM",
        "phone_code": "+252"
      },
      {
        "name": "South Africa",
        "code": "ZAF",
        "phone_code": "+27"
      },
      {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "",
        "phone_code": "+0"
      },
      {
        "name": "Spain",
        "code": "ESP",
        "phone_code": "+34"
      },
      {
        "name": "Sri Lanka",
        "code": "LKA",
        "phone_code": "+94"
      },
      {
        "name": "Sudan",
        "code": "SDN",
        "phone_code": "+249"
      },
      {
        "name": "Suriname",
        "code": "SUR",
        "phone_code": "+597"
      },
      {
        "name": "Svalbard and Jan Mayen",
        "code": "SJM",
        "phone_code": "+47"
      },
      {
        "name": "Swaziland",
        "code": "SWZ",
        "phone_code": "+268"
      },
      {
        "name": "Sweden",
        "code": "SWE",
        "phone_code": "+46"
      },
      {
        "name": "Switzerland",
        "code": "CHE",
        "phone_code": "+41"
      },
      {
        "name": "Syrian Arab Republic",
        "code": "SYR",
        "phone_code": "+963"
      },
      {
        "name": "Taiwan, Province of China",
        "code": "TWN",
        "phone_code": "+886"
      },
      {
        "name": "Tajikistan",
        "code": "TJK",
        "phone_code": "+992"
      },
      {
        "name": "Tanzania, United Republic of",
        "code": "TZA",
        "phone_code": "+255"
      },
      {
        "name": "Thailand",
        "code": "THA",
        "phone_code": "+66"
      },
      {
        "name": "Timor-Leste",
        "code": "TLS",
        "phone_code": "+670"
      },
      {
        "name": "Togo",
        "code": "TGO",
        "phone_code": "+228"
      },
      {
        "name": "Tokelau",
        "code": "TKL",
        "phone_code": "+690"
      },
      {
        "name": "Tonga",
        "code": "TON",
        "phone_code": "+676"
      },
      {
        "name": "Trinidad and Tobago",
        "code": "TTO",
        "phone_code": "+1868"
      },
      {
        "name": "Tunisia",
        "code": "TUN",
        "phone_code": "+216"
      },
      {
        "name": "Turkey",
        "code": "TUR",
        "phone_code": "+90"
      },
      {
        "name": "Turkmenistan",
        "code": "TKM",
        "phone_code": "+7370"
      },
      {
        "name": "Turks and Caicos Islands",
        "code": "TCA",
        "phone_code": "+1649"
      },
      {
        "name": "Tuvalu",
        "code": "TUV",
        "phone_code": "+688"
      },
      {
        "name": "Uganda",
        "code": "UGA",
        "phone_code": "+256"
      },
      {
        "name": "Ukraine",
        "code": "UKR",
        "phone_code": "+380"
      },
      {
        "name": "United Arab Emirates",
        "code": "ARE",
        "phone_code": "+971"
      },
      {
        "name": "United Kingdom",
        "code": "GBR",
        "phone_code": "+44"
      },
      {
        "name": "United States",
        "code": "USA",
        "phone_code": "+1"
      },
      {
        "name": "United States Minor Outlying Islands",
        "code": "",
        "phone_code": "+1"
      },
      {
        "name": "Uruguay",
        "code": "URY",
        "phone_code": "+598"
      },
      {
        "name": "Uzbekistan",
        "code": "UZB",
        "phone_code": "+998"
      },
      {
        "name": "Vanuatu",
        "code": "VUT",
        "phone_code": "+678"
      },
      {
        "name": "Venezuela",
        "code": "VEN",
        "phone_code": "+58"
      },
      {
        "name": "Viet Nam",
        "code": "VNM",
        "phone_code": "+84"
      },
      {
        "name": "Virgin Islands, British",
        "code": "VGB",
        "phone_code": "+1284"
      },
      {
        "name": "Virgin Islands, U.s.",
        "code": "VIR",
        "phone_code": "+1340"
      },
      {
        "name": "Wallis and Futuna",
        "code": "WLF",
        "phone_code": "+681"
      },
      {
        "name": "Western Sahara",
        "code": "ESH",
        "phone_code": "+212"
      },
      {
        "name": "Yemen",
        "code": "YEM",
        "phone_code": "+967"
      },
      {
        "name": "Zambia",
        "code": "ZMB",
        "phone_code": "+260"
      },
      {
        "name": "Zimbabwe",
        "code": "ZWE",
        "phone_code": "+263"
      },
      {
        "name": "Serbia",
        "code": "SRB",
        "phone_code": "+688"
      },
      {
        "name": "Palestine, State of",
        "code": "PSE",
        "phone_code": "+970"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('masterdata_country', null, {});
  }
};
