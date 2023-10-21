import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authorizationGuard } from './shared/guards/authorization.guard';

const routes: Routes = [
  {
    path: 'create-account',
    component: CreateAccountComponent,
    title: 'Create account',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '', component: HomeComponent, title: 'Welcome to your Photo Gallery',canActivate: [authorizationGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
