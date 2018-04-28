import { Component, OnInit, Input } from '@angular/core';
import { PostPreview } from './post-preview.model';
@Component({
    selector: 'app-post-preview',
    templateUrl: './post-preview.component.html',
    styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
    @Input() postPreview: PostPreview;

    constructor() { }

    ngOnInit() {
    }

}
