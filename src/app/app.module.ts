import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Template10Component } from './template10/template10.component';
import { Template3Component } from "./template3/template3.component";
import { Template9Component } from './template9/template9.component';
import { Template8Component } from './template8/template8.component';
import { Template7Component } from './template7/template7.component';
import { Template6Component } from './template6/template6.component';
import { Template5Component } from './template5/template5.component';
import { Template4Component } from './template4/template4.component';
import { Template2Component } from './template2/template2.component';
import { Template1Component } from './template1/template1.component';
import { Template12Component } from './template12/template12.component';
import { Template11Component } from './template11/template11.component';

@NgModule({
  declarations: [
    AppComponent,
    Template10Component,
    Template3Component,
    Template9Component,
    Template8Component,
    Template7Component,
    Template6Component,
    Template5Component,
    Template4Component,
    Template2Component,
    Template1Component,
    Template12Component,
    Template11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
