import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsSectionComponent } from './seats-section.component';

describe('SeatsSectionComponent', () => {
  let component: SeatsSectionComponent;
  let fixture: ComponentFixture<SeatsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
