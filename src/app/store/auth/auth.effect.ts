import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN),
      map((action: AuthActions.Login) => action.payload),
      mergeMap((payload) =>
        this.authService.setLogin(payload).pipe(
          map(() => new AuthActions.GetUser()),
          catchError((error) => of(new AuthActions.SetError(error.error.error)))
        )
      )
    )
  );

  getUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.GET_USER),
      mergeMap(() => {
        return this.authService.getUser().pipe(
          map((res: any) => new AuthActions.SetUser(res.data)),
          catchError(() => of(AuthActions.CleanError))
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
