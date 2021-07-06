import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <ul [style.margin-left]="'10%'">
      <li>All the above bindings are used to reflect the change in Class data on the UI</li>
      <li>But Sometimes Template to Class changes are also needed i.e Mouse events, Keyboard events. </li>
      <li>That is why we need Event Binding</li>

      <li>Eg: <button (click)="onCLick()">Greet</button></li>
      <li>To handle the click event for the above button, (click)="onCLick()" where onClick is a class method which greets the user in the console</li>

      <li>Eg: <button (click)="onGreet()">Greet</button></li> {{greet}}
      <li>To handle the click event for the above button, (click)="onGreet()" where onGreet is a class method which set a value to a class data and greets the user in the screen using interpolation</li>

      <li>Eg: <button (click)="onEvent($event)">Print Event Info</button>  {{greet}}</li>
      <li>To get raised event info, pass $event as parameter to the handler method</li>

      <li>Eg: <button (click)="greet='Hello'">Greet</button> {{greet}}</li>
      <li>Inline event handling,  (click)="greet='Hello'" </li>

      <h2>Template Reference Variable</h2>

      <li>When we need to pass the DOM element value to class , we use Template Reference Variable</li>
      <li>To the DOM Element add # followed by reference name and access it via refname.value</li>
      <input #inpid type="text">
      <button (click)="Log(inpid.value)" >Log me</button>
    </ul>
  `,
  styles: [`
  li{
    padding: 1%;
  }
  `]
})
export class EventBindingComponent implements OnInit {
  greet=""
  constructor() { }

  ngOnInit(): void {
  }

  onCLick() {
    console.log("Welcome to Angular Playground")
  }
  onGreet() {
    this.greet="Hey User! Welcome to Angular Playground...."
  }
  onEvent(event:any) {
    console.log(event)
    this.greet=event.type
  }

  Log(value: string) {
    console.log(value)
  }
}
