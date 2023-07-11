import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Output() taskDelete= new EventEmitter<string>();
  @Input() task='';

  deleteTask(){
    this.taskDelete.emit(this.task);
  }
}
