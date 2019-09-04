import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ExercisecontainerComponent } from './exercisecontainer/exercisecontainer.component';
import { TopinfoComponent } from './topinfo/topinfo.component';
import { JsexerciseComponent } from './jsexercise/jsexercise.component';
import { ExerciseareaComponent } from './exercisearea/exercisearea.component';
import { ExerciseDataProviderService } from './services/exercise-data-provider.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HtmlexerciseComponent } from './htmlexercise/htmlexercise.component';
import { AutofocusModule } from 'angular-autofocus-fix';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecontainerComponent,
    ExercisecontainerComponent,
    TopinfoComponent,
    JsexerciseComponent,
    ExerciseareaComponent,
    HtmlexerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollToModule.forRoot(),
    AutofocusModule,
    HttpClientModule
  ],
  providers: [ExerciseDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
