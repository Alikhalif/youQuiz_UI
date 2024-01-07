import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/app/Model/question';
import { LevelResponse, LevelService } from 'src/app/Services/Level/level.service';
import { QuestionResponse, QuestionService } from 'src/app/Services/Question/question.service';
import { SubjectResponse, SubjectService } from 'src/app/Services/Subject/subject.service';
import { LocalStorageService } from 'src/app/Services/local/local-storage.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit{
  constructor(
    private questionService: QuestionService,
    private subjectService: SubjectService,
    private levelService: LevelService,
    private localStorageService: LocalStorageService
    ){}

  myQuestion: Question = {
    id: 0,
    questionText: ' ',
    type: ' ',
    totalScore: 0,
    subjectId: 0,
    levelId: 0
  }

  question: Question[] = []

  questionTextResponse!: string;


  questions!: QuestionResponse[];
  subjects!: SubjectResponse[];
  levels!: LevelResponse[];

  errors: any = [];

///////////////////////






///////////////////////

  ngOnInit(){
    this.getSubjectLists();
    this.getLevelLists();
    // this.getDataLocal();
  }

  saveQuestionToLocal(): void {
    this.localStorageService.saveDataToLocal('questionObject', this.myQuestion);
    this.clearObject();
    this.getDataLocal();
  }

  getDataLocal(): void {
    this.myQuestion = this.localStorageService.getDataLocal('questionObject');
    if (this.myQuestion) {
      console.log('Question Object:', this.myQuestion);
      this.questionTextResponse = this.myQuestion.questionText;
    } else {
      console.log('No object found.');
    }
  }

  clearObject(){
    this.myQuestion = {
      id: 0,
      questionText: '',
      type: '',
      totalScore: 0,
      subjectId: 0,
      levelId: 0
    };
  }

  // saveQuestion(){
  //   var inputData = {
  //     questionText: this.questionService,
  //     type: this.type,
  //     totalScore: this.totalScore,
  //     subjectId: this.subjectId,
  //     levelId: this.levelId
  //   }

  //   this.questionService.saveQuestion(inputData).subscribe({
  //     next: (res: any) => {
  //         console.log(res, 'response');
  //     },

  //     error: (err: any) => {
  //       this.errors = err.error.errors;
  //       console.log(err.error.errors, 'errors');

  //     }
  //   })
  // }


  getSubjectLists(){
    this.subjectService.getAllSubjects().subscribe((res:any) => {
      console.log(res.Subjects);
      this.subjects = res.Subjects;
    });
  }

  getLevelLists(){
    this.levelService.getAllLevel().subscribe((res:any) => {
      console.log(res.Levels);
      this.levels = res.Levels;
    });
  }









}
