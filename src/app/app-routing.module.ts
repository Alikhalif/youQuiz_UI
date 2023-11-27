import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrainerCreateComponent } from './Pages/Trainer/trainer-create/trainer-create.component';
import { StudentCreateComponent } from './Pages/Student/student-create/student-create.component';
import { TrainerListComponent } from './Pages/Trainer/trainer-list/trainer-list.component';
import { HomePageComponent } from './Templates/home-page/home-page.component';
import { TrainerEditComponent } from './Pages/Trainer/trainer-edit/trainer-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'trainer', component: TrainerCreateComponent, title: 'Trainer Create' },
  { path: 'trainer-list', component: TrainerListComponent, title: 'Trainer List' },
  { path: 'trainer/edit/:id', component: TrainerEditComponent, title: 'Trainer Edit' },


  { path: 'student', component: StudentCreateComponent, title: 'Student Create' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
