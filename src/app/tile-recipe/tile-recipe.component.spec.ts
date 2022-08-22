import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRecipeComponent } from './tile-recipe.component';

describe('TileRecipeComponent', () => {
  let component: TileRecipeComponent;
  let fixture: ComponentFixture<TileRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
