import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterService } from './_services/router.service';
import {  ErrorInterceptorProvider } from './_services/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      SignupComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent
   ],
   imports: [
	 BrowserModule,
	 HttpClientModule,
	 FormsModule,
	 BrowserAnimationsModule,
	 ReactiveFormsModule,
	 BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
	],
   providers: [
      ErrorInterceptorProvider,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
