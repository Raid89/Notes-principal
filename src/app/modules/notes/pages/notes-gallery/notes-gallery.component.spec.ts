import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGalleryComponent } from './notes-gallery.component';

describe('NotesGalleryComponent', () => {
  let component: NotesGalleryComponent;
  let fixture: ComponentFixture<NotesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
