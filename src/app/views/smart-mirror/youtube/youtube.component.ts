import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slider } from '@nativescript/core';
import { MirrorService } from '../../../services/mirror.service';

@Component({
  selector: 'ns-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  constructor(
    public router: Router,
    private mirror$: MirrorService
  ) { }

  ngOnInit(): void {
  }

  public startVideo(url) {
    this.mirror$.post('video/start-video', { url: url }).subscribe(res => {
    });
  }


  public pauseVideo() {
    this.mirror$.post('video/pause-video').subscribe(res => {
    });
  }

  public continueVideo() {
    this.mirror$.post('video/continue-video').subscribe(res => {
    });
  }

  public changeVolume(event) {
    let slider = <Slider>event.object;
    this.mirror$.post('video/video-volume', { volume: slider.value }).subscribe(res => {
    });
  }

}
