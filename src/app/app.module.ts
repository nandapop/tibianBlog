import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisqusModule } from 'ngx-disqus';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CommentComponent } from './posts/comment/comment.component';
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';
import { PostWrapperComponent } from './posts/post-wrapper/post-wrapper.component';
import { TranslateService } from './translate/translate.service';
import { PostAdventureBeginsComponent } from './posts/en/post-adventure-begins/post-adventure-begins.component';
import { PostAventuraComienzaComponent } from './posts/es/post-aventura-comienza/post-aventura-comienza.component';
import { PostChoosingVocationComponent } from './posts/en/post-choosing-vocation/post-choosing-vocation.component';
import { PostEligiendoVocacionComponent } from './posts/es/post-eligiendo-vocacion/post-eligiendo-vocacion.component';
import { PostListService } from './posts/post-list/post-list.service';
import { PostFooterComponent } from './posts/post-footer/post-footer.component';
import { PostRatingComponent } from './posts/post-rating/post-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CommentComponent,
    PostListComponent,
    PostPreviewComponent,
    PostWrapperComponent,
    PostAdventureBeginsComponent,
    PostChoosingVocationComponent,
    PostAventuraComienzaComponent,
    PostEligiendoVocacionComponent,
    PostFooterComponent,
    PostRatingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DisqusModule.forRoot('http-tibianlife-com'),
    AppRoutingModule
  ],
  providers: [TranslateService, PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
