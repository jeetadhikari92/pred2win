import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,  } from "rxjs";
import  { environment } from '../../../environments/environment'

@Injectable()
export class P2WInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: `${environment.apiUrl}${req.url}`,
            withCredentials: true
        })
        return next.handle(req)
    }
    
}