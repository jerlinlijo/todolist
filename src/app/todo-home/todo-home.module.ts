import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './todo-home.component';
import { MaterialModule } from '../shared/ui-libs/material.module';
import { ReusableListRenderComponent } from '../reusable-list-render/reusable-list-render.component';



@NgModule({
  declarations: [
    TodoHomeComponent,
    ReusableListRenderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[TodoHomeComponent],
})
export class TodoHomeModule { }
