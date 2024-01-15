import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcSumComponent } from './calc-sum/calc-sum.component';
import { SimpleFormCompComponent } from './simple-form-comp/simple-form-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalcSumComponent,
    SimpleFormCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //<----------- OMG, it will not work without it!
    // https://stackoverflow.com/questions/39559296/typescript-s-angular-framework-error-there-is-no-directive-with-exportas-set
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
