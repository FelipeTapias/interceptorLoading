import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceAnyService } from '../../services/service-any.service';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private service: ServiceAnyService,
              private serviceLoad: LoadingService) { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe(resp => {
        setTimeout(() => {
          if(resp) {
            this.data = resp;
            this.serviceLoad.end();
          }
        }, 1000);
    });

  }

}
