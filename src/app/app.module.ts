import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShuleComponent } from './shule/shule.component';
import {FormsModule} from '@angular/forms';
import { ShuleDetailComponent } from './shule-detail/shule-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ShuleSearchComponent } from './shule-search/shule-search.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { fakeBackendProvider } from './helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './helpers';



@NgModule({
  declarations: [
    AppComponent,
    ShuleComponent,
    ShuleDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ShuleSearchComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
