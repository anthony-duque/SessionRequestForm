import { PEDataService } from '../services/pedata.service';

import { Request, Revision, RevBreak, RevFee } from '../models/Revisions.Model';

export class CodeNamePair {

  public code: string;
  public name: string;

  constructor(Code ?: any, Name ?: string){

    if (!!Code && !!Name) {

      this.code = Code.toString();
      this.name = Name;

    } else {

      this.code = null;
      this.name = null;
    } // if(!!code)
  } // constructor()
};  // CodeNamePair{}


export class DateRange {

  startDate: Date;
  endDate: Date;

  constructor(startDate?: Date, endDate?: Date) {

    if (!!startDate && !!endDate) {

      this.startDate = startDate;
      this.endDate = endDate;

    } else {

      this.startDate = null;
      this.endDate = null;

    } // if(!!start..)
  } // constructor()
}   // DateRange{}


export class ClassLoc {

  campus: CodeNamePair;

  startDate: Date;
  endDate: Date;

  constructor() {
   
    this.campus = new CodeNamePair();
    this.startDate = null;
    this.endDate = null;

  }   // constructor()
};  // classLoc{}


export class SpecialFee {

  fee: CodeNamePair;

  amount: number;

  gradeLevel: CodeNamePair;

  enrollType: CodeNamePair;

  constructor(revFee?: RevFee) {

    if (!!revFee) {

      this.fee = new CodeNamePair(revFee.code, GetFeeName(revFee.code));
      this.amount = null;
      this.gradeLevel = new CodeNamePair();
      this.enrollType = new CodeNamePair();

    } else {

      this.fee = new CodeNamePair();
      this.amount = null;
      this.gradeLevel = new CodeNamePair();
      this.enrollType = new CodeNamePair();

    } // if(!!revFee)

  }   // constructor()

};  // SpecialFee{}


class sessDates {

  firstDayOfClass:  Date;
  lastDayOfClass:   Date;
  firstDayOfFinals: Date;
  lastDayOfFinals:  Date;
  sessionBreaks:    DateRange[];

  constructor(revision?: Revision) {

    this.sessionBreaks = [];

    if (!!revision) {

      this.firstDayOfClass = revision.firstDayOfClass;
      this.lastDayOfClass = revision.lastDayOfClass;
      this.firstDayOfFinals = revision.firstDayOfFinals;
      this.lastDayOfFinals = revision.lastDayOfFinals;

      var eachBreak: DateRange = null;

      for (var i = 0; i < revision.breaks.length; ++i) {

        eachBreak = new DateRange(revision.breaks[i].start, revision.breaks[i].end);
        this.sessionBreaks.push(eachBreak);

      }

    } else {

      this.firstDayOfClass = null;
      this.lastDayOfClass = null;
      this.firstDayOfFinals = null;
      this.lastDayOfFinals = null;

    }   // if (!!revision)

  } // constructor()

};  // sessDates()


class UnitRange {

  minimum: number;
  maximum: number;

  constructor() {
    this.minimum = null;
    this.maximum = null;
  } // constructor()

}   // UnitRange{}


class FlatRateUnitRange {

  graduate: UnitRange;
  undergraduate: UnitRange

  constructor() {
    this.graduate = new UnitRange();
    this.undergraduate = new UnitRange();
  }
};  // FlatRateUnitRange{}


class RateType {

  code:         string;
  description:  string;
  unitRate:     number;
  flatRate:     number;
  flatRateUnitRange: FlatRateUnitRange;

  constructor() {

    this.code = null;
    this.description = null;
    this.unitRate = null;
    this.flatRate = null;
    this.flatRateUnitRange = new FlatRateUnitRange();

  } // constructor()

}   // rateType{}


export class Session {

  academicTerm: CodeNamePair;

  session: CodeNamePair;

  dates: sessDates;

  classLocations: ClassLoc[];

  rateType: RateType;

  specialFees: SpecialFee[]

  comments: string;

  constructor(request?: Request) {

    this.classLocations = [];
    this.specialFees = [];
    this.rateType = new RateType();

    if (!!request) {

      this.academicTerm = new CodeNamePair(request.term, GetTermName(request.term));
      this.session = new CodeNamePair(request.code);

      if (request.revisions.length > 0) {

        this.dates = new sessDates(latestRev);                            // Form the Session Dates section

        var newestRev: number = request.revisions.length - 1;             // assumes that the last record is the latest revision
        var latestRev: Revision = request.revisions[newestRev];

        var eachFee: SpecialFee;

        for (var i = 0; i < latestRev.specialFees.length; ++i) {
          eachFee = new SpecialFee()
          this.specialFees.push();
        }

      } // if (request...

    } else {

      this.academicTerm = new CodeNamePair();
      this.session = new CodeNamePair();
      this.dates = new sessDates();

    }   // if(!!request)

  }   // constructor()

}; // session


function GetFeeName(feeCode: string): string {

  var feeName: string = '';

  return feeName;

}   // GetFeeName()


function GetTermName(term: string): string {

  var termName: string = '';
  var acadYear: string = term.substr(0, 4);
  var semCode: string = term.charAt(term.length - 1);

  switch (semCode) {

    case '1':
      termName = acadYear + " Spring";
      break;

    case '2':
      termName = acadYear + " Summer";
      break;

    case '3':
      termName = acadYear + " Fall";
      break;

    default:
      break;

  }   // switch(semCode)

  return termName;
};   // GetTermName()
