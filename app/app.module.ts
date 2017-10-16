import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ConvertoSpaces } from './shared/convert-to-spaces';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikeListComponent } from './bike-list/bike-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    ConvertoSpaces
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
