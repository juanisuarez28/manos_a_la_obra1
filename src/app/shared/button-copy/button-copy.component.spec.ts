import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCopyComponent } from './button-copy.component';

describe('ButtonCopyComponent', () => {
  let component: ButtonCopyComponent;
  let fixture: ComponentFixture<ButtonCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCopyComponent]
    });
    fixture = TestBed.createComponent(ButtonCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
