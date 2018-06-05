import { Component, Output, OnInit } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RequestHistoryComponent } from '../request-history/request.history.component';
import { SQLDataService } from '../shared/services/sqldata.service';

@Component({
  selector: 'diff-page',
//  templateUrl: './diff.page.component.html',
  templateUrl: './diffpage.html',
  styleUrls: ['./diff.page.component.css']
})

export class DiffPageComponent implements OnInit{

  private reqID: string = "20183888";
  private revID: number = 4;
  public currSess : any;

  constructor(private sqlDataService: SQLDataService) {
  }

  ngOnInit() {
    this.currSess = this.sqlDataService.getLatestRevisionByRequestID(this.reqID);
  }

  @Output() pageTitle: string = "Diff Page";

  public hideShowPrev: string = "Hide Previous";
  public showSection: boolean = true;

  public HideShowPrevVersion() {

    this.showPrevious = !(this.showPrevious);
    if (this.showPrevious) {
      this.hideShowPrev = "Hide Previous";
    } else {
      this.hideShowPrev = "Show Previous";
    }
    return;
  }   // HideShowPrevVersion()

  public prevSess = {
    sessionBreaks: [],
    specialFees: [
      {
        feeId: 28,
        requestId: 10421,
        feeCode: "T22520001",
        assessedTo: "U",
        amount: 777
      },
      {
        feeId: 29,
        requestId: 10421,
        feeCode: "D225",
        assessedTo: "G",
        amount: 888
      },
      {
        feeId: 30,
        requestId: 10421,
        feeCode: "C19920063",
        assessedTo: "B",
        amount: 666
      }
    ],
    requestId: 10421,
    lastUpdateTimeStamp: "2018-04-18T15:20:52.657",
    academicTerm: "20183",
    sessionCode: "888",
    owningSchool: "Bursar Office",
    owningDepartment: "Department of Testing",
    userContact: "BUR Admin Tester",
    userEmail: "anthondd@usc.edu",
    userPhone: "+1 213 111 1111",
    firstDayOfClass: "2018-03-25T00:00:00",
    lastDayOfClass: "2018-05-05T00:00:00",
    lastDayForAddDrop: "2018-04-02T00:00:00",
    lastDayForWithdrawal: "2018-04-27T00:00:00",
    firstDayOfFinals: "2018-05-20T00:00:00",
    lastDayOfFinals: "2018-05-26T00:00:00",
    firstDayForFinalGrading: "2018-05-20T00:00:00",
    lastDayForFinalGrading: "2018-06-01T00:00:00",
    lastDayForEnrollmentOptionChange: "2018-04-10T00:00:00",
    classLocations: [
      {
        location: "Catalina Island",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      },
      {
        location: "Health Science Campus",
        startDate: "2018-04-01T00:00:00",
        endDate: "2018-04-10T00:00:00"
      }
    ],
    rateType: "BKNPT2",
    ratePerUnitAmount: "",
    flatRateAmount: 33695,
    flatRateUnitsMin: 1,
    flatRateUnitsMax: 2,
    gradFlatRateUnitsMin: 1,
    gradFlatRateUnitsMax: 2,
    requestDate: "2018-04-18T15:20:52.643",
    comments: "Catalina\nM22520001\nM225\nM19920063"
  };

  showPrevious: boolean = true;   // Hides or shows the previous version of the request

  public HiLiteDiff(newVal, oldVal?) {

    var cssClass = [];

    if (oldVal) {

      switch (true) {

        case ((newVal > '') && (oldVal == '')):
        case ((newVal.length > 0) && (oldVal.length == 0)):   // New Value
          cssClass = ['added'];
          break;

        case ((newVal == '') && (oldVal > '')):
        case ((newVal.length == 0) && (oldVal.length > 0)):   // Deleted Value
          cssClass = ['deleted'];
          break;

        case (JSON.stringify(newVal) != JSON.stringify(oldVal)): // Changed Value
          cssClass = ['changed'];
          break;

        default:                                              // No change
          break;
      }
    }
    return cssClass;
  } // HiLiteDiff()

  public DisplayClickedRevision(data) {

    console.log('received:', data);
  }

}
