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

// import material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HighlighterPipe } from './highlighter.pipe';
import { MGroupComponent } from './m-input/m-group/m-group.component';
import { MCheckboxComponent } from './m-input/m-checkbox/m-checkbox.component';
import { MRadioComponent } from './m-input/m-radio/m-radio.component';
import { MButtonComponent } from './m-input/m-button/m-button.component';
import { MGroupCheckboxComponent } from './m-input/m-group-checkbox/m-group-checkbox.component';
import { MGroupRadioComponent } from './m-input/m-group-radio/m-group-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    MTextComponent,
    MNumberComponent,
    MSelectComponent,
    MDateComponent,
    MTableComponent,
    MBaseInputComponent,
    HighlighterPipe,
    MGroupComponent,
    MCheckboxComponent,
    MRadioComponent,
    MButtonComponent,
    MGroupCheckboxComponent,
    MGroupRadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
