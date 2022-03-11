import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenservice:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    const tokenReq = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.tokenservice.getToken()}`
        
      }
    })
    return next.handle(tokenReq);
  }
}
