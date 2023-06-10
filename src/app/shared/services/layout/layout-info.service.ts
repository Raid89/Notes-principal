import { Injectable } from '@angular/core';
import { OptionsLanguageInterfaces, OptionsMenuInterfaces } from '../../interfaces/layout-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LayoutInfoService {

  public optionsMenu: OptionsMenuInterfaces[] = [
    {
      icon: 'fi fi-rr-home',
      description: 'OPTIONS_MENU.DASHBOARD',
      selected: false,
      link: 'dashboard'
    },
    {
      icon: 'fi fi-rr-edit',
      description: 'OPTIONS_MENU.NOTES',
      selected: false,
      link: 'notes'
    },
    {
      icon: 'fi fi-rr-folder-download',
      description: 'OPTIONS_MENU.DOWNLOADS', 
      selected: false,
      link: 'downloads'
    },
  ];

  public languageOptions: OptionsLanguageInterfaces[] = [
    {
      description: 'OPTIONS_LANGUAGES.ENGLISH',
      icon: 'assets/icons/estados-unidos.png',
      key: 'en'
    },
    {
      description: 'OPTIONS_LANGUAGES.PORTUGUESE',
      icon: 'assets/icons/portugal.png',
      key: 'pt'
    },
    {
      description: 'OPTIONS_LANGUAGES.SPANISH',
      icon: 'assets/icons/espana.png',
      key: 'es'
    }
  ];

  constructor() {}
}
