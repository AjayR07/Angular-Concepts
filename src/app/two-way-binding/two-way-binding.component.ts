import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
            <ul [style.margin-left]="'10%'">
              <li>To Sync the data between the class and the view</li>
              <li>Data Binding + Event Binding</li>
              <li>Data Binding ~ Whenever there is a change in class variable, reflect it on UI</li>
              <li>Event Binding ~ Whenever there is a change in Template element value, reflect it on class variable</li>
              <li> Eg : Name : <input type="text" [(ngModel)]="name" ></li>
              <li>Hi {{ name}}</li>
              <li>This is achieved by Two Way Binding</li>
              <li>Syntax : [(ngModel)]="name"</li>
            </ul>
  `,
  styles: [`
  li{
    padding: 1%;
  }
  `]
})
export class TwoWayBindingComponent implements OnInit {
  public name=""
  constructor() { }

  ngOnInit(): void {
  }

}
