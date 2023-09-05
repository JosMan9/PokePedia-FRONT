import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAilmentComponent } from './move-ailment.component';

describe('MoveAilmentComponent', () => {
  let component: MoveAilmentComponent;
  let fixture: ComponentFixture<MoveAilmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveAilmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveAilmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
