import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NotFoundPageComponent } from './shared/components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notes', loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule) },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
