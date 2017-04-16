import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotComponent } from './shot.component';

describe('ShotComponent', () => {
  let component: ShotComponent;
  let fixture: ComponentFixture<ShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
