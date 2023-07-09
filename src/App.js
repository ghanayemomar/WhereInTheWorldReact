import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/Root";

const countries = [
  {
    flags: {
      png: "https://flagcdn.com/w320/jo.png",
      svg: "https://flagcdn.com/jo.svg",
      alt: "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.",
    },
    name: {
      common: "Jordan",
      official: "Hashemite Kingdom of Jordan",
      nativeName: {
        ara: {
          official: "المملكة الأردنية الهاشمية",
          common: "الأردن",
        },
      },
    },
    tld: [".jo", "الاردن."],
    currencies: {
      JOD: {
        name: "Jordanian dinar",
        symbol: "د.ا",
      },
    },
    capital: ["Amman"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    borders: ["IRQ", "ISR", "PSE", "SAU", "SYR"],
    population: 10203140,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/mp.png",
      svg: "https://flagcdn.com/mp.svg",
      alt: "",
    },
    name: {
      common: "Northern Mariana Islands",
      official: "Commonwealth of the Northern Mariana Islands",
      nativeName: {
        cal: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
        cha: {
          official: "Sankattan Siha Na Islas Mariånas",
          common: "Na Islas Mariånas",
        },
        eng: {
          official: "Commonwealth of the Northern Mariana Islands",
          common: "Northern Mariana Islands",
        },
      },
    },
    tld: [".mp"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Saipan"],
    region: "Oceania",
    subregion: "Micronesia",
    languages: {
      cal: "Carolinian",
      cha: "Chamorro",
      eng: "English",
    },
    borders: [],
    population: 57557,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/rs.png",
      svg: "https://flagcdn.com/rs.svg",
      alt: "The flag of Serbia is composed of three equal horizontal bands of red, blue and white. The coat of arms of Serbia is superimposed at the center of the field slightly towards the hoist side.",
    },
    name: {
      common: "Serbia",
      official: "Republic of Serbia",
      nativeName: {
        srp: {
          official: "Република Србија",
          common: "Србија",
        },
      },
    },
    tld: [".rs", ".срб"],
    currencies: {
      RSD: {
        name: "Serbian dinar",
        symbol: "дин.",
      },
    },
    capital: ["Belgrade"],
    region: "Europe",
    subregion: "Southeast Europe",
    languages: {
      srp: "Serbian",
    },
    borders: ["BIH", "BGR", "HRV", "HUN", "UNK", "MKD", "MNE", "ROU"],
    population: 6908224,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ad.png",
      svg: "https://flagcdn.com/ad.svg",
      alt: "The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.",
    },
    name: {
      common: "Andorra",
      official: "Principality of Andorra",
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: "Andorra",
        },
      },
    },
    tld: [".ad"],
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Andorra la Vella"],
    region: "Europe",
    subregion: "Southern Europe",
    languages: {
      cat: "Catalan",
    },
    borders: ["FRA", "ESP"],
    population: 77265,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tc.png",
      svg: "https://flagcdn.com/tc.svg",
      alt: "",
    },
    name: {
      common: "Turks and Caicos Islands",
      official: "Turks and Caicos Islands",
      nativeName: {
        eng: {
          official: "Turks and Caicos Islands",
          common: "Turks and Caicos Islands",
        },
      },
    },
    tld: [".tc"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Cockburn Town"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      eng: "English",
    },
    borders: [],
    population: 38718,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bm.png",
      svg: "https://flagcdn.com/bm.svg",
      alt: "",
    },
    name: {
      common: "Bermuda",
      official: "Bermuda",
      nativeName: {
        eng: {
          official: "Bermuda",
          common: "Bermuda",
        },
      },
    },
    tld: [".bm"],
    currencies: {
      BMD: {
        name: "Bermudian dollar",
        symbol: "$",
      },
    },
    capital: ["Hamilton"],
    region: "Americas",
    subregion: "North America",
    languages: {
      eng: "English",
    },
    borders: [],
    population: 63903,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/aq.png",
      svg: "https://flagcdn.com/aq.svg",
      alt: "",
    },
    name: {
      common: "Antarctica",
      official: "Antarctica",
      nativeName: {},
    },
    tld: [".aq"],
    currencies: {},
    capital: [],
    region: "Antarctic",
    subregion: "",
    languages: {},
    borders: [],
    population: 1000,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bo.png",
      svg: "https://flagcdn.com/bo.svg",
      alt: "The flag of Bolivia is composed of three equal horizontal bands of red, yellow and green, with the national coat of arms centered in the yellow band.",
    },
    name: {
      common: "Bolivia",
      official: "Plurinational State of Bolivia",
      nativeName: {
        aym: {
          official: "Wuliwya Suyu",
          common: "Wuliwya",
        },
        grn: {
          official: "Tetã Volívia",
          common: "Volívia",
        },
        que: {
          official: "Buliwya Mamallaqta",
          common: "Buliwya",
        },
        spa: {
          official: "Estado Plurinacional de Bolivia",
          common: "Bolivia",
        },
      },
    },
    tld: [".bo"],
    currencies: {
      BOB: {
        name: "Bolivian boliviano",
        symbol: "Bs.",
      },
    },
    capital: ["Sucre"],
    region: "Americas",
    subregion: "South America",
    languages: {
      aym: "Aymara",
      grn: "Guaraní",
      que: "Quechua",
      spa: "Spanish",
    },
    borders: ["ARG", "BRA", "CHL", "PRY", "PER"],
    population: 11673029,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ly.png",
      svg: "https://flagcdn.com/ly.svg",
      alt: "The flag of Libya is composed of three horizontal bands of red, black and green, with the black band twice the height of the other two bands. At the center of the black band is a fly-side facing white crescent and a five-pointed white star placed just outside the crescent opening.",
    },
    name: {
      common: "Libya",
      official: "State of Libya",
      nativeName: {
        ara: {
          official: "الدولة ليبيا",
          common: "‏ليبيا",
        },
      },
    },
    tld: [".ly"],
    currencies: {
      LYD: {
        name: "Libyan dinar",
        symbol: "ل.د",
      },
    },
    capital: ["Tripoli"],
    region: "Africa",
    subregion: "Northern Africa",
    languages: {
      ara: "Arabic",
    },
    borders: ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
    population: 6871287,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ml.png",
      svg: "https://flagcdn.com/ml.svg",
      alt: "The flag of Mali is composed of three equal vertical bands of green, yellow and red.",
    },
    name: {
      common: "Mali",
      official: "Republic of Mali",
      nativeName: {
        fra: {
          official: "République du Mali",
          common: "Mali",
        },
      },
    },
    tld: [".ml"],
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Bamako"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      fra: "French",
    },
    borders: ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
    population: 20250834,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/am.png",
      svg: "https://flagcdn.com/am.svg",
      alt: "The flag of Armenia is composed of three equal horizontal bands of red, blue and orange.",
    },
    name: {
      common: "Armenia",
      official: "Republic of Armenia",
      nativeName: {
        hye: {
          official: "Հայաստանի Հանրապետություն",
          common: "Հայաստան",
        },
      },
    },
    tld: [".am"],
    currencies: {
      AMD: {
        name: "Armenian dram",
        symbol: "֏",
      },
    },
    capital: ["Yerevan"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      hye: "Armenian",
    },
    borders: ["AZE", "GEO", "IRN", "TUR"],
    population: 2963234,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/mu.png",
      svg: "https://flagcdn.com/mu.svg",
      alt: "The flag of Mauritius is composed of four equal horizontal bands of red, blue, yellow and green.",
    },
    name: {
      common: "Mauritius",
      official: "Republic of Mauritius",
      nativeName: {
        eng: {
          official: "Republic of Mauritius",
          common: "Mauritius",
        },
        fra: {
          official: "République de Maurice",
          common: "Maurice",
        },
        mfe: {
          official: "Republik Moris",
          common: "Moris",
        },
      },
    },
    tld: [".mu"],
    currencies: {
      MUR: {
        name: "Mauritian rupee",
        symbol: "₨",
      },
    },
    capital: ["Port Louis"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      eng: "English",
      fra: "French",
      mfe: "Mauritian Creole",
    },
    borders: [],
    population: 1265740,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/mv.png",
      svg: "https://flagcdn.com/mv.svg",
      alt: "The flag of Maldives has a red field, at the center of which is a large green rectangle bearing a fly-side facing white crescent.",
    },
    name: {
      common: "Maldives",
      official: "Republic of the Maldives",
      nativeName: {
        div: {
          official: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
          common: "ދިވެހިރާއްޖޭގެ",
        },
      },
    },
    tld: [".mv"],
    currencies: {
      MVR: {
        name: "Maldivian rufiyaa",
        symbol: ".ރ",
      },
    },
    capital: ["Malé"],
    region: "Asia",
    subregion: "Southern Asia",
    languages: {
      div: "Maldivian",
    },
    borders: [],
    population: 540542,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/as.png",
      svg: "https://flagcdn.com/as.svg",
      alt: "",
    },
    name: {
      common: "American Samoa",
      official: "American Samoa",
      nativeName: {
        eng: {
          official: "American Samoa",
          common: "American Samoa",
        },
        smo: {
          official: "Sāmoa Amelika",
          common: "Sāmoa Amelika",
        },
      },
    },
    tld: [".as"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Pago Pago"],
    region: "Oceania",
    subregion: "Polynesia",
    languages: {
      eng: "English",
      smo: "Samoan",
    },
    borders: [],
    population: 55197,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/mk.png",
      svg: "https://flagcdn.com/mk.svg",
      alt: "The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field.",
    },
    name: {
      common: "North Macedonia",
      official: "Republic of North Macedonia",
      nativeName: {
        mkd: {
          official: "Република Северна Македонија",
          common: "Македонија",
        },
      },
    },
    tld: [".mk"],
    currencies: {
      MKD: {
        name: "denar",
        symbol: "den",
      },
    },
    capital: ["Skopje"],
    region: "Europe",
    subregion: "Southeast Europe",
    languages: {
      mkd: "Macedonian",
    },
    borders: ["ALB", "BGR", "GRC", "UNK", "SRB"],
    population: 2077132,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/et.png",
      svg: "https://flagcdn.com/et.svg",
      alt: "The flag of Ethiopia is composed of three equal horizontal bands of green, yellow and red, with the national emblem superimposed at the center of the field. The national emblem comprises a light blue circle bearing a golden-yellow pentagram with single yellow rays emanating from the angles between the points of the pentagram.",
    },
    name: {
      common: "Ethiopia",
      official: "Federal Democratic Republic of Ethiopia",
      nativeName: {
        amh: {
          official: "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ",
          common: "ኢትዮጵያ",
        },
      },
    },
    tld: [".et"],
    currencies: {
      ETB: {
        name: "Ethiopian birr",
        symbol: "Br",
      },
    },
    capital: ["Addis Ababa"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      amh: "Amharic",
    },
    borders: ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
    population: 114963583,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/gl.png",
      svg: "https://flagcdn.com/gl.svg",
      alt: "",
    },
    name: {
      common: "Greenland",
      official: "Greenland",
      nativeName: {
        kal: {
          official: "Kalaallit Nunaat",
          common: "Kalaallit Nunaat",
        },
      },
    },
    tld: [".gl"],
    currencies: {
      DKK: {
        name: "krone",
        symbol: "kr.",
      },
    },
    capital: ["Nuuk"],
    region: "Americas",
    subregion: "North America",
    languages: {
      kal: "Greenlandic",
    },
    borders: [],
    population: 56367,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/iq.png",
      svg: "https://flagcdn.com/iq.svg",
      alt: "The flag of Iraq is composed of three equal horizontal bands of red, white and black. In the central white band are Arabic inscriptions in green.",
    },
    name: {
      common: "Iraq",
      official: "Republic of Iraq",
      nativeName: {
        ara: {
          official: "جمهورية العراق",
          common: "العراق",
        },
        arc: {
          official: "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ",
          common: "ܩܘܼܛܢܵܐ",
        },
        ckb: {
          official: "کۆماری عێراق",
          common: "کۆماری",
        },
      },
    },
    tld: [".iq"],
    currencies: {
      IQD: {
        name: "Iraqi dinar",
        symbol: "ع.د",
      },
    },
    capital: ["Baghdad"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
      arc: "Aramaic",
      ckb: "Sorani",
    },
    borders: ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
    population: 40222503,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/gt.png",
      svg: "https://flagcdn.com/gt.svg",
      alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
    },
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
      nativeName: {
        spa: {
          official: "República de Guatemala",
          common: "Guatemala",
        },
      },
    },
    tld: [".gt"],
    currencies: {
      GTQ: {
        name: "Guatemalan quetzal",
        symbol: "Q",
      },
    },
    capital: ["Guatemala City"],
    region: "Americas",
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["BLZ", "SLV", "HND", "MEX"],
    population: 16858333,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/tt.png",
      svg: "https://flagcdn.com/tt.svg",
      alt: "The flag of Trinidad and Tobago has a red field with a white-edged black diagonal band that extends from the upper hoist-side corner to the lower fly-side corner of the field.",
    },
    name: {
      common: "Trinidad and Tobago",
      official: "Republic of Trinidad and Tobago",
      nativeName: {
        eng: {
          official: "Republic of Trinidad and Tobago",
          common: "Trinidad and Tobago",
        },
      },
    },
    tld: [".tt"],
    currencies: {
      TTD: {
        name: "Trinidad and Tobago dollar",
        symbol: "$",
      },
    },
    capital: ["Port of Spain"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      eng: "English",
    },
    borders: [],
    population: 1399491,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/pe.png",
      svg: "https://flagcdn.com/pe.svg",
      alt: "The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.",
    },
    name: {
      common: "Peru",
      official: "Republic of Peru",
      nativeName: {
        aym: {
          official: "Piruw Suyu",
          common: "Piruw",
        },
        que: {
          official: "Piruw Ripuwlika",
          common: "Piruw",
        },
        spa: {
          official: "República del Perú",
          common: "Perú",
        },
      },
    },
    tld: [".pe"],
    currencies: {
      PEN: {
        name: "Peruvian sol",
        symbol: "S/ ",
      },
    },
    capital: ["Lima"],
    region: "Americas",
    subregion: "South America",
    languages: {
      aym: "Aymara",
      que: "Quechua",
      spa: "Spanish",
    },
    borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
    population: 32971846,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sr.png",
      svg: "https://flagcdn.com/sr.svg",
      alt: "The flag of Suriname is composed of five horizontal bands of green, white, red, white and green in the ratio of 2:1:4:1:2. A large five-pointed yellow star is centered in the red band.",
    },
    name: {
      common: "Suriname",
      official: "Republic of Suriname",
      nativeName: {
        nld: {
          official: "Republiek Suriname",
          common: "Suriname",
        },
      },
    },
    tld: [".sr"],
    currencies: {
      SRD: {
        name: "Surinamese dollar",
        symbol: "$",
      },
    },
    capital: ["Paramaribo"],
    region: "Americas",
    subregion: "South America",
    languages: {
      nld: "Dutch",
    },
    borders: ["BRA", "GUF", "GUY"],
    population: 586634,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/se.png",
      svg: "https://flagcdn.com/se.svg",
      alt: "The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
    },
    name: {
      common: "Sweden",
      official: "Kingdom of Sweden",
      nativeName: {
        swe: {
          official: "Konungariket Sverige",
          common: "Sverige",
        },
      },
    },
    tld: [".se"],
    currencies: {
      SEK: {
        name: "Swedish krona",
        symbol: "kr",
      },
    },
    capital: ["Stockholm"],
    region: "Europe",
    subregion: "Northern Europe",
    languages: {
      swe: "Swedish",
    },
    borders: ["FIN", "NOR"],
    population: 10353442,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/nc.png",
      svg: "https://flagcdn.com/nc.svg",
      alt: "",
    },
    name: {
      common: "New Caledonia",
      official: "New Caledonia",
      nativeName: {
        fra: {
          official: "Nouvelle-Calédonie",
          common: "Nouvelle-Calédonie",
        },
      },
    },
    tld: [".nc"],
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    capital: ["Nouméa"],
    region: "Oceania",
    subregion: "Melanesia",
    languages: {
      fra: "French",
    },
    borders: [],
    population: 271960,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/pf.png",
      svg: "https://flagcdn.com/pf.svg",
      alt: "",
    },
    name: {
      common: "French Polynesia",
      official: "French Polynesia",
      nativeName: {
        fra: {
          official: "Polynésie française",
          common: "Polynésie française",
        },
      },
    },
    tld: [".pf"],
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    capital: ["Papeetē"],
    region: "Oceania",
    subregion: "Polynesia",
    languages: {
      fra: "French",
    },
    borders: [],
    population: 280904,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/bj.png",
      svg: "https://flagcdn.com/bj.svg",
      alt: "The flag of Benin features a green vertical band on its hoist side that takes up about two-fifth the width of the field and two equal horizontal bands of yellow and red adjoining the vertical band.",
    },
    name: {
      common: "Benin",
      official: "Republic of Benin",
      nativeName: {
        fra: {
          official: "République du Bénin",
          common: "Bénin",
        },
      },
    },
    tld: [".bj"],
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Porto-Novo"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      fra: "French",
    },
    borders: ["BFA", "NER", "NGA", "TGO"],
    population: 12123198,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ee.png",
      svg: "https://flagcdn.com/ee.svg",
      alt: "The flag of Estonia is composed of three equal horizontal bands of blue, black and white.",
    },
    name: {
      common: "Estonia",
      official: "Republic of Estonia",
      nativeName: {
        est: {
          official: "Eesti Vabariik",
          common: "Eesti",
        },
      },
    },
    tld: [".ee"],
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Tallinn"],
    region: "Europe",
    subregion: "Northern Europe",
    languages: {
      est: "Estonian",
    },
    borders: ["LVA", "RUS"],
    population: 1331057,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/fk.png",
      svg: "https://flagcdn.com/fk.svg",
      alt: "",
    },
    name: {
      common: "Falkland Islands",
      official: "Falkland Islands",
      nativeName: {
        eng: {
          official: "Falkland Islands",
          common: "Falkland Islands",
        },
      },
    },
    tld: [".fk"],
    currencies: {
      FKP: {
        name: "Falkland Islands pound",
        symbol: "£",
      },
    },
    capital: ["Stanley"],
    region: "Americas",
    subregion: "South America",
    languages: {
      eng: "English",
    },
    borders: [],
    population: 2563,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/gu.png",
      svg: "https://flagcdn.com/gu.svg",
      alt: "",
    },
    name: {
      common: "Guam",
      official: "Guam",
      nativeName: {
        cha: {
          official: "Guåhån",
          common: "Guåhån",
        },
        eng: {
          official: "Guam",
          common: "Guam",
        },
        spa: {
          official: "Guam",
          common: "Guam",
        },
      },
    },
    tld: [".gu"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Hagåtña"],
    region: "Oceania",
    subregion: "Micronesia",
    languages: {
      cha: "Chamorro",
      eng: "English",
      spa: "Spanish",
    },
    borders: [],
    population: 168783,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/zw.png",
      svg: "https://flagcdn.com/zw.svg",
      alt: "The flag of Zimbabwe is composed of seven equal horizontal bands of green, yellow, red, black, red, yellow and green, with a white isosceles triangle superimposed on the hoist side of the field. This triangle is edged in black, spans about one-fourth the width of the field and has its base on the hoist end. A yellow Zimbabwe bird superimposed on a five-pointed red star is centered in the triangle.",
    },
    name: {
      common: "Zimbabwe",
      official: "Republic of Zimbabwe",
      nativeName: {
        bwg: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        eng: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        kck: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        khi: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        ndc: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        nde: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        nya: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        sna: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        sot: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        toi: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        tsn: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        tso: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        ven: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        xho: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
        zib: {
          official: "Republic of Zimbabwe",
          common: "Zimbabwe",
        },
      },
    },
    tld: [".zw"],
    currencies: {
      ZWL: {
        name: "Zimbabwean dollar",
        symbol: "$",
      },
    },
    capital: ["Harare"],
    region: "Africa",
    subregion: "Southern Africa",
    languages: {
      bwg: "Chibarwe",
      eng: "English",
      kck: "Kalanga",
      khi: "Khoisan",
      ndc: "Ndau",
      nde: "Northern Ndebele",
      nya: "Chewa",
      sna: "Shona",
      sot: "Sotho",
      toi: "Tonga",
      tsn: "Tswana",
      tso: "Tsonga",
      ven: "Venda",
      xho: "Xhosa",
      zib: "Zimbabwean Sign Language",
    },
    borders: ["BWA", "MOZ", "ZAF", "ZMB"],
    population: 14862927,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sk.png",
      svg: "https://flagcdn.com/sk.svg",
      alt: "The flag of Slovakia is composed of three equal horizontal bands of white, blue and red. The coat of arms of Slovakia is superimposed at the center of the field slightly towards the hoist side.",
    },
    name: {
      common: "Slovakia",
      official: "Slovak Republic",
      nativeName: {
        slk: {
          official: "Slovenská republika",
          common: "Slovensko",
        },
      },
    },
    tld: [".sk"],
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Bratislava"],
    region: "Europe",
    subregion: "Central Europe",
    languages: {
      slk: "Slovak",
    },
    borders: ["AUT", "CZE", "HUN", "POL", "UKR"],
    population: 5458827,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/nl.png",
      svg: "https://flagcdn.com/nl.svg",
      alt: "The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue.",
    },
    name: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      nativeName: {
        nld: {
          official: "Koninkrijk der Nederlanden",
          common: "Nederland",
        },
      },
    },
    tld: [".nl"],
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Amsterdam"],
    region: "Europe",
    subregion: "Western Europe",
    languages: {
      nld: "Dutch",
    },
    borders: ["BEL", "DEU"],
    population: 16655799,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ec.png",
      svg: "https://flagcdn.com/ec.svg",
      alt: "The flag of Ecuador is composed of the horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands. The Ecuadorian coat of arms is superimposed in the center of the field.",
    },
    name: {
      common: "Ecuador",
      official: "Republic of Ecuador",
      nativeName: {
        spa: {
          official: "República del Ecuador",
          common: "Ecuador",
        },
      },
    },
    tld: [".ec"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Quito"],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },
    borders: ["COL", "PER"],
    population: 17643060,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sa.png",
      svg: "https://flagcdn.com/sa.svg",
      alt: "The flag of Saudi Arabia has a green field, at the center of which is an Arabic inscription — the Shahada — in white above a white horizontal sabre with its tip pointed to the hoist side of the field.",
    },
    name: {
      common: "Saudi Arabia",
      official: "Kingdom of Saudi Arabia",
      nativeName: {
        ara: {
          official: "المملكة العربية السعودية",
          common: "العربية السعودية",
        },
      },
    },
    tld: [".sa", ".السعودية"],
    currencies: {
      SAR: {
        name: "Saudi riyal",
        symbol: "ر.س",
      },
    },
    capital: ["Riyadh"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
    population: 34813867,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/ae.png",
      svg: "https://flagcdn.com/ae.svg",
      alt: "The flag of United Arab Emirates features a red vertical band on its hoist side that takes up about one-fourth the width of the field and three equal horizontal bands of green, white and black adjoining the vertical band.",
    },
    name: {
      common: "United Arab Emirates",
      official: "United Arab Emirates",
      nativeName: {
        ara: {
          official: "الإمارات العربية المتحدة",
          common: "دولة الإمارات العربية المتحدة",
        },
      },
    },
    tld: [".ae", "امارات."],
    currencies: {
      AED: {
        name: "United Arab Emirates dirham",
        symbol: "د.إ",
      },
    },
    capital: ["Abu Dhabi"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    borders: ["OMN", "SAU"],
    population: 9890400,
  },
  {
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      alt: "The flag of the Islamic Emirate of Afghanistan has a white field with Arabic inscriptions — the Shahada — in black across its center.",
    },
    name: {
      common: "Afghanistan",
      official: "Islamic Republic of Afghanistan",
      nativeName: {
        prs: {
          official: "جمهوری اسلامی افغانستان",
          common: "افغانستان",
        },
        pus: {
          official: "د افغانستان اسلامي جمهوریت",
          common: "افغانستان",
        },
        tuk: {
          official: "Owganystan Yslam Respublikasy",
          common: "Owganystan",
        },
      },
    },
    tld: [".af"],
    currencies: {
      AFN: {
        name: "Afghan afghani",
        symbol: "؋",
      },
    },
    capital: ["Kabul"],
    region: "Asia",
    subregion: "Southern Asia",
    languages: {
      prs: "Dari",
      pus: "Pashto",
      tuk: "Turkmen",
    },
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    population: 40218234,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/um.png",
      svg: "https://flagcdn.com/um.svg",
      alt: "",
    },
    name: {
      common: "United States Minor Outlying Islands",
      official: "United States Minor Outlying Islands",
      nativeName: {
        eng: {
          official: "United States Minor Outlying Islands",
          common: "United States Minor Outlying Islands",
        },
      },
    },
    tld: [".us"],
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Washington DC"],
    region: "Americas",
    subregion: "North America",
    languages: {
      eng: "English",
    },
    borders: [],
    population: 300,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/cf.png",
      svg: "https://flagcdn.com/cf.svg",
      alt: "The flag of Central African Republic is composed of four equal horizontal bands of blue, white, green and yellow intersected at the center by a vertical red band of equal size as the horizontal bands. A yellow five-pointed star is situated on the hoist side of the blue band.",
    },
    name: {
      common: "Central African Republic",
      official: "Central African Republic",
      nativeName: {
        fra: {
          official: "République centrafricaine",
          common: "République centrafricaine",
        },
        sag: {
          official: "Ködörösêse tî Bêafrîka",
          common: "Bêafrîka",
        },
      },
    },
    tld: [".cf"],
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Bangui"],
    region: "Africa",
    subregion: "Middle Africa",
    languages: {
      fra: "French",
      sag: "Sango",
    },
    borders: ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
    population: 4829764,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/pa.png",
      svg: "https://flagcdn.com/pa.svg",
      alt: "The flag of Panama is composed of four equal rectangular areas — a white rectangular area with a blue five-pointed star at its center, a red rectangular area, a white rectangular area with a red five-pointed star at its center, and a blue rectangular area — in the upper hoist side, upper fly side, lower fly side and lower hoist side respectively.",
    },
    name: {
      common: "Panama",
      official: "Republic of Panama",
      nativeName: {
        spa: {
          official: "República de Panamá",
          common: "Panamá",
        },
      },
    },
    tld: [".pa"],
    currencies: {
      PAB: {
        name: "Panamanian balboa",
        symbol: "B/.",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Panama City"],
    region: "Americas",
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["COL", "CRI"],
    population: 4314768,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/va.png",
      svg: "https://flagcdn.com/va.svg",
      alt: "The flag of Vatican City is square shaped. It is composed of two equal vertical bands of yellow and white, with national coat of arms centered in the white band. The national coat of arms comprises the Papal Tiara superimposed on two crossed keys.",
    },
    name: {
      common: "Vatican City",
      official: "Vatican City State",
      nativeName: {
        ita: {
          official: "Stato della Città del Vaticano",
          common: "Vaticano",
        },
        lat: {
          official: "Status Civitatis Vaticanæ",
          common: "Vaticanæ",
        },
      },
    },
    tld: [".va"],
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Vatican City"],
    region: "Europe",
    subregion: "Southern Europe",
    languages: {
      ita: "Italian",
      lat: "Latin",
    },
    borders: ["ITA"],
    population: 451,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/sy.png",
      svg: "https://flagcdn.com/sy.svg",
      alt: "The flag of Syria is composed of three equal horizontal bands of red, white and black. At the center of the white band are two small five-pointed green stars arranged in a horizontal line.",
    },
    name: {
      common: "Syria",
      official: "Syrian Arab Republic",
      nativeName: {
        ara: {
          official: "الجمهورية العربية السورية",
          common: "سوريا",
        },
      },
    },
    tld: [".sy", "سوريا."],
    currencies: {
      SYP: {
        name: "Syrian pound",
        symbol: "£",
      },
    },
    capital: ["Damascus"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      ara: "Arabic",
    },
    borders: ["IRQ", "ISR", "JOR", "LBN", "TUR"],
    population: 17500657,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/vu.png",
      svg: "https://flagcdn.com/vu.svg",
      alt: "The flag of Vanuatu is composed of two equal horizontal bands of red and green, with a black isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about two-fifth the width of the field and is enclosed on its sides by the arms of a thin black-edged yellow horizontally oriented Y-shaped band which extends along the boundary of the red and green bands to the fly end of the field. A yellow boar's tusk encircling two yellow crossed namele leaves is centered in the triangle.",
    },
    name: {
      common: "Vanuatu",
      official: "Republic of Vanuatu",
      nativeName: {
        bis: {
          official: "Ripablik blong Vanuatu",
          common: "Vanuatu",
        },
        eng: {
          official: "Republic of Vanuatu",
          common: "Vanuatu",
        },
        fra: {
          official: "République de Vanuatu",
          common: "Vanuatu",
        },
      },
    },
    tld: [".vu"],
    currencies: {
      VUV: {
        name: "Vanuatu vatu",
        symbol: "Vt",
      },
    },
    capital: ["Port Vila"],
    region: "Oceania",
    subregion: "Melanesia",
    languages: {
      bis: "Bislama",
      eng: "English",
      fra: "French",
    },
    borders: [],
    population: 307150,
  },
  {
    flags: {
      png: "https://flagcdn.com/w320/hn.png",
      svg: "https://flagcdn.com/hn.svg",
      alt: "The flag of Honduras is composed of three equal horizontal bands of turquoise, white and turquoise, with five small five-pointed turquoise stars arranged in a quincuncial pattern at the center of the white band.",
    },
    name: {
      common: "Honduras",
      official: "Republic of Honduras",
      nativeName: {
        spa: {
          official: "República de Honduras",
          common: "Honduras",
        },
      },
    },
    tld: [".hn"],
    currencies: {
      HNL: {
        name: "Honduran lempira",
        symbol: "L",
      },
    },
    capital: ["Tegucigalpa"],
    region: "Americas",
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["GTM", "SLV", "NIC"],
    population: 9904608,
  },
];

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage countries={countries} /> },
      {
        path: "Detail-Page/:CountryName",
        element: <DetailPage countries={countries} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
