import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/shared/services/http.service';
import { PhotosActions } from 'src/app/shared/store/photo.actions';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;

  store$ = this.store.select((stores) => {
    const photos = stores['photos'].payload;
    return photos;
  });

  photos: PhotoInterface[] = [];
  constructor(
    private httpService: HttpService,
    private store: Store<PhotoInterface[]>
  ) {}

  ngOnInit(): void {
    this.onFindPhotos();
  }

  onFindPhotos() {
    this.isLoading = true;
    this.httpService
      .findPhotos()
      .subscribe((data) => {
        this.photos = data;
        console.log(data);

        this.store.dispatch(PhotosActions.addMultiple({ payload: data }));
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
