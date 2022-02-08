import {Component, OnDestroy, OnInit} from '@angular/core';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'who-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  showPolaroid = false;
  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        this.hidePolaroidOnSmallScreen(result.matches)
      });
  }


  hidePolaroidOnSmallScreen(isSmall: boolean) {
    if (!isSmall) {
      this.showPolaroid = true;
      document.getElementById('polaroidLeft')?.classList.remove('centering');
    } else if (isSmall) {
      this.showPolaroid = false;
      document.getElementById('polaroidLeft')?.classList.add('centering');
    }
  }


}
