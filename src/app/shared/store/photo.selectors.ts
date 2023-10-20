import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './photo.reducer';

export const selectPhotos = createFeatureSelector<State>('photos');
export const allPhotos = createSelector(
  selectPhotos,
  (photos) => {
    return photos.photos;
  }
);
