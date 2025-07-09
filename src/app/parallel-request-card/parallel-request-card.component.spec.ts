import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelRequestCardComponent } from './parallel-request-card.component';

describe('ParallelRequestCardComponent', () => {
  let component: ParallelRequestCardComponent;
  let fixture: ComponentFixture<ParallelRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelRequestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
