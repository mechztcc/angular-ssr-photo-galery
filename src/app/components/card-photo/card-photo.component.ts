import { Component, Input } from '@angular/core';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.scss'],
})
export class CardPhotoComponent {
  @Input() photo: PhotoInterface;
}
