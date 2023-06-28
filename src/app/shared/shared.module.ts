import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddTaskComponent } from './button-add-task/button-add-task.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { InputNewTaskComponent } from './input-new-task/input-new-task.component';
import { InputTaskCheckedComponent } from './input-task-checked/input-task-checked.component';



@NgModule({
  declarations: [
    ButtonAddTaskComponent,
    ButtonDeleteComponent,
    InputTaskComponent,
    InputNewTaskComponent,
    InputTaskCheckedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonAddTaskComponent,
    ButtonDeleteComponent,
    InputTaskComponent,
    InputNewTaskComponent,
    InputTaskCheckedComponent,
  ]
})
export class SharedModule { }
