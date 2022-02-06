import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'who-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("scrollIntoViewHelper")
  scrollHelper: ElementRef<HTMLSpanElement> | undefined;

  title = 'whoami';
  selectedComponentFromCard = '';

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }

  private currentTheme = 'theme-light';


  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light';
    document.body.setAttribute('class', `${this.currentTheme} mat-typography`);
  }

  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light';
    document.body.setAttribute('class', `${this.currentTheme} mat-typography`);
    localStorage.setItem('activeTheme', this.currentTheme);
  }


  handleCardChange(recievedCardTitle: string) {
    setTimeout( ()=> {
      this.scrollHelper?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0 )

    this.selectedComponentFromCard = recievedCardTitle;
  }
}
