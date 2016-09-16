import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { Home } from './components/home.component';
import { Login } from './auth/login.component';
import { DatasetSelectComponent } from './dataset-select/dataset-select.component';
import { AuthGuard } from './auth/auth.guard';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DatasetSelectComponent,
    AboutComponent,
    ContactComponent,
    Home,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
