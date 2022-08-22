import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileFeaturedComponent } from './tile-featured.component';

describe('TileFeaturedComponent', () => {
  let component: TileFeaturedComponent;
  let fixture: ComponentFixture<TileFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
