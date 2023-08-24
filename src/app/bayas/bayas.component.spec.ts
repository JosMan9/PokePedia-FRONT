import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayasComponent } from './bayas.component';

describe('BayasComponent', () => {
  let component: BayasComponent;
  let fixture: ComponentFixture<BayasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
