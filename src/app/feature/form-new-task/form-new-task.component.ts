import { Component } from '@angular/core';

@Component({
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.css']
})

export class FormNewTaskComponent {
  tasks: any[] = [];
  taskToAdd: any = " ";

  mostrarTarea(value:any){
    console.log(value);
    this.taskToAdd=value;    
  }

  agregarTarea(){
    this.tasks.push(this.taskToAdd);
    console.log(this.tasks);
  }

}
