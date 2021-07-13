import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  Hey {{parentData}} !
  <br>{{name}}
  <p>Let's learn about Component Interaction i.e sending and receiving data btw parent and child components and vice versa.</p>
  <button (click)="fireMe()">Okay</button>
  <p>

  </p>
  `,
  styles: [``]
})
export class ChildComponent implements OnInit {

  @Input() public parentData=""

  @Input("name") public name:any

  @Output() public childEvent=new EventEmitter();
  fireMe(){
    this.childEvent.emit("I'm happy to see your Interest.")
  };
  constructor() { }

  ngOnInit(): void {
  }

}
