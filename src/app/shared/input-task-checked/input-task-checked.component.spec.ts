import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskCheckedComponent } from './input-task-checked.component';

describe('InputTaskCheckedComponent', () => {
  let component: InputTaskCheckedComponent;
  let fixture: ComponentFixture<InputTaskCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTaskCheckedComponent]
    });
    fixture = TestBed.createComponent(InputTaskCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
