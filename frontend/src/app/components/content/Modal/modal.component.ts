import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-modal',
    template: require('./modal.component.html'),
})
export class ModalComponent implements OnInit {

    @Input() modalTitle: string;
    @Input() modalBody: Object;

    ngOnInit(): void {}
}