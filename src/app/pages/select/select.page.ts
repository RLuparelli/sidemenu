import { Component, OnInit } from '@angular/core';
interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage {
  users: User[] = [
    {
      id: 1,
      first: 'Rodrigo',
      last: 'Luparelli',
    },
    {
      id: 2,
      first: 'Daiane',
      last: 'Brito',
    },
    {
      id: 3,
      first: 'Pedro',
      last: 'Nunes',
    },
    {
      id: 4,
      first: 'Benjamim',
      last: 'Nunes',
    },
  ];

  compareWith(o1: User, o2: User | User[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: User) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }
}
