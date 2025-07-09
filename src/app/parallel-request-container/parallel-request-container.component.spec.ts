import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelRequestContainerComponent } from './parallel-request-container.component';

describe('ParallelRequestContainerComponent', () => {
  let component: ParallelRequestContainerComponent;
  let fixture: ComponentFixture<ParallelRequestContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelRequestContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelRequestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
