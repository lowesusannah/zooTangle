import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {
  transform(input: Animal[], desiredMaturity) {
    var output: Animal[] = [];
    if (desiredMaturity === "mature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredMaturity === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
