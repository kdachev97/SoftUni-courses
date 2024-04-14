import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  counter = 0;

  intervalSubscription: Subscription;

  constructor() {
    this.intervalSubscription = interval(1000).subscribe(() => { this.counter++; })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
