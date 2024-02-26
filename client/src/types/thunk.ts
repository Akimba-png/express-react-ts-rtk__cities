import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './../store/root-reducer';
import { Action } from '../store/action';

export type AppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
export type ThunkCreatorResult = ThunkAction<void, State, AxiosInstance, Action>

