import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { PhotosActions } from 'src/app/shared/store/photo.actions';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';
import * as selectors from '../../shared/store/photo.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;

  store$ = this.store.select(selectors.allPhotos);

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
        this.store.dispatch(PhotosActions.addMultiple({ payload: data }));
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
