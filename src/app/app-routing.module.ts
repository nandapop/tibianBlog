import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostWrapperComponent } from './posts/post-wrapper/post-wrapper.component';
import { PostAdventureBeginsComponent } from './posts/en/post-adventure-begins/post-adventure-begins.component';
import { PostAventuraComienzaComponent } from './posts/es/post-aventura-comienza/post-aventura-comienza.component';
import { PostChoosingVocationComponent } from './posts/en/post-choosing-vocation/post-choosing-vocation.component';
import { PostEligiendoVocacionComponent } from './posts/es/post-eligiendo-vocacion/post-eligiendo-vocacion.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'posts', pathMatch: 'full'},
    {path: 'posts', component: PostWrapperComponent, children: [
        {path: '', component: PostListComponent, pathMatch: 'full'},
        {path: 'adventure-begins', component: PostAdventureBeginsComponent},
        {path: 'aventura-comienza', component: PostAventuraComienzaComponent},
        {path: 'choosing-vocation', component: PostChoosingVocationComponent},
        {path: 'eligiendo-vocacion', component: PostEligiendoVocacionComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
