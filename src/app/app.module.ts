import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerCreateComponent } from './Pages/Trainer/trainer-create/trainer-create.component';
import { StudentCreateComponent } from './Pages/Student/student-create/student-create.component';
import { HeaderComponent } from './Templates/header/header.component';
import { ContentComponent } from './Templates/content/content.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { TrainerListComponent } from './Pages/Trainer/trainer-list/trainer-list.component';
import { HomePageComponent } from './Templates/home-page/home-page.component';
import { TrainerEditComponent } from './Pages/Trainer/trainer-edit/trainer-edit.component';
import { StudentListComponent } from './Pages/Student/student-list/student-list.component';
import { StudentEditComponent } from './Pages/Student/student-edit/student-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LevelCreateComponent } from './Pages/Level/level-create/level-create.component';
import { LevelListComponent } from './Pages/Level/level-list/level-list.component';
import { LevelEditComponent } from './Pages/Level/level-edit/level-edit.component';
import { SubjectCreateComponent } from './Pages/Subject/subject-create/subject-create.component';
import { SubjectListComponent } from './Pages/Subject/subject-list/subject-list.component';
import { SubjectEditComponent } from './Pages/Subject/subject-edit/subject-edit.component';
import { QuestionCreateComponent } from './Pages/Question/question-create/question-create.component';
import { ValidationComponent } from './Pages/Question/validation/validation.component';
import { TestComponent } from './Pages/Test/test/test.component';
import { QuizCreateComponent } from './Pages/Quiz/quiz-create/quiz-create.component';
import { QuizListComponent } from './Pages/Quiz/quiz-list/quiz-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerCreateComponent,
    StudentCreateComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TrainerListComponent,
    HomePageComponent,
    TrainerEditComponent,
    StudentListComponent,
    StudentEditComponent,
    LevelCreateComponent,
    LevelListComponent,
    LevelEditComponent,
    SubjectCreateComponent,
    SubjectListComponent,
    SubjectEditComponent,
    QuestionCreateComponent,
    ValidationComponent,
    TestComponent,
    QuizCreateComponent,
    QuizListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
