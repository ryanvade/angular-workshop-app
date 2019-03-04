import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../store/dashboard.interface";

@Component({
  selector: "app-video-list-item",
  templateUrl: "./video-list-item.component.html",
  styleUrls: ["./video-list-item.component.scss"]
})
export class VideoListItemComponent implements OnInit {
  @Input() selected: Video;
  @Input() video: Video;
  @Output() select = new EventEmitter<Video>();

  constructor() {}

  ngOnInit() {}

  clickOnVideo() {
    this.selected = this.video;
    this.select.emit(this.video);
  }

  doubleClickVideo() {
    this.clickOnVideo();
    window.open(`https://www.youtube.com/watch?v=${this.video.id}`, "_blank");
  }
}
