import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

 // tslint:disable-next-line: variable-name
 private _selectedType: 'all' | 'Angular' | 'React' | 'Flutter' = 'all';


 get selectedType() {
    return this._selectedType;
 }


 set selectedType(newValue: 'all' | 'Angular' | 'React' | 'Flutter') {
    if (newValue !== this._selectedType) {
        this._selectedType = newValue;
        this.loadPortfolios(this._selectedType);
    }
 }


  rooms = ['Room 1', 'Room 2', 'Living Room', 'Bathroom'];

  portfolios: Portfolio[];

  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
        this.loadPortfolios(this._selectedType);
  }

  loadPortfolios(selectedType: string): void {
    this.portfolioSvc.get().subscribe(data => {
         this.portfolios = data.filter(p => p.type === selectedType || selectedType === 'all');
   });
  }

}
