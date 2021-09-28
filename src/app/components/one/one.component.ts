import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {

  constructor(private router: Router) { }

  goToTwoPage(): void {
    this.router.navigate(['/two'])
      .then(() => console.log('success'))
      .catch(error => console.log(error));
  }
}
