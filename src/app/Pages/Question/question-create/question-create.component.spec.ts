import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreateComponent } from './question-create.component';

describe('QuestionCreateComponent', () => {
  let component: QuestionCreateComponent;
  let fixture: ComponentFixture<QuestionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCreateComponent]
    });
    fixture = TestBed.createComponent(QuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
