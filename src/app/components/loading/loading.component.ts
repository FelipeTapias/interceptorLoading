import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  mostrar$;

  constructor(private service: LoadingService) { }

  ngOnInit(): void {
    this.service.mostrar$.subscribe(resp => {
      this.mostrar$ = resp;
      console.log(resp);
    });

  }

}
