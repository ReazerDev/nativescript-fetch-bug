import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NFLGamePass } from 'nfl-gamepass-api';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    const pass = new NFLGamePass();
    // console.log(pass.getSeason('2021'));
  }

  public test() {
    fetch("https://mirror.reazer.net/api/corona").then(res => res.text()).then(res => {
      console.log(res);
    });
  }
}
