import { Component } from '@angular/core';
import { Quiz } from 'src/app/Model/quiz';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {

  constructor(private quizService: QuizService){}

  quizzes!:Quiz[];

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
