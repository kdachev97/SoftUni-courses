import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MyService } from '../providers';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  @Input() obj!: { name: string; };

  constructor(myService: MyService) {
    console.log(myService.value);
   }

  ngOnInit(): void {

  }
}
