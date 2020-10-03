import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Template12Component } from './template12/template12.component';
import { Template11Component } from './template11/template11.component';
import { Template10Component } from './template10/template10.component';
import { Template9Component } from './template9/template9.component';
import { Template8Component } from './template8/template8.component';
import { Template7Component } from './template7/template7.component';
import { Template6Component } from './template6/template6.component';
import { Template5Component } from './template5/template5.component';
import { Template4Component } from './template4/template4.component';
import { Template3Component } from './template3/template3.component';
import { Template2Component } from './template2/template2.component';
import { Template1Component } from "./template1/template1.component";

const routes: Routes = [
  {path: 't12', component: Template12Component},
  {path: 't11', component: Template11Component},
  {path: 't10', component: Template10Component},
  {path: 't9', component: Template9Component},
  {path: 't8', component: Template8Component},
  {path: 't7', component: Template7Component},
  {path: 't6', component: Template6Component},
  {path: 't5', component: Template5Component},
  {path: 't4', component: Template4Component},
  {path: 't3', component: Template3Component},
  {path: 't2', component: Template2Component},
  {path: 't1', component: Template1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
