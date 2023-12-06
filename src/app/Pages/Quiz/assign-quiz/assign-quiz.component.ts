import { Component } from '@angular/core';
import { QuizResponse, QuizService } from 'src/app/Services/Quiz/quiz.service';

@Component({
  selector: 'app-assign-quiz',
  templateUrl: './assign-quiz.component.html',
  styleUrls: ['./assign-quiz.component.css']
})
export class AssignQuizComponent {

  constructor(private quizService: QuizService){}

  quizzes!:QuizResponse[];

  ngOnInit(){
    this.getQuizzes();
  }

  getQuizzes(){
    this.quizService.getAllQuizzes().subscribe((res:any) => {
      console.log(res.Quizess);
      this.quizzes = res.Quizess;
    });
  }
}
