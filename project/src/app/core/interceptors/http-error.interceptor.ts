// http-error.interceptor.ts – Functional Interceptor (Angular 20)
// Fängt HTTP-Fehler global ab

import { HttpInterceptorFn } from '@angular/common/http';
// import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    // TODO: Error-Handling implementieren
    // return next(req).pipe(
    //   catchError((error) => {
    //     console.error('HTTP Error:', error);
    //     return throwError(() => error);
    //   })
    // );
    return next(req);
};
