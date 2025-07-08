import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPageComponent } from './heroes-page.component';

describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let fixture: ComponentFixture<HeroesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
