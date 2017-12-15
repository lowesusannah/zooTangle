import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div class="form" *ngIf="childSelectedAnimal" >
    <h3>Edit {{childSelectedAnimal.name}}</h3>
    <label>Edit Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species" type="text">
    <label>Edit Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name" type="text">
    <label>Edit Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age" type="text">
    <label>Edit Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet" type="text">
    <label>Edit Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location" type="text">
    <label>Edit caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers" type="text">
    <label>Edit Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex" type="text">
    <label>Edit Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes" type="text">
    <label>Edit Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes" type="text">
      <br>
    <button (click)="doneButtonClicked()">Done</button>
   </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
