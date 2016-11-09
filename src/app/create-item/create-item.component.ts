import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  @Input() item = {};
  @Output() setName = new EventEmitter();

  constructor() { }

  saveItem(name) {
    console.log('child', name);
    this.setName.next(name);
  }

  clearItem() {
    console.log('item', this.item);
    this.setName.next(this.item);
  }

  ngOnInit() {
  }

}
