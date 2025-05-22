import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  countryService = inject(CountryService);
  loaderService = inject(LoaderService);

  onSearch(name: string) {
    this.loaderService.show();
    this.countryService.searchByCountryName(name).subscribe(
      (data) => {
        this.loaderService.hide();
        const countries: any[] = Object.entries(data);
        this.countryService.setCountries(countries);
      },
      (error) => {
        this.loaderService.hide();
      }
    );
  }
}
