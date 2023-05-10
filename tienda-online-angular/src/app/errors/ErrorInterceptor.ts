import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    public error: String;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error.status)
                if (error.status === 401 || error.status === 0) {
                    Swal.fire("Error","Logueate para poder seguir","error")
                    this.router.navigate(['/login'])
                } else {
                    
                    return throwError(error);
                }
                return null;
            })
        );
    }
}