import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-post-footer',
    templateUrl: './post-footer.component.html',
    styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {
    @Input() postName;

    constructor() { }

    ngOnInit() {
        console.log("the post name", this.postName);
        if (!this.postName) throw new Error();
    }

}
