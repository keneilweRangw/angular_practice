import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../../ui/search/search.component';
import { CountryCardComponent } from '../../ui/country-card/country-card.component';
import { CountryService } from '../../services/country.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home-page',
  imports: [SearchComponent, CountryCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  countryService = inject(CountryService);
  loaderService = inject(LoaderService);

  ngOnInit(): void {
    this.loaderService.show();
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.loaderService.hide();
        console.log(data);
        const countries: any[] = Object.entries(data);
        this.countryService.setCountries(countries);
      },
      (error) => {
        this.loaderService.hide();
      }
    );
  }
}
