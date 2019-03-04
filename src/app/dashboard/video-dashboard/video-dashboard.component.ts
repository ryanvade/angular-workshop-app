import { Component, OnInit } from '@angular/core';
import { VideoService } from "../services/video.service";
import { Observable } from "rxjs";
import { Video } from "../store/dashboard.interface";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(private service: VideoService) { }

  ngOnInit() {
    this.videos = this.service.getList();
  }

}
