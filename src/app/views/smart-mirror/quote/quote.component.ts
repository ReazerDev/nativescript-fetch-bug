import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MirrorService } from '../../../services/mirror.service';

@Component({
  selector: 'ns-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  constructor(
    public router: Router,
    private mirror$: MirrorService
  ) { }

  ngOnInit(): void {
  }

  public customQuote(quote: string, author: string) {
    this.mirror$.customeQuote(quote, author).subscribe();
  }

  public randomQuote() {
    this.mirror$.randomQuote().subscribe();
  }
}
