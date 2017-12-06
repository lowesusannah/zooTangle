import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="title">
    <h1>Welcome to the Tap Room</h1>
    <h3>Look at all the beers we have!</h3>
  </div>
  <div class="beer-container">
    <div class="beer" *ngFor="let currentKeg of kegs">{{currentKeg.name}}
    </div>
  </div>
   `
})

export class AppComponent {

kegs: Keg[] = [
  new Keg("Black Butte Porter", "Deschutes Brewery", "$8", "5.2%"),
  new Keg("Jubelale", "Deschutes Brewery", "$7", "6.7%"),
  new Keg("Lost Meridian", "Basecamp Brewing", "$6.50", "5.0%"),
  new Keg("Hefe", "Widmer Brothers Brewing", "$5", "4.9%"),
]

 }

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: string, public abv: string){};
}
