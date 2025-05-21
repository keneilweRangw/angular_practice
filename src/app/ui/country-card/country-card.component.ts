import { Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  @Input() country?: any;

  ngOnInit() {
    console.log(this.country[1]);
  }
}
