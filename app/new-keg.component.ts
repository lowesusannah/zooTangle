import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <form class="add-keg">
    <h3>New Keg</h3>
    <label>Name:</label>
    <input #newName>
    <label>Brand:</label>
    <input #newBrand>
    <label>ABV:</label>
    <input #newABV>
    <label>Price:</label>
    <input #newPrice>
    <button (click)="submitForm(newName.value, newBrand.value, newABV.value, newPrice.value); newName.value=''; newBrand.value=''; newABV.value=''; newPrice.value='';" type="button" name="add">Add Keg</button>
  </form>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  submitForm(name: string, brand: string, price: string, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }


}
