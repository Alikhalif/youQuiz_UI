import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    LevelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
