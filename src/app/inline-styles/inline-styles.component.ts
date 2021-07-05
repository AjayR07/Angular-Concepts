import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-styles',
  templateUrl: './inline-styles.component.html',
  styles: [`
  h3{
    color:blue
  }`]
})
export class InlineStylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
