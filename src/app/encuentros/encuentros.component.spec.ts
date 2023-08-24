import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentrosComponent } from './encuentros.component';

describe('EncuentrosComponent', () => {
  let component: EncuentrosComponent;
  let fixture: ComponentFixture<EncuentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
