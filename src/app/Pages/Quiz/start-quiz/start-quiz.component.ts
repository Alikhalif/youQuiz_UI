import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { AssignQuizResponse } from 'src/app/Model/AssignQuizResponse';

import { TempoResponse } from 'src/app/Model/TempoResponse';
import { AssignQuiz } from 'src/app/Model/assign-quiz';
import { ValidationResponse } from 'src/app/Model/validationResponse';
import { AssignQuizService } from 'src/app/Services/Assign-quiz/assign-quiz.service';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { TempoService } from 'src/app/Services/Tempo/tempo.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {
  // myAssignQuiz!:AssignQuiz;
  // public name: string = "";
  public questionList: TempoResponse[] = [];
  public validationList: ValidationResponse[]=[];
  public assignQuis!: AssignQuizResponse;
  public listValidation: any[]=[];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter: number=0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  quisId: any;
  studentId: any;
  AssignQuizId: any;


  myAssignQuiz:AssignQuiz={
    id: 0,
    score: 0,
    result: 0,
    reason: '',
    debutDate: new Date,
    endDate: new Date,
    student_id: 0,
    quiz_id: 0,
  }

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private tempoService: TempoService,
              private assignQuizService: AssignQuizService,
              // private assignQuiz:AssignQuiz,
              ) { }

  ngOnInit(): void {
    this.quisId = this.route.snapshot.paramMap.get('idQ');
    this.studentId = this.route.snapshot.paramMap.get('idS');
    this.AssignQuizId = this.route.snapshot.paramMap.get('idAQ');


    console.log(this.quisId);



    // this.name = localStorage.getItem("name")!;
    this.getAllQuestions(this.quisId);
    this.getAssignQuiz(this.AssignQuizId);
    // this.counter = this.questionList[this.currentQuestion].time;
    this.startCounter();
  }


  getAllQuestions(id_quiz:number) {
    this.tempoService.getTempoQuestion(id_quiz).subscribe((res:any) => {
      console.log(res.message);
      this.questionList = res.message;
      // this.counter = res.message

      for(let i=0; i<this.questionList.length; i++){
        this.questionService.getValidation(this.questionList[i].question_id).subscribe((res:any) => {
          // console.log(res.message);
          this.validationList = res.message;
          this.listValidation.push(this.validationList)
          // console.log(this.listValidation);

        });
      }

      console.log(this.listValidation);

      this.counter = this.questionList[this.currentQuestion].time;


    });

  }

  getAssignQuiz(AssignQuizId:number){
    this.assignQuizService.getOne(AssignQuizId).subscribe((res:any) => {
      console.log(res.message);
      this.assignQuis = res.message;
    });
  }

  nextQuestion() {
    console.log(this.currentQuestion);
    console.log(this.questionList.length-1);


    if(this.currentQuestion < this.questionList.length-1)
      this.currentQuestion++;
    this.counter = this.questionList[this.currentQuestion].time
    // this.getValidation(this.questionList[this.currentQuestion].question_id)
  }
  previousQuestion() {
    this.currentQuestion--;
    this.counter = this.questionList[this.currentQuestion].time
    // this.getValidation(this.questionList[this.currentQuestion].question_id)

  }
  answer(currentQno: number, option: any) {
    console.log(option.checkAnswar);

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.saveScoreQuiz();
      this.stopCounter();
    }
    if (option.checkAnswar) {
      this.points += option.points;
      console.log(this.points);

      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    }

  }
  startCounter() {
    if(!this.isQuizCompleted){
      this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = this.questionList[this.currentQuestion].time;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
    }

  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = this.questionList[this.currentQuestion].time;
    this.startCounter();
  }
  resetQuiz() {
    // this.resetCounter();
    // this.getAllQuestions(this.quisId);
    // this.points = 0;
    // this.counter = 60;
    // this.currentQuestion = 0;
    // this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }


  saveScoreQuiz(){
    console.log(this.points+"  score");

    this.myAssignQuiz={
      id: this.assignQuis.id,
      score: this.assignQuis.score,
      result: this.points,
      reason: this.assignQuis.reason,
      debutDate: this.assignQuis.debutDate,
      endDate: this.assignQuis.endDate,
      student_id: this.assignQuis.student.id,
      quiz_id: this.assignQuis.quiz.id,
    }
    if(this.isQuizCompleted){
      this.assignQuizService.updateAssign(this.myAssignQuiz, this.AssignQuizId).subscribe((res:any) => {
        console.log(res.message);
        this.assignQuis = res.message;
      });


    }
  }
}
