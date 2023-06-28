import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewTaskComponent } from './input-new-task.component';

describe('InputNewTaskComponent', () => {
  let component: InputNewTaskComponent;
  let fixture: ComponentFixture<InputNewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNewTaskComponent]
    });
    fixture = TestBed.createComponent(InputNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
