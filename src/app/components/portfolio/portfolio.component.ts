import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'angular' | 'react' | 'flutter' = 'all';

  rooms = ['Room 1', 'Room 2', 'Living Room', 'Bathroom'];

  portfolios: Portfolio[];

  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
        this.portfolioSvc.get().subscribe(data => {
            this.portfolios = data;
       });
  }

}
