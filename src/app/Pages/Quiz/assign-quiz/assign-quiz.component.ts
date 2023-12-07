import { Component } from '@angular/core';
import { AssignQuiz } from 'src/app/Model/assign-quiz';
import { Quiz } from 'src/app/Model/quiz';
import { AssignQuizService } from 'src/app/Services/Assign-quiz/assign-quiz.service';
import { QuizResponse, QuizService } from 'src/app/Services/Quiz/quiz.service';
import { StudentResponse, StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-assign-quiz',
  templateUrl: './assign-quiz.component.html',
  styleUrls: ['./assign-quiz.component.css']
})
export class AssignQuizComponent {

  constructor(private quizService: QuizService,
              private studentService: StudentService,
              private assignQuizService: AssignQuizService){}

  quizzes!:QuizResponse[];

  //assign quiz
  // id_quiz!:number;
  myQuiz: Quiz = {
    score: 0,
    showAnswers: false,
    showFinalResults: false,
    chanceNum: 0,
    remark: '',
    trainerId: 0,
  }

  quiz_id!:number

  myAssignQuiz: AssignQuiz[] = [
    {
    score: 0,
    result: 0,
    reason: '',
    debutDate: new Date() ,
    endDate: new Date(),
    student_id: 0,
    quiz_id: 0,
  }
]

  students!:StudentResponse[]

  errors!:any[]


  ngOnInit(){
    this.getQuizzes();
    this.getStudent();
  }

  getQuizzes(){
    this.quizService.getAllQuizzes().subscribe((res:any) => {
      console.log(res.Quizess);
      this.quizzes = res.Quizess;
    });
  }

  //Assign quiz
  getStudent(){
    this.studentService.getAllStudent().subscribe((res:any) => {
      console.log(res);
      this.students = res;
    });
  }


  getQuizId(quiz:Quiz, id:number){
    console.log(this.myQuiz);
    this.myQuiz = quiz;
    this.quiz_id = id;

  }

  saveAssignQuiz(){
    console.log(this.myAssignQuiz);

    let data = [{
      score: this.myQuiz.score,
      result: this.myAssignQuiz[0].result,
      reason: this.myAssignQuiz[0].reason,
      debutDate: this.myAssignQuiz[0].debutDate,
      endDate: this.myAssignQuiz[0].endDate,
      student_id: this.myAssignQuiz[0].student_id,
      quiz_id: this.quiz_id,

    }];
    console.log('id quiz',data[0].quiz_id);


    this.assignQuizService.saveAssign(data).subscribe({
      next: (res: any) => {
        console.log(res.message, 'response');
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error, 'errors');
      }
    })
  }


}
