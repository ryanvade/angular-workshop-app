import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../store/dashboard.interface";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  @Input() videos: Observable<Video[]>;
  selected: Video = null;

  constructor() {}

  ngOnInit() {
    this.videos.subscribe(videos => {
      if (videos.length > 0) {
        this.selected = videos[0];
      }
    });
  }

  selectVideo(video: Video) {
    this.selected = video;
  }
}
