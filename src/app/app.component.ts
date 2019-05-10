import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, storedLanguageKey } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'refresher';

  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang(defaultLanguage);
    const lang = localStorage.getItem(storedLanguageKey);
    if (lang) {
      translate.use(lang);
    } else {
      localStorage.setItem(storedLanguageKey, defaultLanguage);
      translate.use(defaultLanguage);
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
