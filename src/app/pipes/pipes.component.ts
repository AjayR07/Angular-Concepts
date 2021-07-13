import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [``]
})
export class PipesComponent implements OnInit {
  name="Ajay Thiyo"
  data={
    name:"ajay",
    character:"good boy"
  }
  date=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
