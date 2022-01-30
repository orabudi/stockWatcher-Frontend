import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-header',
  templateUrl: './website-header.component.html',
  styleUrls: ['./website-header.component.css'],
})
export class WebsiteHeaderComponent implements OnInit {
  constructor() {}
  darkModeChecked = false;

  ngOnInit(): void {}

  // TODO: when darkModeChecked changes value, change app colors
}
