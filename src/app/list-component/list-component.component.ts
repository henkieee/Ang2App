import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  items = [
    { title: 'lala' },
    { title: 'dalala' },
    { title: 'tralala' }
  ];

  currentItem = {};

  constructor() { }

  changeItem(index, action) {
    console.log('list-component');
    console.log('item index', index);
    console.log('action', action);
    if (action === 'delete') {
      this.items.splice(index, 1)
    } else {
      // this.items[index].title =
    }
  }

  addTitle(item) {
    console.log('addTitle');
    this.items.push(item);
  }

  ngOnInit() {
  }

}
