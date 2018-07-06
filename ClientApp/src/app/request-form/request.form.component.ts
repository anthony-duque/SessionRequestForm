import { Component, OnInit } from '@angular/core';
import { PEDataService } from '../shared/services/pedata.service';
import { SQLDataService } from '../shared/services/sqldata.service';
import { Observable, Subscriber } from 'rxjs/RX';
import { Router } from '@angular/router';

import { SpecialFee } from '../shared/models/SpecialFee';

const GRADELEVEL = [
  { code: "", name: "" },
  { code: "G", name: "Graduate" },
  { code: "U", name: "Undergraduate" },
  { code: "B", name: "All" }
];

const ENROLLMENTTYPES = [
  { code: "FULL", name: "Full Load" },
  { code: "HALF", name: "Half Load" },
  { code: "NONE", name: "Not Enrolled" }
];

const MAX_SESSION_BREAKS = 2;

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html',
  styleUrls: ['./request.form.component.css']
})

export class RequestFormComponent implements OnInit{

  pageTitle: string = "Session Request Form";

  public MAXUNITS       : number = 100;
  public UscCampuses    : any[];
  public SpecialFeeList : any[];
  public termRates      : any[];
  public SessionCodes   : any[];
  public semesters      : any[];
  public GradeLevel     : any[] = GRADELEVEL;
  public CampusNameArray: string[] = [];
  public EnrollTypes    : any[] = ENROLLMENTTYPES;
  public Session001Dates: any;
  public disableUnitRange: boolean = false;
  public showPerUnitBox : boolean = false;
  public showFlatRateFields: boolean = false;
//  public session: any;

  public session : any = {

    academicTerm: {
      code: null,
      name: null
    },

    code: {
      sessionCode: null,
      sessionDesc: null,
    },

    firstDayOfClasses: null,

    lastDayOfClasses: null,

    firstDayOfFinals: null,

    lastDayOfFinals: null,

    classLocations: [],

    sessionBreaks: [],

    rateType: {
      rateTypeCode: null,
      rateTypeDesc: null,
      rateTypeUnitRate: null,
      rateTypeFlatRate: null
    },

    flatRateUnitRange: {
      graduate: {
        minimum: null,
        maximum: null
      },
      undergraduate: {
        minimum: null,
        maximum: null
      }
    },

    specialFees: []
  }; // session


  constructor(
    private peDataService: PEDataService,
    private sqlDataService: SQLDataService,
    private router: Router
  ) {

    this.semesters = this.peDataService.getActiveTerms();       // pre-populate the Semester dropdown
    this.UscCampuses = this.peDataService.getCampusLocations(); // pre-populate the Campus Location dropdown
    this.SessionCodes = this.peDataService.getSessionCodes();   // pre-populate the Session Codes dropdown

  } // constructor()


  ngOnInit() {

    //this.peDataService.getCampusLocations().subscribe(locations => {
    //  this.UscCampuses = locations;
    //});
    this.session = this.sqlDataService.getCurrentRevByReqID(20183, "555");

    if (this.session.academicTerm.code > 0) {                           // if existing request exists,

      var term: number = this.session.academicTerm.code;

      this.termRates = this.peDataService.getTermTuitionRates(term);    // get the term-related rates

      var FeeList = this.peDataService.getSpecialFeeList(term);         // get the term-related special fees 
      this.SpecialFeeList = this.formSpecialFeeArray(term, FeeList);

      this.RateSelected(this.session.rateType);

    }

    for (var i = 0; i < this.UscCampuses.length; ++i){
      this.CampusNameArray[i] = this.UscCampuses[i].campusName;
    }

    if (this.session.classLocations.length == 0) {
      this.AddClassLocation('');
    }

  }   // ngOnInit()


  public AddClassLocation(selectedCampus: string) {

    var campus = this.UscCampuses.filter(location => location.campusName === selectedCampus);

    var newLocation = {
      code: {
        campusCode: null,
        campusName: null
      },
      startDate: null,
      endDate: null
    }

    this.session.classLocations.push(newLocation);

    if (this.session.classLocations.length == 1) {    // if there is only 1 location, assign the start and end dates
                                                      // to be the first and last day of classes respectively.
      this.session.classLocations[0].startDate = this.session.firstDayOfClasses;
      this.session.classLocations[0].endDate = this.session.lastDayOfClasses;

    } else {    // require the start and end dates only when there are more than 1 location

      if ((this.session.classLocations[0].startDate == this.session.firstDayOfClasses) &&
          (this.session.classLocations[0].endDate == this.session.lastDayOfClasses)) {
        this.session.classLocations[0].startDate = null;
        this.session.classLocations[0].endDate = null;
      }

    }

  }   // AddClassLocation()


  public DeleteClassLocation(idx) {               // Delete a Class Location Entry
    this.session.classLocations.splice(idx, 1);
  }


  public AddSessionBreak(haveSessionBreaks) {

    if (haveSessionBreaks) {

      if (this.session.sessionBreaks.length < MAX_SESSION_BREAKS) {
        for (var i = 0; i < MAX_SESSION_BREAKS; ++i) {
          var newBreak = { startDate: null, endDate: null };
          this.session.sessionBreaks.push(newBreak);
        }
      }
    } else {
      this.session.sessionBreaks = [];
    }

  }     // AddSessionBreak()


