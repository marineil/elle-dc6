import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsService } from './persons/persons.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
