import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';
import { MatTableModule } from '@angular/material/table';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      imports:[MatTableModule]
    });
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
