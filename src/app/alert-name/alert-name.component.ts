import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-name',
  templateUrl: './alert-name.component.html',
  styleUrls: ['./alert-name.component.scss']
})
export class AlertNameComponent implements OnInit {

  constructor() {
   }
  getVal(name:string){
      alert( "Hola " + name);
    }
  ngOnInit(): void {
    
  }

}
