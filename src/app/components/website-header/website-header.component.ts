import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-header',
  templateUrl: './website-header.component.html',
  styleUrls: ['./website-header.component.css'],
})
export class WebsiteHeaderComponent implements OnInit {
  darkModeChecked = false;
  constructor() {}

  ngOnInit(): void {
    const themeMode = localStorage.getItem('darkModeTheme');
    if (themeMode === 'DARK') {
      this.darkModeChecked = true;
    }
  }

  themeChanged = () => {
    localStorage.setItem(
      'darkModeTheme',
      this.darkModeChecked ? 'DARK' : 'LIGHT'
    );
  };
}
