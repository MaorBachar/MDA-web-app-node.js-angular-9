import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Npms
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Authorization/token.interceptor';
import { AuthGuardService as AuthGuard } from './Authorization/auth-guard.service';
import { AuthService } from './Authorization/Auth.service';

// Angular Material.io
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';

// Services
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { DataService } from './Services/data.service';
import { GlobalsService } from './Services/globals';
import { RequestService } from './Services/ApiRequests/RequestService';
import { GenericRequestHandler } from './Services/ApiRequests/GenericRequestHandler';

// Components
import { AuthComponent } from './Components/Auth/auth.component';
import { HomeLayoutComponent } from './Components/HomeLayout/home-layout.component';
import { EditorComponent } from './Components/HomeLayout/EditorComponent/editor.component';
import { MenuComponent } from './Components/HomeLayout/MenuComponent/menu.component';
import { EmailComponent } from './Components/HomeLayout/MenuComponent/EmailComponent/email.component';
import { ArchiveComponent } from './Components/HomeLayout/ArchiveComponent/archive.component';

// Common Components
import { MainHeaderComponent } from './Components/Common/MainHeader/mainheader.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    MainHeaderComponent,
    AuthComponent,
    EditorComponent,
    MenuComponent,
    EmailComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    DataService,
    RequestService,
    GenericRequestHandler,
    CookieService,
    GlobalsService,
    AuthGuard,
    AuthService,
    { provide: CookieOptions, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
