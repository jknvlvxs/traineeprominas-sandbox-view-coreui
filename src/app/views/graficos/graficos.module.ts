import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { GraficosComponent } from './graficos.component';
import { GraficosRoutingModule } from './graficos-routing.module';

@NgModule({
  imports: [
    GraficosRoutingModule,
    ChartsModule,
    CommonModule,
  ],
  declarations: [ GraficosComponent ]
})
export class GraficosModule { }
