import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '../../../translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-aventura-comienza',
    templateUrl: './post-aventura-comienza.component.html',
    styleUrls: ['./post-aventura-comienza.component.scss']
})
export class PostAventuraComienzaComponent implements OnInit {
    langChanges: Subscription;

    constructor(
        private langSrv: TranslateService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.checkLanguage(this.langSrv.language);
        this.langChanges = this.langSrv.languageChanged.subscribe((lang) => {
            this.checkLanguage(lang);
        });
    }

    ngOnDestroy() {
        this.langChanges.unsubscribe();
    }

    checkLanguage(lang) {
        if(lang === 'es') { return; }
        if(lang === 'en') { 
            this.router.navigate(["../adventure-begins"], { relativeTo: this.route });
        }
    }
}
