import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template: `
  <div class="keg-selector">
    <select (change)="onChange($event.target.value)">
      <option value="allKegs"selected="selected">All Kegs</option>
      <option value="tappedKeg">Tapped Kegs</option>
      <option value="untappedKeg">Untapped Kegs</option>
    </select>
  </div>
  <div class="beer" *ngFor="let currentKeg of childKegList | tapped:filterByTappedness">
    <div class="info">
    {{currentKeg.name}}, {{currentKeg.brand}}, ABV: {{currentKeg.abv}}, <span class="pints-info">{{currentKeg.pints}}</span> pints left, {{currentKeg.price}}
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

  filterByTappedness: string = "tappedKeg";

  onChange(pintsInKeg) {
    this.filterByTappedness = pintsInKeg;
  }
}
