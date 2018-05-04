import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    lang: string;
    
    constructor(private translateService: TranslateService) {}
    
    ngOnInit(): void {
        this.lang = this.translateService.language;
    }

    changeLang(lang: string) {
        this.translateService.language = lang;
        this.lang = lang;
    }

    
}
