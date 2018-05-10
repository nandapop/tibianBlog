import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '../../../translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-adventure-begins',
    templateUrl: './post-adventure-begins.component.html',
    styleUrls: ['./post-adventure-begins.component.scss']
})
export class PostAdventureBeginsComponent implements OnInit {
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
        if(lang === 'en') { return; }
        if(lang === 'es') { 
            this.router.navigate(["../aventura-comienza"], { relativeTo: this.route });
        }
    }
}
