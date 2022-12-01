import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import material modules
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HighlighterPipe } from './highlighter.pipe';

//  My Components
import { MGroupComponent } from './m-input/m-group/m-group.component';
import { MCheckboxComponent } from './m-input/m-checkbox/m-checkbox.component';
import { MButtonComponent } from './m-input/m-button/m-button.component';
import { MGroupCheckboxComponent } from './m-input/m-group-checkbox/m-group-checkbox.component';
import { MGroupRadioComponent } from './m-input/m-group-radio/m-group-radio.component';
import { MDateRangeComponent } from './m-input/m-date-range/m-date-range.component';
import { MFilesComponent } from './m-input/m-files/m-files.component';
import { MTextComponent } from './m-input/m-text/m-text.component';
import { MNumberComponent } from './m-input/m-number/m-number.component';
import { MSelectComponent } from './m-input/m-select/m-select.component';
import { MDateComponent } from './m-input/m-date/m-date.component';
import { MTableComponent } from './m-input/m-table/m-table.component';
import { MBaseInputComponent } from './m-input/m-base-input/m-base-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    HighlighterPipe,

    // my components
    MTextComponent,
    MNumberComponent,
    MSelectComponent,
    MDateComponent,
    MTableComponent,
    MBaseInputComponent,
    MGroupComponent,
    MCheckboxComponent,
    MButtonComponent,
    MGroupCheckboxComponent,
    MGroupRadioComponent,
    MDateRangeComponent,
    MFilesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material modules
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
