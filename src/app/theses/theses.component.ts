import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'who-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.scss']
})
export class ThesesComponent implements OnInit, OnDestroy {
  panel1OpenState = false;
  panel2OpenState = false;
  destroyed = new Subject<void>();
  constructor(private breakpointObserver: BreakpointObserver) { }

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
      document.getElementById('polaroidLeft')?.classList.remove('hide');
    } else if (isSmall) {

      document.getElementById('polaroidLeft')?.classList.add('hide');
    }
  }

}
