import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AdminLte from 'admin-lte';

@Component({
    selector: 'app-home',
    template: require('./home.component.html'),
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        $('[data-widget="treeview"]').each(function() {
            AdminLte.Treeview._jQueryInterface.call($(this), 'init');
        });

        $('[data-widget="sidebar-search"]').each(function() {
            AdminLte.SidebarSearch._jQueryInterface.call($(this), 'init');
        });
    }
}