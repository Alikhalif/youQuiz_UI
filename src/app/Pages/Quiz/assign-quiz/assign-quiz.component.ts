import { Component } from '@angular/core';
import { AssignQuiz } from 'src/app/Model/assign-quiz';
import { Quiz } from 'src/app/Model/quiz';
import { Tempo } from 'src/app/Model/tempo';
import { AssignQuizService } from 'src/app/Services/Assign-quiz/assign-quiz.service';
import { QuestionResponse, QuestionService } from 'src/app/Services/Question/question.service';
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
              private assignQuizService: AssignQuizService,
              private questionService: QuestionService){}

  quizzes!:QuizResponse[];

  //assign quiz
  // id_quiz!:number;
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

  myAssignQuiz: AssignQuiz[] = [
    {
      id: 0,
      score: 0,
      result: 0,
      reason: '',
      debutDate: new Date() ,
      endDate: new Date(),
      student_id: 0,
      quiz_id: 0,
    }
  ]

  myTempo!: Tempo[] ;

  students!:StudentResponse[]
  questions!: QuestionResponse[]
  selectedQuestions: number[] = [];

  errors!:any[]


  ngOnInit(){
    this.getQuizzes();
    this.getStudent();
    this.getQuestionList();
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

  //Question List
  getQuestionList(){
    this.questionService.getQuestion().subscribe((res:any) => {
      console.log(res.Questions);
      this.questions = res.Questions;
    });
  }

  //check box
  toggleSelection(index: number): void {
    const questionId = this.questions[index].id;

    // Check if the question is already in the selectedQuestions array
    const isSelected = this.selectedQuestions.includes(questionId);

    // Toggle selection
    if (isSelected) {
      this.selectedQuestions = this.selectedQuestions.filter(id => id !== questionId);
    } else {
      this.selectedQuestions.push(questionId);
      // this.myTempo[index].question_id = questionId;
    }

    // Uncomment the line below to display selected question IDs for testing
    console.log(this.selectedQuestions);
    console.log(this.myTempo);

  }

  isCheckboxChecked(index: number): boolean {
    const questionId = this.questions[index].id;
    return this.selectedQuestions.includes(questionId);
  }

  saveQuestionAffecte(){

  }

  getQuizId(quiz:Quiz, id:number){
    console.log(this.myQuiz);
    this.myQuiz = quiz;
    this.quiz_id = id;

  }

  saveAssignQuiz(){
    console.log(this.myAssignQuiz);

    let data = [{
      id: this.quiz_id,
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
