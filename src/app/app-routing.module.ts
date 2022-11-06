import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsDetailComponent } from './posts/posts-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'posts',
    canActivate: [AuthGuard],
    component: PostsComponent,
  },
  {
    path:'posts/:postId',
    canActivate: [AuthGuard],
    component: PostsDetailComponent
  },
  {
    path:'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}