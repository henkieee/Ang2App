import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.css']
})
export class ListItemComponentComponent implements OnInit {

  @Input() item = {};
  @Output() itemChange = new EventEmitter();

  constructor() { }

  changeMe(ev, action) {
    console.log('list-item-component');
    this.itemChange.next({item: this.item, action: action});
  }

  ngOnInit() {
  }

}
