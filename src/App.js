import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
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
    capital: ["Amman"],
    region: "Asia",
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
    capital: ["Saipan"],
    region: "Oceania",
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
    capital: ["Belgrade"],
    region: "Europe",
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
    capital: ["Andorra la Vella"],
    region: "Europe",
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
    capital: ["Cockburn Town"],
    region: "Americas",
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
    capital: ["Hamilton"],
    region: "Americas",
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
    capital: [],
    region: "Antarctic",
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
    capital: ["Sucre"],
    region: "Americas",
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
    capital: ["Tripoli"],
    region: "Africa",
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
    capital: ["Bamako"],
    region: "Africa",
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
    capital: ["Yerevan"],
    region: "Asia",
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
    capital: ["Port Louis"],
    region: "Africa",
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
    capital: ["Malé"],
    region: "Asia",
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
    capital: ["Pago Pago"],
    region: "Oceania",
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
    capital: ["Skopje"],
    region: "Europe",
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
    capital: ["Addis Ababa"],
    region: "Africa",
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
    capital: ["Nuuk"],
    region: "Americas",
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
    capital: ["Baghdad"],
    region: "Asia",
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
    capital: ["Guatemala City"],
    region: "Americas",
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
    capital: ["Port of Spain"],
    region: "Americas",
    population: 1399491,
  },
];
function App() {
  return <DetailPage countries={countries} />;
}

export default App;
