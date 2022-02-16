import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public readonly users = [
    { id: 1, name: 'Tushar'},
    { id: 2, name: 'Andrew'},
  ];

  public constructor() { }
}
