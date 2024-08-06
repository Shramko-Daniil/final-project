import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  btntext1: string = 'Графiки вiдключень свiтла';
  btntext2: string = 'Забезпечення міста';
  languageText: string = 'UKR';

  routToTimetable() {
    this.router.navigate(['/time-table']);
  }

  routToLightinfo() {
    this.router.navigate(['/light-info']);
  }
}
