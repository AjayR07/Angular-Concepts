import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-component',
  template: '<h3>Inline Template</h3> ~ Using \'template\', wherein we can write inline html in the decorator itself.'+
  `<br>~ Incase of writing
    multiple lines of inline code,
     use \`\` instead of single codes`,
  styleUrls: ['./inline-template-component.component.css']
})
export class InlineTemplateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
