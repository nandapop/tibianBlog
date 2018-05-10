import { Component, OnInit } from '@angular/core';
import { PostPreview } from '../post-preview/post-preview.model';
import { PostListService } from './post-list.service';
import { TranslateService } from '../../translate/translate.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts: PostPreview[] = [];
    langChanges: Subscription;

    constructor(private postListSrv: PostListService, private translateSrv: TranslateService) { }

    ngOnInit() {
        this.posts = this.postListSrv.getPosts(this.translateSrv.language);
        this.langChanges = this.translateSrv.languageChanged.subscribe((lang) => {
            this.posts = this.postListSrv.getPosts(lang);
        });
    }

    ngOnDestroy() {
        this.langChanges.unsubscribe();
    }
}
