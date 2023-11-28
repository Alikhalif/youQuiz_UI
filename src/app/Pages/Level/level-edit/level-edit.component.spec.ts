import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEditComponent } from './level-edit.component';

describe('LevelEditComponent', () => {
  let component: LevelEditComponent;
  let fixture: ComponentFixture<LevelEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelEditComponent]
    });
    fixture = TestBed.createComponent(LevelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
