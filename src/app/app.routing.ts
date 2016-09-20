import { Routes } from '@angular/router';
import { Home } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { MatrixGraphContainerComponent } from './components/matrix-graph-container/matrix-graph-container.component';
import { Login } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',       component:  Home },
  { path: 'login',       component:  Login },
  { path: 'about',       component:  AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact',       component:  ContactComponent, canActivate: [AuthGuard] },
  { path: 'graph',  component: MatrixGraphContainerComponent },
  //{ path: 'signup', component: Signup },
  //{ path: 'home',   component: Home, canActivate: [AuthGuard] },
];
