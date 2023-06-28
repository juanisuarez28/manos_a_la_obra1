import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemCheckedComponent } from './task-item-checked.component';

describe('TaskItemCheckedComponent', () => {
  let component: TaskItemCheckedComponent;
  let fixture: ComponentFixture<TaskItemCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemCheckedComponent]
    });
    fixture = TestBed.createComponent(TaskItemCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
