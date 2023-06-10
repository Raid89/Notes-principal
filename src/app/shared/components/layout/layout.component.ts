import { Component } from '@angular/core';
import { LayoutInfoService } from '../../services/layout/layout-info.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public optionsMenu = this.infoLayout.optionsMenu;

  constructor(public infoLayout: LayoutInfoService){}

  changeSelection(index: number){
    this.optionsMenu.forEach((element, key) => {
      this.optionsMenu[key].selected = false;
    });
    this.optionsMenu[index].selected = true;
  }
}
