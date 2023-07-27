import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/ctask.model';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  public tasks :Task[]=[];
  constructor(public tasksService: TaskService){}

  ngOnInit(){
    this.tasks=this.tasksService.getTasks();
  }

}
