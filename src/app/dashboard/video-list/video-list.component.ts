import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';
import { Video } from '../store/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(private service: VideoService) { }

  videos: Observable<Video[]>;
  selected: Video = null;

  ngOnInit() {
    this.videos = this.service.getList();
    this.videos.subscribe((videos) => {
      if (videos.length > 0) {
        this.selected = videos[0];
      }
    });
  }

  clickOnVideo(video: Video) {
    this.selected = video;
    console.log(this.selected);
    // window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
  }

  videoIsSelected(video: Video): boolean {
    return this.selected != null && video.id == this.selected.id;
  }

}
