import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate/translate.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private translateSrv: TranslateService) { }

    ngOnInit() {
    }

    changeLang(lang: string) {
        this.translateSrv.language = lang;
    }
}
