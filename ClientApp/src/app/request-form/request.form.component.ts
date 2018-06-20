import { Component, OnInit } from '@angular/core';
import { PEDataService } from '../shared/services/pedata.service';
import { Observable, Subscriber } from 'rxjs/RX';

@Component({
  selector: 'request-form',
  templateUrl: './request.form.component.html',
  styleUrls: ['./request.form.component.css']
})

export class RequestFormComponent implements OnInit{

  public MAXUNITS: number = 100;
  public UscCampuses: any[];
  public SpecialFeeList: any[];
  public termRates: any[];
  
  public rangeStart: Date = new Date();
  public rangeEnd: Date = new Date();

  private TuitionRates: any[];

  constructor(private peDataService: PEDataService) {
    var newDate: Date = new Date(2008, 9, 21);
  }

  ngOnInit() {

    //this.peDataService.getCampusLocations().subscribe(locations => {
    //  this.UscCampuses = locations;
    //});

    this.UscCampuses = this.peDataService.getCampusLocations();
    this.SpecialFeeList = this.peDataService.getSpecialFeeList();
    this.TuitionRates = this.peDataService.getTuitionRates();
    this.termRates = this.TuitionRates[0].termRates;

  }

    pageTitle: string = "Emily";
    
  public semesters = [
    { semCode: 20182, semName: "2018 Summer"},
    { semCode: 20183, semName: "2018 Fall"},
    { semCode: 20191, semName: "2019 Spring"},
    { semCode: 20192, semName: "2019 Summer"}
  ];

  public session = {

    academicTerm: "",
    ratePerUnitAmount: "",
    sessionBreaks: [
      //{
      //  startDate: "2018-05-20T15:20:52.657",
      //  endDate: "2018-05-25T15:20:52.657"
      //}
    ],

    specialFees: [
      //{
      //  feeCode: "M22520001",
      //  assessedTo: "U",
      //  amount: 777
      //}
    ],

    classLocations: [
//      {
        //campusCode: "ATT",
        //startDate: "2018-05-20T15:20:52.657",
        //endDate: "2018-05-25T15:20:52.657"
//      }
    ]

  } // session
  
  public AddClassLocation() {

    var newLocation = {
      campusCode: "",
      startDate: "",
      endDate: ""
    }

    this.session.classLocations.push(newLocation);

  } // AddClassLocation()
  
  public AddSessionBreak(){
    var newBreak = { startDate: "", endDate: "" };
    this.session.sessionBreaks.push(newBreak)
    return;
  } // AddSessionBreak()

  public AddSpecialFee(){

    var newFee = {
      feeCode: "",
      assessedTo: "",
      amount: 0
    };

    this.session.specialFees.push(newFee);
    return;
  } // AddSpecialFee()

  public DeleteThisFee(feeIndex, feeCode) {

    this.session.specialFees.splice(feeIndex, 1);
//    var i = usedFees.indexOf(feeCode);        // deletes the special fee from used fees array 
//    usedFees.splice(i, 1);                    // so that it can be re-used later.
    return;
  }   // deletes a Special Fee entry
  
}
