import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <div class="animal-selector">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>
  </div>
  <div class="animal" *ngFor="let currentAnimal of childAnimalList |  maturity:filterbyMaturity">
    <div class="info">
    {{currentAnimal.species}}, {{currentAnimal.name}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}}, {{currentAnimal.sex}}, {{currentAnimal.likes}}, {{currentAnimal.dislikes}}
    </div>
    <div [class]="dietImg(currentAnimal)">
    </div>
    <div class="buttons">
      <button (click)="editButtonHasBeenClicked(currentAnimal)" type="button" name="edit">Edit Animal Record</button>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Animal) {
    this.editSender.emit(kegToEdit);
  }

  dietImg(currentAnimal) {
    if (currentAnimal.diet === "carnivore") {
      return "carnivore";
    } else if (currentAnimal.diet === "herbivore"){
      return "herbivore";
    } else {
      return "omnivore";
    }
  }

  filterByMaturity: string = "allAnimals";

  onChange(animalAge) {
    this.filterByMaturity != this.filterByMaturity;
  }
}
