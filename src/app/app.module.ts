import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CardCreateAccountComponent } from './components/card-create-account/card-create-account.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    CardCreateAccountComponent,
    CardLoginComponent,
    LoginComponent,
    HomeComponent,
    CardPhotoComponent,
    AddPhotoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
