import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignquizListComponent } from './assignquiz-list.component';

describe('AssignquizListComponent', () => {
  let component: AssignquizListComponent;
  let fixture: ComponentFixture<AssignquizListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignquizListComponent]
    });
    fixture = TestBed.createComponent(AssignquizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
