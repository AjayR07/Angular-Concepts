import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponentComponent } from './default-component/default-component.component';
import { ClassComponentComponent } from './class-component/class-component.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';
import { InlineTemplateComponentComponent } from './inline-template-component/inline-template-component.component';
import { InlineStylesComponent } from './inline-styles/inline-styles.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponentComponent,
    ClassComponentComponent,
    AttributeComponentComponent,
    InlineTemplateComponentComponent,
    InlineStylesComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
