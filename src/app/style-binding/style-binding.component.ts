import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
            <ul [style.margin-left]="'10%'">
              <li>For Inline Styling, Syntax:</li>
              <li> [style.margin-left]="'10%'"</li>
              <li  [style.color]="classProp">  [style.color]="classProp" </li>

              <h3>Applying Styles on Conditions</h3>
              <li [style.color]="hasError?'red':'green'">Eg :  [style.color]="hasError?'red':'green'"</li>

              <h3>Applying multiple  Styles using ngStyles Directive ( Use Only Camel Cases)</h3>
              <li [ngStyle]="titleStyle">[ngStyle]="titleStyle" where titleStyle is a class object</li>

            </ul>
  `,
  styles: [`
    li{
      padding: 1%;
    }
  `]
})
export class StyleBindingComponent implements OnInit {
hasError =true
  classProp="orange"
  titleStyle={
    fontStyle:"italic",
    color:"teal"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
