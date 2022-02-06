import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'who-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit , OnDestroy {
  destroyed = new Subject<void>();
  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
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
        this.hidePaddingOnSmallScreen(result.matches)
      });
  }


  hidePaddingOnSmallScreen(isSmall: boolean) {
    if (!isSmall) {
      document.getElementById('title')?.classList.remove('addPadding');
    } else if (isSmall) {
      document.getElementById('title')?.classList.add('addPadding');
    }
  }


}
