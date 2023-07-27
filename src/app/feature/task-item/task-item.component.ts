import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task='';

  constructor(public tasksService : TaskService){}

  deleteTask(){
    let s=this.task;
    this.tasksService.deleteTask(s);
  }

  share() {
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    }
  
    navigator.share({
        title: "Tarea: "+ this.task ,
        text: 'Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs'
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
  }
  copy(){
    navigator.clipboard.writeText(this.task);
  }
  
 
}
