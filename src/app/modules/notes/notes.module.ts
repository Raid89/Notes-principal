import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesItemComponent } from './pages/notes-item/notes-item.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NewNoteFormComponent } from './pages/new-note-form/new-note-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NotesGalleryComponent } from './pages/notes-gallery/notes-gallery.component';


@NgModule({
  declarations: [
    NotesItemComponent,
    NotesListComponent,
    NewNoteFormComponent,
    NotesGalleryComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
  ]
})
export class NotesModule { }
