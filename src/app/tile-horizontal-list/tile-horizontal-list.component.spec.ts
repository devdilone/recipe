import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileHorizontalListComponent } from './tile-horizontal-list.component';

describe('TileHorizontalListComponent', () => {
  let component: TileHorizontalListComponent;
  let fixture: ComponentFixture<TileHorizontalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileHorizontalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
