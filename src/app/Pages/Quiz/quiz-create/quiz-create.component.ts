import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/Model/quiz';
import { Trainer } from 'src/app/Model/trainer';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import { TrainerService } from 'src/app/Services/Trainer/trainer.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit{
  constructor(private trainerService: TrainerService,
              private quizService: QuizService){}

  trainers!: Trainer[];
  errors!:any [];

  myQuiz: Quiz = {
    score: 0,
    showAnswers: false,
    showFinalResults: false,
    chanceNum: 0,
    remark: '',
    trainerId: 0,
  }

  ngOnInit(){
    this.getTrainerLists()
  }

  saveQuizzes(){
    console.log(this.myQuiz);

    // var data = {
    //   score: this.myQuiz.score,
    //   showAnswers: this.myQuiz.showAnswers,
    //   showFinalResults: this.myQuiz.showFinalResults,
    //   chanceNum: this.myQuiz.chanceNum,
    //   remark: this.myQuiz.remark,
    //   trainerId: this.myQuiz.trainerId
    // }
    // console.log(data);


    this.quizService.saveQuiz(this.myQuiz).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert("created successfuly");
      },

      error: (err: any) => {
        this.errors = err;
        console.log(err.error.errors, 'errors');
      }
    })

    this.clearObject();

  }

  // getQuizzes(){
  //   this.quizService.getAllQuizzes().subscribe({

  //   })
  // }

  getTrainerLists(){
    this.trainerService.getTrainer().subscribe((res:any) => {
      console.log(res.Trainers);
      this.trainers = res.Trainers;
    });
  }


  clearObject(){
    this.myQuiz = {
      score: 0,
      showAnswers: false,
      showFinalResults: false,
      chanceNum: 0,
      remark: '',
      trainerId: 0,
    }
  }
}
