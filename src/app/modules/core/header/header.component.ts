import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { storedLanguageKey } from '../../../app.constants';
import { CountryInfoModel } from '../../../classes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countries: Array<CountryInfoModel>;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.countries = [
      { country: 'England', short: 'en' },
      { country: 'Slovakia', short: 'sk' }];
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem(storedLanguageKey, language);
  }

}
