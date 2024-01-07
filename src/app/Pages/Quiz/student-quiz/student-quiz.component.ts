import { Component } from '@angular/core';
import { Quiz } from 'src/app/Model/quiz';
import { AssignQuizResponse, AssignQuizService } from 'src/app/Services/Assign-quiz/assign-quiz.service';
import { QuizResponse, QuizService } from 'src/app/Services/Quiz/quiz.service';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent {

  constructor(private assignQuizService: AssignQuizService,
              private quizService: QuizService){}

  searchTerm: number = 0;
  quizzes!:AssignQuizResponse[];

  myQuiz: Quiz = {
    id:0,
    score: 0,
    showAnswers: false,
    showFinalResults: false,
    chanceNum: 0,
    remark: '',
    trainerId: 0,
  }

  quiz_id!:number


  search() {
    this.assignQuizService.getQuizOfStudent(this.searchTerm).subscribe((res:any) => {
      console.log(res.message);
      this.quizzes = res.message;
    });
    console.log('Searching for:', this.searchTerm);
  }

  getQuizId(quiz:Quiz, id:number){
    console.log(this.myQuiz);
    this.myQuiz = quiz;
    this.quiz_id = id;

  }

  getQuizzesOfStudent(id:number){
    this.assignQuizService.getQuizOfStudent(id).subscribe((res:any) => {
      console.log(res.message);
      this.quizzes = res.message;
    });
  }
}
