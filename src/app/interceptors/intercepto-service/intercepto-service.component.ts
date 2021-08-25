import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingService } from '../../components/loading/loading.service';
import { ErrorService } from '../../components/error/error.service';

@Component({
  selector: 'app-intercepto-service',
  templateUrl: './intercepto-service.component.html',
  styleUrls: ['./intercepto-service.component.css']
})
export class InterceptoServiceComponent implements HttpInterceptor {

  constructor(private service: LoadingService,
              private serviceError: ErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    console.log('Paso por el interceptor');
    this.service.start();
    this.serviceError.end();
    return next.handle(req).pipe(
      catchError( (err) => {
              this.service.end();
              this.serviceError.start();
              return throwError( err);
            })
    );
  }

  // manejadorError(err: HttpErrorResponse) {
  //   console.log('Hola, estoy en el error');
  //   this.serviceError.start();
  //   return throwError('¡Error personalizado!');
  // }
}
