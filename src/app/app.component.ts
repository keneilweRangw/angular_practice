import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './ui/loading/loading.component';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'this';

  loaderService = inject(LoaderService)

  
}
