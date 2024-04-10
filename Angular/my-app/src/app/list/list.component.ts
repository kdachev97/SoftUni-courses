import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov'
    }
  ];

  selectedUserIndex: null | number = null;

  showLastName = false;

  constructor() {
  }

  get showSelectedIndex(): boolean {
    return ((this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0)
  }

  handleClickEvent(event: MouseEvent) {
    console.log(event)
    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }
}