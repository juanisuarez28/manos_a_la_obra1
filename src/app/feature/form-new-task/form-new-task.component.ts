import { Component } from '@angular/core';
import{ Task } from 'src/app/models/ctask.model';

@Component({
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.css']
})

export class FormNewTaskComponent {
   task1= new Task('Ordenar', false);
   task2= new Task('Cenar', false);
   task3= new Task('Entrenar', false);

  tasks: Task[] = [
     this.task1,
     this.task2,
     this.task3
  ];
  
  taskToAdd= new Task('', false);

  mostrarTarea(value:string){
    console.log(value);
    this.taskToAdd.setTitle(value);    
  }

  agregarTarea(){
    this.tasks.push(this.taskToAdd);
    console.log(this.tasks);
  }

  deleteTask(value:string){
    let borrar=-1;  
    this.tasks.forEach((item, index) => {
        if (item.getTitle() == value){
          borrar=index;
        }
      })
      if(borrar>=0){
        this.tasks.splice(borrar,1);
      }
      console.log(this.tasks);
  }

}
