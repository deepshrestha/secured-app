import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: require('./sidebar.component.html'),
})
export class SidebarComponent implements OnInit {
  @Input() basePathName?: string;
  @Input() type?: string;

  constructor() { }

  ngOnInit(): void {}

  title = "Secured App"
}