import { Injectable } from '@angular/core'

@Injectable()

export class PEDataService {

  public getCampusLocations() {
    return CAMPUSLOCS;
  }

  public getSpecialFeeList() {
    return SPECIALFEES;
  }

  public getTuitionRates() {
    return TUITIONRATES;
  }

}

const CAMPUSLOCS = [
  {
    campusCode: "ATT",
    campusName: "ATT Center"
  }, {
    campusCode: "CAT",
    campusName: "Catalina"
  }, {
    campusCode: "HSC",
    campusName: "Health Science Campus"
  }, {
    campusCode: "LAC",
    campusName: "L.A. Center"
  }, {
    campusCode: "NOF",
    campusName: "No Tuition or Fees"
  }, {
    campusCode: "USA",
    campusName: "Off Campus but in U.S."
  }, {
    campusCode: "OCC",
    campusName: "Orange County Campus"
  }, {
    campusCode: "OVS",
    campusName: "Overseas"
  }, {
    campusCode: "SAC",
    campusName: "Sacramento"
  }, {
    campusCode: "SD",
    campusName: "San Diego"
  }, {
    campusCode: "SKB",
    campusName: "Skirball"
  }, {
    campusCode: "UPC",
    campusName: "University Park"
  }, {
    campusCode: "VIR",
    campusName: "Virtual(DEN/Online)"
  }, {
    campusCode: "DC",
    campusName: "Washington D.C."
  }];

const SPECIALFEES = [
  "M46720182 Global Ed.D Program Fee Su2018",
  "T18920182 LSOA Student Fee Su2018",
  "T27120182 IPPAM Program Fee Su2018",
  "T30220182 ENGR Computing Access Fee - Su2018",
  "T30320182 CNTV Resource Access Fee - Su2018",
  "T31320182 MSM Program Fee Su2018",
  "T33320182 MS-Fin Program Fee Su2018",
  "T45420182 PM MBA Text Book Fee Su2018",
  "T46020182 OT Lab Fee Su2018",
  "T50920182 Dental Gown Usage Fee-Su2018",
  "T51320182 Malpractice Insurance Fee Su2018",
  "T51820182 Instrument Mngt System Fee Su2018",
  "T60520182 Summer Seminar Fee Su2018",
  "T60620182 Summer Seminar Lab Fee Su2018",
  "T61120182 OMBA Program Fee Su2018",
  "T61220182 OMBA Course Materials Fee Su2018"
];

