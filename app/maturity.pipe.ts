import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: 'maturity',
  pure: false
})

export class MaturityPipe implements PipeTransform {
  transform(input: Animal[], desiredTapped) {
    var output: Animal[] = [];
    if (desiredMaturity === "mature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      console.log("mature");
      return output;
    }
    else if (desiredMaturity === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      console.log("young");
      return output;
    }
    else {
      console.log("in neither mature nor young category - uh oh!");
      return input;
    }
  }
}
