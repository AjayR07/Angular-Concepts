import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
                <h2 style="margin-left: 5%">Attribute vs Property</h2>
                <ul style="margin-left: 10%">
                  <li>Input Field Attribute Value (.getAttribute()) remains constant even if we alter it on the UI.</li>
                  <li>But Property ('.value') get changed on alteration</li>
                  <li>This conforms Attribute and Property aren't same.</li>
                  <li>Attribute is defined by <b>HTML</b></li>
                  <li>Property is defined by <b>Document Object Model</b></li>
                  <li>Attributes initialize DOM properties and then they are done</li>
                  <li>Attribute values cannot change once they are initialized </li>
                  <li>Property values however can change</li>
                  <li><strong>Therefore, Value Attribute remains same,while Value Property get changed </strong></li>
                  <li>So, In Angular we binding the value to DOM Property</li>
                </ul>


                <h2 style="margin-left: 5%">Example</h2>
                <ul style="margin-left: 10%">
                  <li>Bind a class data to HTML element like input as <b>[id]="class_data"</b></li>
                  <li><input [id]="input1_id" value="Inspect me">  ~ input [id]="input1_id"</li>
                  <li>We can also achieve the same using Interpolation</li>
                  <li><input id="{{input2_id}}" value="Inspect me">  ~ input id="input2_id" with double curly braces</li>
                  <li>But Interpolation works only for Strings, Not for boolean kind of values</li>
                  <li><input disabled value="Inspect me"> ~ input disabled</li>
                  <li><input disabled="false" value="Inspect me"> ~ input disabled="false"</li>
                  <li><input disabled="{{false}}" value="Inspect me">  ~ input disabled="{{false}}"</li>
                  <li>That's why we have Property Binding</li>
                  <li><input [disabled]="false" value="Inspect me">  ~ input [disabled]="false"</li>
                  <li><input [disabled]="isDis" value="Inspect me">  ~ input [disabled]="isDis" ( Class Data )</li>
                  <li>Alternate Syntax</li>
                  <li><input bind-disabled="isDis" value="Inspect me">  ~ input bind-disabled="isDis" ( Class Data )</li>
                </ul>
  `,
  styles: [
    `li{
      padding: 1%;
    }`
  ]
})
export class PropertyBindingComponent implements OnInit {
  input1_id="property_binding"
  input2_id="Interpolation"
  isDis=false
  constructor() { }

  ngOnInit(): void {
  }

}
