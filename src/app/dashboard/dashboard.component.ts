import {Component, EventEmitter, Output} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface DashboardCard {
  color?: string;
  cols: number;
  rows: number;
  title: string;
  value: string;
}


@Component({
  selector: 'who-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Output() selectedCardChange = new EventEmitter<string>();
  selectedCard = 'welcome';

  rippleColor = '#F8BBD0';

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Professional Experiences', cols: 4, rows: 1, color: '', value: 'professional'  },
          { title: 'Me', cols: 4, rows: 1, color: '', value: 'me'  },
          { title: 'Special Skills', cols: 4, rows: 1, color: '', value: 'skills'  },
          { title: 'Educational Background', cols: 4, rows: 1, color: '', value: 'education'  },
          { title: 'Bachelor & Master Theses', cols: 4, rows: 1, color: '', value: 'theses'  }
        ];
      }

      return [
        { title: 'Professional Experience', cols: 3, rows: 1, color: '#CFD8DC', value: 'professional' },
        { title: '', cols: 1, rows: 3, color: 'url("https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762__480.jpg")', value: 'me' },
        { title: 'Special Skills', cols: 1, rows: 2, color: '#F06292', value: 'skills' },
        { title: 'Educational Background', cols: 2, rows: 2, color: '', value: 'education' },
        { title: 'Bachelor & Master Theses', cols: 4, rows: 1, color: '#90A4AE', value: 'theses' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  selectcard(cardValue: string) {
    this.selectedCard = cardValue;
    this.selectedCardChange.emit(this.selectedCard);
  }

}
