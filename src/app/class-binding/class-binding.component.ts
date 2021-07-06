import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template:`
                <ul style="margin-left: 10%">
                  <h3 class="text-success">AJ's Angular Playground</h3>
                  <li>Added Class normally , class="text-success" </li>

                  <h3 [class]="fail">AJ's Angular Playground</h3>
                  <li>Added Class using class binding , [class]="fail" </li>
                </ul>

                <h2 style="margin-left: 5%">Another Syntax for conditionally apply class </h2>
                  <ul style="margin-left: 10%">
                    <li> [class.text-failure]="hasError" where hasError is a class variable (boolean), <br>based on its value (true/false), it applies the class text-failure</li>
                    <h3 [class.text-failure]="hasError">AJ's Angular Playground </h3>  ~   [class.text-failure]="hasError"
                    <h3 [class.text-failure]="!hasError">AJ's Angular Playground</h3>  ~   [class.text-failure]="!hasError"
                  </ul>

                <h2 style="margin-left: 5%">Syntax for conditionally apply multiple classes </h2>
                  <ul style="margin-left: 10%">
                    <li> Angular provides ng class directive </li>
                    <h3 [ngClass]="messageClass">AJ's Angular Playground </h3>  ~   [ngClass]="messageClass"  where messageClass is object with classes as key and booleans as values

                  </ul>
  `,
  styles: [`
              .text-success
              {
                color:green
              }
              .text-failure
              {
                color:red
              }
              .text-special
              {
                font-style:italic
              }
              li{
                padding: 1%;
              }
  `]
})
export class ClassBindingComponent implements OnInit {
  fail ="text-failure"
  hasError=true
  isSpecial=false

  messageClass={
    "text-success":!this.hasError,
    "text-failure":this.hasError,
    "text-special":this.isSpecial,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
