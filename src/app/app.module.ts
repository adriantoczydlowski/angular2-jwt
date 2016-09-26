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
import { keyValueFilterPipe } from './components/about.component';
import { MatrixGraphComponent } from './components/matrix-graph/matrix-graph.component';
import { MatrixGraphContainerComponent } from './components/matrix-graph-container/matrix-graph-container.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetSelectComponent,
    AboutComponent,
    keyValueFilterPipe,
    ContactComponent,
    Home,
    Login,
    MatrixGraphComponent,
    MatrixGraphContainerComponent,
    BarChartComponent,
    CheckboxComponent
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
