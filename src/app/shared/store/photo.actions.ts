import { createActionGroup, props } from '@ngrx/store';
import { PhotoInterface } from '../types/photo.interface';

export const PhotosActions = createActionGroup({
  source: 'PhotoInterface',
  events: {
    'Add Photo': props<{ payload: PhotoInterface }>(),
    'Add Multiple': props<{ payload: PhotoInterface[] }>(),
    'Remove Photo': props<{ photoId: number }>(),
  },
});
