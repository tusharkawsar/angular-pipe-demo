import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {
  public readonly theories = [
    { title: 'Theory 1', userId: 1},
    { title: 'Theory 2', userId: 2},
  ];

  public constructor() { }

  public getTheory (userId: number): any {
    return this.theories.find(t => t.userId === userId);
  }
}
