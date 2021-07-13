import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionals-loopings',
  template: `
           <h2 [style.margin-left]="'5%'">Structural Directives</h2>
           <p  [style.margin-left]="'5%'">To add or remove elements to DOM</p>
           <ul [style.margin-left]="'10%'">
             <li>ngIf</li>
             <li>ngSwitch</li>
             <li>ngFor</li>
           </ul>
          <h2 [style.margin-left]="'5%'">ngIf</h2>
          <ul [style.margin-left]="'10%'">
            <li>Syntax : *ngif</li>
            <li>Eg : <h4 *ngIf="true"> *ngIf="true"</h4> ~ Here on false, content will be remove rather than hiding it</li>
            <li>" <h4 *ngIf="bool"> *ngIf="bool"</h4> " ~ property with false value removed the element from DOM</li>


            <li>Else Block </li>

            <li><h4 *ngIf="bool; else elseblock">My Name is Ajay</h4></li>
            <ng-template #elseblock><h4 >My name is made Private</h4></ng-template>

            <li> Syntax : </li>
            <li> *ngIf="bool; else elseblock"</li>
            <li>Wrap the else block within  ng-template #elseblock tag</li>

            <li><h3>Alternate instead of inline</h3></li>
            <div *ngIf="bool;then thenblock;else elseblock"> </div>
            <ng-template #thenblock><h5>My Name is Ajay</h5></ng-template>
            <ng-template #elseblock><h5>My Name is Thiyo</h5></ng-template>
            <li> Syntax : *ngIf="bool;then thenblock;else elseblock"</li>
            <li>ng-template #thenblock</li>
            <li>ng-template #elseblock</li>
          </ul>

           <h2 [style.margin-left]="'5%'">ngSwitch</h2>
           <ul [style.margin-left]="'10%'">
             <li>Syntax : [ngSwitch]="condition"      &nbsp;   *ngSwitchCase="value"  &nbsp  *ngSwitchDefault</li>
             <li [ngSwitch]="color" >
               <div *ngSwitchCase="'red'">Red</div>
               <div *ngSwitchCase="'teal'">teal</div>
               <div *ngSwitchCase="'blue'">blue</div>
               <div *ngSwitchDefault>No Color</div>

             </li>
           </ul>

           <h2 [style.margin-left]="'5%'">ngFor</h2>
           <ul [style.margin-left]="'10%'">
             <li > Syntax : *ngFor="let color of colors"</li>
             <li>Eg:</li>
             <li *ngFor="let color of colors" [style.color]="color">{{ color}}</li>
             <br>
             <li>Looping with index</li>
             <li>Syntax : *ngFor="let color of colors;index as i"</li>
             <div><h5 *ngFor="let color of colors;index as i">
              {{i}} . {{ color}}
             </h5></div>

             <li>Other Keywords available for ngFor</li>
             <li><h2>first</h2></li>
             <li>Syntax : *ngFor="let color of colors;first as f"</li>
             <div><h5 *ngFor="let color of colors;first as f"> {{f}} . {{ color}}</h5></div>

             <li><h2>last</h2></li>
             <li>Syntax : *ngFor="let color of colors;last as l"</li>
             <div><h5 *ngFor="let color of colors;last as l"> {{l}} . {{ color}}</h5></div>

             <li><h2>odd</h2></li>
             <li>Syntax : *ngFor="let color of colors;odd as o"</li>
             <div><h5 *ngFor="let color of colors;odd as o"> {{o}} . {{ color}}</h5></div>

             <li><h2>even</h2></li>
             <li>Syntax : *ngFor="let color of colors;even as e"</li>
             <div><h5 *ngFor="let color of colors;even as e"> {{e}} . {{ color}}</h5></div>
           </ul>


  `,
  styles: [`
  li{
    padding: 1%;
  }
  `]
})
export class ConditionalsLoopingsComponent implements OnInit {
  bool=false
  color="teal"
  colors=['Pink','Green','Yellow','Red','Blue']
  constructor() { }

  ngOnInit(): void {
  }

}
