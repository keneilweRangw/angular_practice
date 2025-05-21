import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../../ui/search/search.component';
import { CountryCardComponent } from '../../ui/country-card/country-card.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-home-page',
  imports: [SearchComponent, CountryCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  countryService = inject(CountryService);

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data) => {
      console.log(data);
      const countries: any[] = Object.entries(data);
      this.countryService.setCountries(countries);
    });
  }
}
