import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/ctask.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] =[];
   
  constructor() {
    const task1= new Task('Ordenar', false);
    const task2= new Task('Cenar', false);
    const task3= new Task('Entrenar', false);
  
    this.tasks= [
        task1,
        task2,
        task3
    ];
  }

  public getTasks() {
    return this.tasks;
  }

  public createTask(taskToAdd: Task) {
    this.tasks.push(taskToAdd);
  }

  public deleteTask(value: string) {
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
