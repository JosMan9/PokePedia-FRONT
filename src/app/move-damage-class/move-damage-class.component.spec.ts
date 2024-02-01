import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDamageClassComponent } from './move-damage-class.component';

describe('MoveDamageClassComponent', () => {
  let component: MoveDamageClassComponent;
  let fixture: ComponentFixture<MoveDamageClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveDamageClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveDamageClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
