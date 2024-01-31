import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleStyleComponent } from './battle-style.component';

describe('BattleStyleComponent', () => {
  let component: BattleStyleComponent;
  let fixture: ComponentFixture<BattleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
