import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  template: `
    <div class="flex w-screen h-screen justify-center items-center">
      <h1 class="text-4xl animate-pulse text-muted">
        PLease, use your mobile devise
      </h1>
    </div>
  `,
})
export class DesktopComponent {}
