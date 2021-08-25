import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  mostrar$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  start(){
    this.mostrar$.next(true);
  }

  end() {
    this.mostrar$.next(false);
  }

}
