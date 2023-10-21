import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { CardCreateAccountComponent } from './components/card-create-account/card-create-account.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomHttpInterceptor } from './shared/interceptor/http.interceptor';
import { LoadContentComponent } from './components/load-content/load-content.component';
import { LoadButtonComponent } from './components/load-button/load-button.component';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './shared/store/photo.reducer';
import { NotifierComponent } from './components/notifier/notifier.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    LoadContentComponent,
    LoadButtonComponent,
    NotifierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({ photos: photoReducer }),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
