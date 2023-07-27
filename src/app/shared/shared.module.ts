import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddTaskComponent } from './button-add-task/button-add-task.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { InputNewTaskComponent } from './input-new-task/input-new-task.component';
import { InputTaskCheckedComponent } from './input-task-checked/input-task-checked.component';
import { ButtonShareComponent } from './button-share/button-share.component';
import { ButtonCopyComponent } from './button-copy/button-copy.component';



@NgModule({
  declarations: [
    ButtonAddTaskComponent,
    ButtonDeleteComponent,
    InputTaskComponent,
    InputNewTaskComponent,
    InputTaskCheckedComponent,
    ButtonShareComponent,
    ButtonCopyComponent
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
    ButtonShareComponent,
    ButtonCopyComponent
  ]
})
export class SharedModule { }
