import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailPageComponent } from './hero-detail-page.component';

describe('HeroDetailPageComponent', () => {
  let component: HeroDetailPageComponent;
  let fixture: ComponentFixture<HeroDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
