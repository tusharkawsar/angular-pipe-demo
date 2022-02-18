import { Pipe, PipeTransform } from '@angular/core';
import { TheoryService } from './theory.service';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  public constructor (private theoryService: TheoryService) {}

  public transform(userId: number): any {
    console.log(userId);
    return this.theoryService.getTheory(userId); 
  }

}
