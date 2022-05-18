import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainTemplateModule } from './core/main-template/main-template.module';
import { FilmsModule } from './films/films.module';
import { StarWarService } from './shared/services/micro-services/starwar-service';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MainTemplateModule,
    FilmsModule,
    HttpClientModule,
  ],
  providers: [ StarWarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
