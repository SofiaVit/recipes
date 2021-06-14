import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tabType: string) {
    this.tabSelected.emit(tabType);
  }
}
