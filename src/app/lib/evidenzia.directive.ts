import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]',
})
export class EvidenziaDirective {
  constructor() {}
  @HostBinding('style.backgroundColor') background: string = 'yellow';
  @HostBinding('style.Color') color: string = 'black';
}
