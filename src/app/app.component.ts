import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { TheoryService } from './theory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-demo';

  public constructor(
    public userService: UsersService,
    private theoryService: TheoryService,
  ) {}

  public getTheory(userId: number): any {
    console.log('getTheory firing');

    return this.theoryService.getTheory(userId);
  }
}
