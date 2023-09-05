import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAreasComponent } from './location-areas.component';

describe('LocationAreasComponent', () => {
  let component: LocationAreasComponent;
  let fixture: ComponentFixture<LocationAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
