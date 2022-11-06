import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import {ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailComponent } from './posts/posts-detail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './auth/auth.service';
import { PostService } from './posts/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostsDetailComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [AuthGuard, AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
