import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutSideDirective } from './directives/click-out-side.directive';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../modules/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/layout/language-selector/language-selector.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LanguageSelectorComponent,
    ClickOutSideDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [
    LayoutComponent,
    LanguageSelectorComponent,
    ClickOutSideDirective
  ]
})
export class SharedModule { }
