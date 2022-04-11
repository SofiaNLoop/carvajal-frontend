import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/log-history/history.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {

  listHistory: any = [];

  constructor( private hisServ: HistoryService ) { }

  ngOnInit(): void {
    this.getHistory()
  }

  getHistory(){
    this.hisServ.getHistory()
    .subscribe( data => {
      this.listHistory = data;
      console.log(this.listHistory);
    } )
  }

}
