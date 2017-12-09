import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <div class="animal-selector">
    <select (change)= "onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
    </select>
  </div>

  <div class="animal" (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">
    <div class="info">
        <h3>{{currentAnimal.species}}</h3>
        <h5>'{{currentAnimal.name}}'</h5>
        <p> Age: {{currentAnimal.age}} <br>
            Diet: {{currentAnimal.diet}} <br>
            Location: {{currentAnimal.location}} <br>
            Number of caretakers: {{currentAnimal.caretakers}} <br>
            Sex: {{currentAnimal.sex}} <br>
            Likes: {{currentAnimal.likes}} <br>
            Dislikes: {{currentAnimal.dislikes}} <p>
      </div>
      <div [class]="dietImg(currentAnimal)">
      </div>
      <button (click)="editButtonHasBeenClicked(currentAnimal)" type="button" name="edit">Edit Animal Record</button>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editSender.emit(animalToEdit);
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

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
