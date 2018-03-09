import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
