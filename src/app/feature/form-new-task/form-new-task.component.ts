import { Component } from '@angular/core';
import{ Task } from 'src/app/models/ctask.model';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.css']
})

export class FormNewTaskComponent { 
  taskToAdd= new Task('', false);

  constructor(public tasksService: TaskService){ }

  mostrarTarea(value:string){
    console.log(value);
    this.taskToAdd.setTitle(value);    
  }

  agregarTarea(){
    this.tasksService.createTask(this.taskToAdd);
    console.log(this.tasksService.getTasks());
  }

}