  public DeleteSessionBreak(idx) {
    this.session.sessionBreaks.splice(idx, 1);
  }


  public AddSpecialFee(acadTerm: any) {

    var newFee = new SpecialFee();

    var term : string = acadTerm.value.code;
//    var term: string = this.session.academicTerm.code;   // this will work too!

    this.session.specialFees.push(newFee);

  } // AddSpecialFee()


  public DeleteThisFee(feeIndex) {

    if (this.session.specialFees[feeIndex].fee) {
      var feeCode = this.session.specialFees[feeIndex].fee.code;
      alert("Fee code: " + feeCode);
//    var i = usedFees.indexOf(feeCode);        // deletes the special fee from used fees array 
//    usedFees.splice(i, 1);                    // so that it can be re-used later.
    }

    this.session.specialFees.splice(feeIndex, 1);
    return;
  }   // deletes a Special Fee entry


  public filterSessionCodes(codes) {
    this.SessionCodes = this.peDataService.getSessionCodes()
      .filter((sCodes) => sCodes.sessionDesc.toLowerCase().indexOf(codes.toLowerCase()) !== -1);
  }


  public filterCampusLocation(campuses) {   // limit the list as the user types
    this.UscCampuses = this.peDataService.getCampusLocations()
      .filter((locations) => locations.campusName.toLowerCase().indexOf(campuses.toLowerCase()) !== -1);
  }


  private formSpecialFeeArray(acadTerm: number, feeList: any): any[] {

    var specFeeArray: any[] = [];
    var feeName: string = "";
    var feeCode: string = "";

    var term = acadTerm.toString();   // because it will error out without this

    var acadYear = term.slice(0, 4); // acadTerm.slice(0, 4);
    var termPrefix = term[term.length - 1]; // get the last digit (e.g. 20183 = '3')
    var termAbbrev = "";

    switch (termPrefix) {
      case '1':
        termAbbrev = "Sp" + acadYear;
        break;
      case '2':
        termAbbrev = "Su" + acadYear;
        break;
      case '3':
        termAbbrev = "Fa" + acadYear;
        break;
      default:
        break;
    }

    for (var i = 0; i < feeList.length; ++i) {
      feeName = this.CleanupFeeName(termAbbrev, feeList[i]);
      feeCode = feeName.substring(0, feeName.indexOf(' '))
      specFeeArray.push({ "code": feeCode, "name": feeName });
    }

    return specFeeArray;
  }


  private CleanupFeeName(termYear: string, feeDesc: string): string {

    var cleanStr: string = feeDesc.replace('- ' + termYear , '');

    cleanStr = cleanStr.replace(termYear, '');
    
    return cleanStr;
  }


  private ResetRateFields() {

    this.session.rateType.rateTypeCode = null;
    this.session.rateType.rateTypeDesc = null;
    this.session.rateType.rateTypeFlatRate = null;
    this.session.rateType.rateTypeUnitRate = null;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
    this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;

  }


  public TermSelected(selectedTerm: any) {

    var term: number = selectedTerm.code;
    this.termRates = this.peDataService.getTermTuitionRates(term);
    this.ResetRateFields();

    var FeeList = this.peDataService.getSpecialFeeList(term);
    this.SpecialFeeList = this.formSpecialFeeArray(term, FeeList);

  }
  
  //public filterSpecialFees(feeList) {
  //  this.SpecialFeeList = this.peDataService.getSpecialFeeList()
  //    .filter((sFees) => sFees.sessionDesc.toLowerCase().indexOf(feeList.toLowerCase()) !== -1);
  //}

  public FormSubmitted() {

    alert('Form Submitted');
    console.log(this.session);
    this.router.navigate(['/confirm-page']);

  } // FormSubmitted()


  public RateSelected(rateSelected: any) {

    switch (rateSelected.rateTypeCode) {

      case 'ZERO':
        this.session.rateType.flatRateUnitRange.graduate.minimum = 98;
        this.session.rateType.flatRateUnitRange.graduate.maximum = 99;
        this.session.rateType.flatRateUnitRange.undergraduate.minimum = 98;
        this.session.rateType.flatRateUnitRange.undergraduate.maximum = 99;
        this.disableUnitRange = true;
        break;

      case 'OTHFLAT':
        this.showFlatRateFields = true;
        this.showPerUnitBox = true;
        break;

      case 'OTHUNIT':
        this.showFlatRateFields = false;
        this.showPerUnitBox = true;

        this.session.rateType.flatRateUnitRange.graduate.minimum = null;
        this.session.rateType.flatRateUnitRange.graduate.maximum = null;
        this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
        this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;
        break;

      default:
        this.session.rateType.flatRateUnitRange.graduate.minimum = null;
        this.session.rateType.flatRateUnitRange.graduate.maximum = null;
        this.session.rateType.flatRateUnitRange.undergraduate.minimum = null;
        this.session.rateType.flatRateUnitRange.undergraduate.maximum = null;

        this.disableUnitRange = false;
        this.showFlatRateFields = false;
        this.showPerUnitBox = false;
        break;
    }
  }   // RateSelected()

}
