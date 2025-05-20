import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="screenWidth < 650">
      <router-outlet />
    </div>

    <div *ngIf="screenWidth >= 650">
      <app-desktop />
    </div>
  `,
})
export class AppComponent {
  screenWidth: number = window.innerWidth;
}
