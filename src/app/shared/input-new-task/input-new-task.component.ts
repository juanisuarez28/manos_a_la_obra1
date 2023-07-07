import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-input-new-task',
  templateUrl: './input-new-task.component.html',
  styleUrls: ['./input-new-task.component.css']
})
export class InputNewTaskComponent {
  @Output() newTarea = new EventEmitter<string>();
  
  sendTarea(value:any){
   this.newTarea.emit(value);
  }
}
