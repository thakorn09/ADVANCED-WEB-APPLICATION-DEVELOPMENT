import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgforComponent } from './components/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
