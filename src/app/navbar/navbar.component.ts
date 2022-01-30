import {Component, Input, Output, EventEmitter} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import { files } from '../contact-info/contact-data'



@Component({
  selector: 'who-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Input()
  isDarkMode = false;

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();
  visitcard = 'John Doe\n';

  constructor(private breakpointObserver: BreakpointObserver) {
   this.createVisitCard();
  }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }


createVisitCard(){
  let names: Array<string> = [];
    files.map(file => {
      file.children.map(child => {
          names.push(child.name)
      })
    });
   let visitcard = names.join('\n');
   this.visitcard = this.visitcard + visitcard;
}

}
