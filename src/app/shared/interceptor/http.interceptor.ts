import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { NotifierService } from '../services/notifier/notifier.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private notifier: NotifierService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    request = request.clone({ url: `http://localhost:3000/${request.url}` });
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((response: HttpErrorResponse) => {
        this.notifier.error(response.error['message']);

        return throwError(() => new Error());
      })
    );
  }
}
