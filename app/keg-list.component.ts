import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template: `
  <div class="beer" *ngFor="let currentKeg of childKegList">
    <div class="info">
    {{currentKeg.name}}, {{currentKeg.brand}}, ABV: {{currentKeg.abv}}, {{currentKeg.pints}} pints left, {{currentKeg.price}}
    </div>
    <div [class]="beerImg(currentKeg)">
    </div>
  <button (click)="pourButtonHasBeenClicked(currentKeg)" type="button" name="pour">Beer Me!</button>
  <button (click)="pourGrowlerButtonHasBeenClicked(currentKeg)" type="button" name="pour">Pour Growler</button>
  <button (click)="editButtonHasBeenClicked(currentKeg)" type="button" name="edit">Edit Keg</button>
  <button type="button" name="delete">Delete Keg</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  @Output() growlerSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.editSender.emit(kegToEdit);
  }

  pourButtonHasBeenClicked(pintsToEdit: Keg) {
    this.pourSender.emit(pintsToEdit);
  }

  pourGrowlerButtonHasBeenClicked(growlersToEdit: Keg) {
    this.growlerSender.emit(growlersToEdit);
  }

  beerImg(currentKeg) {
    if (currentKeg.abv <= 5) {
      return "beer-light";
    } else {
      return "beer-dark";
    }
  }
}
