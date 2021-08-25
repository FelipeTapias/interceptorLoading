import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  mostrar$;

  constructor(private service: ErrorService) { }

  ngOnInit(): void {
    this.service.mostrar$.subscribe(resp => {
      this.mostrar$ = resp;
      console.log(resp);
    });
  }

}
