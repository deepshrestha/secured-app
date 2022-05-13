import { Component, Input, OnInit, Inject, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  template: require('./sidebar.component.html'),
})
export class SidebarComponent implements OnInit {

  menu: ElementRef<any>;
  slug: String;
  activatedRoute: ActivatedRoute;
  constructor( @Inject(ActivatedRoute) activatedRoute: ActivatedRoute ) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot);
    this.slug = this.activatedRoute.snapshot.routeConfig.path;
  }

  onToggleMenu() {
    if(<HTMLLIElement>document.querySelector("has-treeview")){
      console.log(<HTMLLIElement>document.querySelector("has-treeview"));
    }
  }
  
  title = "Secured App"
}