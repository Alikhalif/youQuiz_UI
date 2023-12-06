import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignQuizComponent } from './assign-quiz.component';

describe('AssignQuizComponent', () => {
  let component: AssignQuizComponent;
  let fixture: ComponentFixture<AssignQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignQuizComponent]
    });
    fixture = TestBed.createComponent(AssignQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
