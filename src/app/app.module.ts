import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { MTextComponent } from './m-input/m-text/m-text.component';
import { MNumberComponent } from './m-input/m-number/m-number.component';
import { MSelectComponent } from './m-input/m-select/m-select.component';
import { MDateComponent } from './m-input/m-date/m-date.component';
import { MTableComponent } from './m-input/m-table/m-table.component';
import { MBaseInputComponent } from './m-input/m-base-input/m-base-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    MTextComponent,
    MNumberComponent,
    MSelectComponent,
    MDateComponent,
    MTableComponent,
    MBaseInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
