import { Component, OnInit } from '@angular/core';
import { PostPreview } from '../post-preview/post-preview.model';
import { PostListService } from './post-list.service';
import { TranslateService } from '../../translate/translate.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts: PostPreview[] = [];
    constructor(private postListSrv: PostListService, private translateSrv: TranslateService) { }

    ngOnInit() {
        // TODO: Do we need to subscribe to language changes ?...
        this.posts = this.postListSrv.getPosts(this.translateSrv.language);
    }

}
