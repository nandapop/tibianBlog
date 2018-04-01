import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-post-rating',
    templateUrl: './post-rating.component.html',
    styleUrls: ['./post-rating.component.scss']
})
export class PostRatingComponent implements OnInit {
    @Input() postName;
    currentRate = 0;

    constructor() { }

    ngOnInit() {
    }

}
