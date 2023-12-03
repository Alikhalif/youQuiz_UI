import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sideMenuActiveIndex: number | null = null;
  isSidebarHidden = false;
  isDarkMode = false;
  isSearchFormShown = false;

  onSideMenuClick(index: number): void {
    this.sideMenuActiveIndex = index;
  }

  onMenuBarClick(): void {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  onSwitchModeChange(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  onSearchBtnClick(): void {
    if (window.innerWidth < 576) {
      this.isSearchFormShown = !this.isSearchFormShown;
    }
  }

}
