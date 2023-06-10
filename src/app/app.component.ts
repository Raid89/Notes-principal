/* eslint-disable no-unused-vars */
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en'); // Establece el idioma predeterminado
  }
}
