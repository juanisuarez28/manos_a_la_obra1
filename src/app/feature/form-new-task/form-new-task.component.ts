import { Component } from '@angular/core';

@Component({
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.css']
})

export class FormNewTaskComponent {
  tasks: any[] = [
    {nombre:'Desayunar',estado:false},
    {nombre:'Manos a la obra 30',estado:false},
    {nombre:'Cenar',estado:false}
  ];
  taskToAdd: any = {};

  mostrarTarea(value:any){
    console.log(value);
    this.taskToAdd={nombre:value,estado:false};    
  }

  agregarTarea(){
    this.tasks.push(this.taskToAdd);
    console.log(this.tasks);
  }

  deleteTask(value:any){
    let borrar=-1;  
    this.tasks.forEach((item, index) => {
        if (item.nombre == value){
          borrar=index;
        }
      })
      if(borrar>=0){
        this.tasks.splice(borrar,1);
      }
      console.log(this.tasks);
  }

}
