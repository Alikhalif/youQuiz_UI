import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrainerCreateComponent } from './Pages/Trainer/trainer-create/trainer-create.component';
import { StudentCreateComponent } from './Pages/Student/student-create/student-create.component';
import { TrainerListComponent } from './Pages/Trainer/trainer-list/trainer-list.component';
import { HomePageComponent } from './Templates/home-page/home-page.component';
import { TrainerEditComponent } from './Pages/Trainer/trainer-edit/trainer-edit.component';
import { StudentListComponent } from './Pages/Student/student-list/student-list.component';
import { StudentEditComponent } from './Pages/Student/student-edit/student-edit.component';
import { LevelCreateComponent } from './Pages/Level/level-create/level-create.component';
import { LevelListComponent } from './Pages/Level/level-list/level-list.component';
import { LevelEditComponent } from './Pages/Level/level-edit/level-edit.component';
import { SubjectCreateComponent } from './Pages/Subject/subject-create/subject-create.component';
import { SubjectListComponent } from './Pages/Subject/subject-list/subject-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },

  //Trainer
  { path: 'trainer', component: TrainerCreateComponent, title: 'Trainer Create' },
  { path: 'trainer-list', component: TrainerListComponent, title: 'Trainer List' },
  { path: 'trainer/edit/:id', component: TrainerEditComponent, title: 'Trainer Edit' },

  //Student
  { path: 'student', component: StudentCreateComponent, title: 'Student Create' },
  { path: 'student-list', component: StudentListComponent, title: 'Student List'},
  { path: 'student/edit/:id', component: StudentEditComponent, title: 'Trainer Edit' },

  //Level
  { path: 'level', component: LevelCreateComponent, title: 'Level Create' },
  { path: 'level-list', component: LevelListComponent, title: 'Level List'},
  { path: 'level/edit/:id', component: LevelEditComponent, title: 'level Edit' },

  //Subject
  { path: 'subject', component: SubjectCreateComponent, title: 'Subject Create' },
  { path: 'subject-list', component: SubjectListComponent, title: 'Subject List'},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
