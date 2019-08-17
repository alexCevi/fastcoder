import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ExercisecontainerComponent } from './exercisecontainer/exercisecontainer.component';
import { TopinfoComponent } from './topinfo/topinfo.component';
import { JsexerciseComponent } from './jsexercise/jsexercise.component';
import { ExerciseareaComponent } from './exercisearea/exercisearea.component';
import { ExerciseDataProviderService } from './services/exercise-data-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecontainerComponent,
    ExercisecontainerComponent,
    TopinfoComponent,
    JsexerciseComponent,
    ExerciseareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExerciseDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
