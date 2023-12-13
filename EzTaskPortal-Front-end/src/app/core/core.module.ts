import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { GuardsModule } from './guards/guards.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceModule,
    GuardsModule
  ]
})
export class CoreModule { }
