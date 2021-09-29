import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './components/about/about.component';
import { AboutExtraComponent } from './components/about/about-extra/about-extra.component';
import { AuthGuard } from './guards/auth.guard';
import { MainComponent } from './components/modules-training/main/main.component';
import { SecondaryModule } from './components/modules-training/secondary/secondary.module';

const routes: Routes = [
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },

  // work with modules
  { path: 'main', component: MainComponent },

  // protected route
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },

  // route with params
  { path: 'posts/:id', component: PostComponent },

  // route with protected child routes
  { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      { path: 'extra', component: AboutExtraComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    SecondaryModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    SecondaryModule,
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

// just for convenience, to use this array instead of listing out all the components in [app.module.ts] declarations array
export const routingComponents = [
  OneComponent,
  TwoComponent,
  ThreeComponent,
  FourComponent,
  PostsComponent,
  PostComponent,
  PageNotFoundComponent,
  AboutComponent,
  AboutExtraComponent,
  MainComponent
];
