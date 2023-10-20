import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/shared/services/http.service';
import { PhotosActions } from 'src/app/shared/store/photo.actions';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss'],
})
export class CardPhotoComponent {
  @Input() photo: PhotoInterface;

  isLoading: boolean = false;

  constructor(private store: Store, private http: HttpService) {}

  onRemove() {
    this.isLoading = true;
    this.http
      .remove(this.photo.id)
      .subscribe((data) => {
        this.store.dispatch(
          PhotosActions.removePhoto({ photoId: this.photo.id })
        );
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
