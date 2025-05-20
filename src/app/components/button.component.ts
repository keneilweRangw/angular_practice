import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button
    class="w-full px-3 py-2  rounded-md hover:opacity-80"
    [class]="
      secondary ? 'bg-slate-200 text-slate-800' : 'bg-black text-slate-100'
    "
    (click)="onBtnClickEvent()"
  >
    {{ label }}
  </button>`,
})
export class ButtonComponent {
  @Input() label = 'Submit';
  @Input() secondary: boolean = false;

  @Output() onBtnClick = new EventEmitter<string>();

  onBtnClickEvent() {
    this.onBtnClick.emit('');
  }
}
