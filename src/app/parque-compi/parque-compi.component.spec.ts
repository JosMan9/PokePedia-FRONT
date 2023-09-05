import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueCompiComponent } from './parque-compi.component';

describe('ParqueCompiComponent', () => {
  let component: ParqueCompiComponent;
  let fixture: ComponentFixture<ParqueCompiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueCompiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueCompiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
