import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent</h2><br>

    <label>Parent Element</label><br>
    <input type="text" [(ngModel)]="name" ><br><br>
    {{msg}}
    <h2>Child</h2><br>

     <app-child (childEvent)="msg=$event" [parentData]="name" [name]="name"></app-child>
  `,
  styles: [``]
})
export class ParentComponent implements OnInit {
  name="Ajay"

  msg="";
  constructor() { }

  ngOnInit(): void {
  }

}
