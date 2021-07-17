import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() showBack: boolean;

  constructor(
    private router: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.back();
  }
}
