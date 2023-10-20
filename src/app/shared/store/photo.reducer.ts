import { createReducer, on } from '@ngrx/store';
import { PhotoInterface } from '../types/photo.interface';
import { PhotosActions } from './photo.actions';

export interface State {
  photos: PhotoInterface[];
}

export const initialState: State = {
  photos: [],
};

export const photoReducer = createReducer(
  initialState,
  on(PhotosActions.addMultiple, (state, { payload }) => {
    return { ...state, photos: payload };
  }),
  on(PhotosActions.addPhoto, (state, { payload }) => {
    return { ...state, photos: [...state.photos, payload] };
  }),
  on(PhotosActions.removePhoto, (state, { photoId }) => {
    return {
      ...state,
      photos: state.photos.filter((photo) => photo.id !== photoId),
    };
  })
);
