import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>zooTangle</h1>
      <h3>keeping your jungle in order</h3>
    </div>
    <div class="body">
      <div class="animal-container">
        <animal-list [childAnimalList]="masterAnimalList" (editSender)="editAnimal($event)"></animal-list>
      </div>
      <div>
        <div class="add-edit-container">
          <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
          <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing"></edit-animal>
        </div>
      </div>
    </div>
   `
})

export class AppComponent {

public masterAnimalList: Animal[] = [
  new Animal("African red-billed hornbill", "Zazu", 1, "omnivore", "Howard Vollum Aviary", 1, "male", "small mice", "cold weather"),
  new Animal("Dwarf mongoose", "Katya", 7, "omnivore", "Predators of the Serengeti Exhibit", 1, "female", "leading the pack", "other females"),
  new Animal("Amur Leopard", "Borris", 4, "carnivore", "Amur Cats Habitat", 5, "male", "Old Spice", "boredom"),
  new Animal("Harbor seal", "Atuun", 13, "carnivore", "Steller Cove", 2, "female", "chatting", "being ignored")
];

selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  doneButtonClicked() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
