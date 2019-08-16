import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ExercisecontainerComponent } from './exercisecontainer/exercisecontainer.component';
import { TopinfoComponent } from './topinfo/topinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecontainerComponent,
    ExercisecontainerComponent,
    TopinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
