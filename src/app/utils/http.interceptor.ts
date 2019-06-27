import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CORSInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqClone = req.clone({ withCredentials: true });
        return next
            .handle(reqClone)
            .pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                        //console.log('---> status:', evt.status);
                    }
                }),
                catchError((err) => {
                    alert('ERROR \n' + JSON.stringify(err.error, null, 4));
                    return throwError(err);
                })
            )
    }
}
