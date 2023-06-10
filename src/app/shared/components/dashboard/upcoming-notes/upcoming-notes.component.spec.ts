import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingNotesComponent } from './upcoming-notes.component';

describe('UpcomingNotesComponent', () => {
  let component: UpcomingNotesComponent;
  let fixture: ComponentFixture<UpcomingNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
