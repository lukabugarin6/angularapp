import { Directive, OnInit, OnDestroy } from '@angular/core';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor() { }

  ngOnInit() {
    console.log(`Spy #${this.id} onInit`);
  }

  ngOnDestroy() {
    console.log(`Spy #${this.id} onDestroy`);
  }
}
