import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ExerciseareaComponent } from './exercisearea/exercisearea.component';
import { ExercisecontainerComponent } from './exercisecontainer/exercisecontainer.component';
import { SelectviewComponent } from './selectview/selectview.component';

const routes: Routes = [
  { path: '', component: HomecontainerComponent },
  { path: 'select', component: SelectviewComponent },
  { path: 'train', component: ExerciseareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
