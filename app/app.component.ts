import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="title">
    <h1>Welcome to Tap Works</h1>
    <h3>Check out what we have on tap!</h3>
  </div>
  <div class="beer-container">
    <div class="beer" *ngFor="let currentKeg of kegs">
      <div class="info">
      {{currentKeg.name}}, {{currentKeg.brand}}, ABV: {{currentKeg.abv}}, {{currentKeg.pints}} pints left, {{currentKeg.price}}
      </div>
      <div [class]="beerImg(currentKeg)">
      </div>
    <button (click)="pourBeer(currentKeg)" type="button" name="pour">Beer Me!</button>
    <button (click)="pourGrowler(currentKeg)" type="button" name="pour">Pour Growler</button>
    <button (click)="editKeg(currentKeg)" type="button" name="edit">Edit Keg</button>
    <button type="button" name="delete">Delete Keg</button>
    </div>
  </div>
  <button type="button" name="add">Add Keg</button>
  <div class="form" *ngIf="selectedKeg">
    <h3>Edit {{selectedKeg.name}} Keg</h3>
    <label>Edit Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label>Edit Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>Edit ABV:</label>
    <input [(ngModel)]="selectedKeg.abv">
    <label>Edit Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <br>
    <button (click)="finishedEditing()">Done</button>
   </div>
   `
})

export class AppComponent {

public kegs: Keg[] = [
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


beerImg(currentKeg) {
  if (currentKeg.abv <= 5) {
    return "beer-light";
  } else {
    return "beer-dark";
  }
}


pourBeer(currentKeg) {
  return currentKeg.pints--;
}

pourGrowler(currentKeg) {
  return currentKeg.pints-=2;
}

}
export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: string, public abv: number){ };
}
