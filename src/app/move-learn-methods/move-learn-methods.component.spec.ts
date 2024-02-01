import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveLearnMethodsComponent } from './move-learn-methods.component';

describe('MoveLearnMethodsComponent', () => {
  let component: MoveLearnMethodsComponent;
  let fixture: ComponentFixture<MoveLearnMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveLearnMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveLearnMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
