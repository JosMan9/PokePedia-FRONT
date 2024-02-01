import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggGroupsComponent } from './egg-groups.component';

describe('EggGroupsComponent', () => {
  let component: EggGroupsComponent;
  let fixture: ComponentFixture<EggGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EggGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
