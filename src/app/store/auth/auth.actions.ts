import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Auth, User } from './auth.model';

export const REGISTER = '[AUTH] REGISTER';
export const LOGIN = '[AUTH] LOGIN';
export const GET_USER = '[AUTH] GET_USER';
export const SET_USER = '[AUTH] SET_USER';
export const SET_ERROR = '[AUTH] SET_ERROR';
export const LOGOUT = '[AUTH] LOGOUT';
export const CLEAN_ERROR = '[AUTH] CLEAN_ERROR';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class Redister implements Action {
  readonly type = REGISTER;
  constructor() {}
}
export class GetUser implements Action {
  readonly type = GET_USER;
  constructor() {}
}
export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) {}
}

export class SetError implements Action {
  readonly type = SET_ERROR;
  constructor(public payload: { [k: string]: string }) {}
}

export class CleanError implements Action {
  readonly type = CLEAN_ERROR;
  constructor() {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {}
}

export type Actions =
  | Login
  | Redister
  | GetUser
  | SetError
  | CleanError
  | Logout
  | Login
  | SetUser;
