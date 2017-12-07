import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe ({
  name: 'tapped',
  pure: false
})

export class TappedPipe implements PipeTransform {
  transform(input: Keg[], desiredTapped) {
    var output: Keg[] = [];
    if (desiredTapped === "tappedKeg") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints === 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTapped === "untappedKeg") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints != 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
      }
    }
  }