const TUITIONRATES = [
  {
    term: "20182",
    termRates: [{
        rateTypeCode: "BUSG",
        rateTypeDesc: "Graduate Business",
        rateTypeUnitRate: "1847",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENSP",
        rateTypeDesc: "Special Dentistry International",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "30409"
      }, {
        rateTypeCode: "DH",
        rateTypeDesc: "Dental Hygiene",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "24769"
      }, {
        rateTypeCode: "PHAR",
        rateTypeDesc: "Pharmacy",
        rateTypeUnitRate: "1830",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "ENGRG",
        rateTypeDesc: "Graduate Engineering",
        rateTypeUnitRate: "1",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENT",
        rateTypeDesc: "Dentistry - DDS",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "30496"
      }, {
        rateTypeCode: "MRED",
        rateTypeDesc: "Masters in Real Estate Development",
        rateTypeUnitRate: "2066",
        rateTypeFlatRate: "33056"
      }, {
        rateTypeCode: "ZERO",
        rateTypeDesc: "Zero Tuition Rate",
        rateTypeUnitRate: "0",
        rateTypeFlatRate: "0"
      }, {
        rateTypeCode: "CINAG",
        rateTypeDesc: "Graduate Cinema",
        rateTypeUnitRate: "1915",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "MED",
        rateTypeDesc: "Medicine",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "30714"
      }, {
        rateTypeCode: "STD",
        rateTypeDesc: "Standard (Session 001)",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "DENTADV",
        rateTypeDesc: "Advanced Dentistry",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "30736"
      }, {
        rateTypeCode: "LAW",
        rateTypeDesc: "Law",
        rateTypeUnitRate: "2393",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "MPA",
        rateTypeDesc: "Master in Physician Assistant",
        rateTypeUnitRate: "1800",
        rateTypeFlatRate: "26724"
      }]
  }, {
    term: "20183",
    termRates: [{
        rateTypeCode: "DENSP",
        rateTypeDesc: "Special Dentistry International",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "31473"
      }, {
        rateTypeCode: "DH",
        rateTypeDesc: "Dental Hygiene",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "25636"
      }, {
        rateTypeCode: "DENT",
        rateTypeDesc: "Dentistry - DDS",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "31473"
      }, {
        rateTypeCode: "DENTADV",
        rateTypeDesc: "Advanced Dentistry",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "22999"
      }, {
        rateTypeCode: "CINAG",
        rateTypeDesc: "Graduate Cinema",
        rateTypeUnitRate: "1982",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "BUSG",
        rateTypeDesc: "Graduate Business",
        rateTypeUnitRate: "1912",
        rateTypeFlatRate: null
      }, {
        rateTypeCode: "STD",
        rateTypeDesc: "Standard (Session 001)",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "27660"
      }, {
        rateTypeCode: "ZERO",
        rateTypeDesc: "Zero Tuition Rate",
        rateTypeUnitRate: "0",
        rateTypeFlatRate: "0"
      }, {
        rateTypeCode: "PHAR",
        rateTypeDesc: "Pharmacy",
        rateTypeUnitRate: "1894",
        rateTypeFlatRate: "28423"
      }, {
        rateTypeCode: "MRED",
        rateTypeDesc: "Masters in Real Estate Development",
        rateTypeUnitRate: "2066",
        rateTypeFlatRate: "33056"
      }, {
        rateTypeCode: "BKNPT3",
        rateTypeDesc: "BKN & PT Year 3",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "20358"
      }, {
        rateTypeCode: "BKNPT1",
        rateTypeDesc: "BKN & PT Years 1-2",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "33695"
      }, {
        rateTypeCode: "MPA",
        rateTypeDesc: "Master in Physician Assistant",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "27660"
      }, {
        rateTypeCode: "MED",
        rateTypeDesc: "Medicine",
        rateTypeUnitRate: "1863",
        rateTypeFlatRate: "31482"
      }, {
        rateTypeCode: "LAW",
        rateTypeDesc: "Law",
        rateTypeUnitRate: "2477",
        rateTypeFlatRate: "32032"
      }, {
        rateTypeCode: "ENGRG",
        rateTypeDesc: "Graduate Engineering",
        rateTypeUnitRate: "2005",
        rateTypeFlatRate: null
      }]
  }, {
    term: "20191",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1982",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: "1",
      rateTypeFlatRate: "33695"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1894",
      rateTypeFlatRate: "28423"
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "20358"
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31811"
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "1"
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31482"
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2477",
      rateTypeFlatRate: "32032"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "25636"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "2005",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1912",
      rateTypeFlatRate: null
    }]
  }, {
    term: "20192",
    termRates: [{
      rateTypeCode: "MPA",
      rateTypeDesc: "Master in Physician Assistant",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "27660"
    }, {
      rateTypeCode: "DENSP",
      rateTypeDesc: "Special Dentistry International",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "CINAG",
      rateTypeDesc: "Graduate Cinema",
      rateTypeUnitRate: "1982",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BKNPT1",
      rateTypeDesc: "BKN & PT Years 1-2",
      rateTypeUnitRate: "1",
      rateTypeFlatRate: "33695"
    }, {
      rateTypeCode: "PHAR",
      rateTypeDesc: "Pharmacy",
      rateTypeUnitRate: "1894",
      rateTypeFlatRate: "28423"
    }, {
      rateTypeCode: "BKNPT3",
      rateTypeDesc: "BKN & PT Year 3",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "20358"
    }, {
      rateTypeCode: "DENTADV",
      rateTypeDesc: "Advanced Dentistry",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31811"
    }, {
      rateTypeCode: "STD",
      rateTypeDesc: "Standard (Session 001)",
      rateTypeUnitRate: "1800",
      rateTypeFlatRate: "1"
    }, {
      rateTypeCode: "MED",
      rateTypeDesc: "Medicine",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31482"
    }, {
      rateTypeCode: "DENT",
      rateTypeDesc: "Dentistry - DDS",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "31473"
    }, {
      rateTypeCode: "MRED",
      rateTypeDesc: "Masters in Real Estate Development",
      rateTypeUnitRate: "2066",
      rateTypeFlatRate: "33056"
    }, {
      rateTypeCode: "LAW",
      rateTypeDesc: "Law",
      rateTypeUnitRate: "2477",
      rateTypeFlatRate: "32032"
    }, {
      rateTypeCode: "DH",
      rateTypeDesc: "Dental Hygiene",
      rateTypeUnitRate: "1863",
      rateTypeFlatRate: "25636"
    }, {
      rateTypeCode: "ZERO",
      rateTypeDesc: "Zero Tuition Rate",
      rateTypeUnitRate: "0",
      rateTypeFlatRate: "0"
    }, {
      rateTypeCode: "ENGRG",
      rateTypeDesc: "Graduate Engineering",
      rateTypeUnitRate: "2005",
      rateTypeFlatRate: null
    }, {
      rateTypeCode: "BUSG",
      rateTypeDesc: "Graduate Business",
      rateTypeUnitRate: "1912",
      rateTypeFlatRate: null
    }]
  }
];
