import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddTaskComponent } from './button-add-task.component';

describe('ButtonAddTaskComponent', () => {
  let component: ButtonAddTaskComponent;
  let fixture: ComponentFixture<ButtonAddTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddTaskComponent]
    });
    fixture = TestBed.createComponent(ButtonAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
