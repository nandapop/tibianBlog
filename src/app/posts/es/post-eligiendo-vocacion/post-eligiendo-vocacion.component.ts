import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '../../../translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-eligiendo-vocacion',
    templateUrl: './post-eligiendo-vocacion.component.html',
    styleUrls: ['./post-eligiendo-vocacion.component.scss']
})
export class PostEligiendoVocacionComponent implements OnInit {
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
            this.router.navigate(["../choosing-vocation"], { relativeTo: this.route });
        }
    }
}
