import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '../../../translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-choosing-vocation',
    templateUrl: './post-choosing-vocation.component.html',
    styleUrls: ['./post-choosing-vocation.component.scss']
})
export class PostChoosingVocationComponent implements OnInit {
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
            this.router.navigate(["../eligiendo-vocacion"], { relativeTo: this.route });
        }
    }
}
