import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MirrorService } from '~/app/services/mirror.service';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router,
    private mirror$: MirrorService
  ) { }

  ngOnInit(): void {
  }

  public toggleScreen() {
    this.mirror$.post('toggle').subscribe(res => {})
  }

}
