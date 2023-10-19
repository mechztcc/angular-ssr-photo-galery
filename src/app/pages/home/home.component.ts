import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;

  photos: PhotoInterface[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.onFindPhotos();
  }

  onFindPhotos() {
    this.isLoading = true;
    this.httpService
      .findPhotos()
      .subscribe((data) => {
        this.photos = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
