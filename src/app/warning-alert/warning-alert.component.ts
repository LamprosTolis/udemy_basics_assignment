import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  warning:string = 'Warning Alert!';
  
  constructor() { }

  ngOnInit(): void {
    alert(this.warning);
  }

}
