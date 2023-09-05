import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionGroupsComponent } from './version-groups.component';

describe('VersionGroupsComponent', () => {
  let component: VersionGroupsComponent;
  let fixture: ComponentFixture<VersionGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
