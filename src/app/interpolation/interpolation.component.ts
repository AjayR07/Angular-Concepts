import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `

                    <ul style="margin-left: 7%" >
                      <li> With this, we can bind data from class to HTML</li>
                      <li>Instead of Static Data, we can declare & initalize a data inside a class and bind it</li>
                      <li>Eg :  Welcome <b>{{ name }}!</b> </li>

                      <li>Use Double Curly brace for making calculations</li>
                      <li>Eg : 2+2 = {{2+2}}</li>

                      <li>String Concatenation is Possible with Double Curly braces</li>
                      <li>Eg :  Welcome <b>{{"back "+ name }} !</b> </li>

                      <li>With Interpolation , Inside Double curly braces we can perform certain built in JS methods</li>
                      <li>Eg : The name '{{name}}' has {{name.length}} characters</li>

                      <li>We can use custom methods defined inside the class within the Double Curly braces </li>
                      <li>Eg : {{greet()}}</li>

                      <li> Assignments inside Double curly braces is not possible ( gives parse errors )</li>
                      <li>Global JavaScript Variables like document, window, etc... are in accessible</li>
                      <li>To overcome the above one, we can implement that inside the class and bind it</li>
                      <li>Eg : Current URL is {{url}}</li>
                    </ul>

                    <br>
                    <img src="../../assets/img/interpolation.png" width="800">

`,
  styles: [
    `li
    {
      padding:1%
    }`
  ]
})
export class InterpolationComponent implements OnInit {
  name:String="Ajay"
  url:String = window.location.href
  constructor() { }

  ngOnInit(): void {
  }
  greet():String {
    return "Happy to see you "+name +'!'
  }
}
