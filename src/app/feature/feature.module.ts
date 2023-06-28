import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNewTaskComponent } from './form-new-task/form-new-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskItemCheckedComponent } from './task-item-checked/task-item-checked.component';



@NgModule({
  declarations: [
    FormNewTaskComponent,
    TaskItemComponent,
    TaskItemCheckedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormNewTaskComponent,
    TaskItemComponent,
    TaskItemCheckedComponent
  ]
})
export class FeatureModule { }
