import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
  <div class="form" *ngIf="childSelectedKeg">
    <h3>Edit {{selectedKeg.name}} Keg</h3>
    <label>Edit Name:</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Edit Brand:</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>Edit ABV:</label>
    <input [(ngModel)]="childSelectedKeg.abv">
    <label>Edit Price:</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <br>
    <button (click)="doneButtonClicked()">Done</button>
   </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
