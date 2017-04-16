import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotCardComponent } from './shot-card.component';

describe('ShotCardComponent', () => {
  let component: ShotCardComponent;
  let fixture: ComponentFixture<ShotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
