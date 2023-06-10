import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OptionsLanguageInterfaces } from 'src/app/shared/interfaces/layout-interfaces';
import { LayoutInfoService } from 'src/app/shared/services/layout/layout-info.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent  {

  // eslint-disable-next-line no-undef
  public languageSelected: number  = parseInt(localStorage.getItem('languageSelected') || '0') ;
  public languageOptions!: OptionsLanguageInterfaces[];
  public viewListLanguage: boolean = false;

  constructor( public infoLayoutService: LayoutInfoService, private translateService: TranslateService ) {
    this.languageOptions = this.infoLayoutService.languageOptions
  }

  changeLanguage(language: string, index: number): void{
    this.translateService.use(language)
    this.languageSelected = index
    localStorage.setItem('languageSelected', String(index))
  }
}
