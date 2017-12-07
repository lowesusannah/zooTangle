import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="title">
    <h1>Welcome to Tap Works</h1>
    <h3>Check out what we have on tap!</h3>
  </div>
  <div class="beer-container">
    <keg-list [childKegList]="masterKegList" (editSender)="editKeg($event);" (pourSender)="pourBeer($event)" (growlerSender)="pourGrowler($event)"></keg-list>
  </div>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing"></edit-keg>
  <button type="button" name="add">Add Keg</button>
   `
})

export class AppComponent {

public masterKegList: Keg[] = [
  new Keg("Black Butte Porter", "Deschutes Brewery", "$8", 5.2),
  new Keg("Jubelale", "Deschutes Brewery", "$7", 6.7),
  new Keg("Lost Meridian", "Basecamp Brewing", "$6.50", 5.0),
  new Keg("Hefe", "Widmer Brothers Brewing", "$5", 4.9),
];

selectedKeg = null;

editKeg(clickedKeg) {
  this.selectedKeg = clickedKeg;
}

finishedEditing() {
  this.selectedKeg = null;
}


pourBeer(currentKeg) {
  return currentKeg.pints--;
}

pourGrowler(currentKeg) {
  return currentKeg.pints-=2;
}

}
