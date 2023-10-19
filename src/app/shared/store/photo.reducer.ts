import { createReducer, on } from '@ngrx/store';
import { PhotosActions } from './photo.actions';
import { PhotoInterface } from '../types/photo.interface';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<PhotoInterface> {}
export const adapter: EntityAdapter<PhotoInterface> =
  createEntityAdapter<PhotoInterface>();

export const initialState: State = adapter.getInitialState({});

export const photoReducer = createReducer(
  initialState,
  on(PhotosActions.addMultiple, (state, { payload }) => {
    return { ...state, payload };
  }),
  on(PhotosActions.addPhoto, (state, action) => {
    return { ...state, payload: [...state['payload'], action.payload] };
  })
);
