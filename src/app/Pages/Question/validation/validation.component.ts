import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Answar } from 'src/app/Model/answar';
import { Question } from 'src/app/Model/question';
import { Media } from 'src/app/Model/media';

import { AnswarService } from 'src/app/Services/Answar/answar.service';
import { MediaService } from 'src/app/Services/Media/media.service';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { LocalStorageService } from 'src/app/Services/local/local-storage.service';
// import { Answar } from 'src/app/Model/answar/answar';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})


export class ValidationComponent {
  // answar = new Answar();
  constructor(private localStorageService: LocalStorageService,
              private questionService: QuestionService,
              private answarService: AnswarService,
              private mediaService:MediaService,
              ){}


  // mediaUrl: string ='';
  // mediaType: string = '';

  myAnswar: Answar = {
    answareText: '',
    points: 0,
    checkAnswar: false,
    question_id: 0
  }

  answar: Answar[] = []

  myQuestion: Question = {
    questionText: ' ',
    type: ' ',
    totalScore: 0,
    subjectId: 0,
    levelId: 0
  }

  question: Question[] = []

  myMedia: Media = {
    url: '',
    mediaType: '',
    question_id: 0
  }

  answarForm: FormGroup = new FormGroup({
    answarList: new FormArray([this.getAnswarFields()])
  });

  getAnswarFields(): FormGroup{
    return new FormGroup({
      answareText: new FormControl(''),
      points: new FormControl(''),
      checkAnswar: new FormControl(''),
      question_id: new FormControl(''),
    });
  }

  answarListArray(){
    return this.answarForm.get('answarList') as FormArray;
  }

  addAnswar(){
    if(this.answarListArray().length < 4){
      this.answarListArray().push(this.getAnswarFields());
    }else{
      alert("max 4 !")
    }
  }

  removeAnswar(i: number){
    this.answarListArray().removeAt(i);
  }

  getFormData(){
    const inputData = this.getDataLocal();

    const answarListArray = this.answarForm.get('answarList') as FormArray;


    if(answarListArray.length >= 2){
      if (inputData !== null) {
        this.questionService.saveQuestion(inputData).subscribe({
          next: (res: any) => {
              console.log(res.New_Question.id, 'response');

              //media
              if (this.myMedia.url != '' || this.myMedia.mediaType != '') {
                let data = {
                  url: this.myMedia.url,
                  mediaType: this.myMedia.mediaType,
                  question_id: res.New_Question.id
                }
                this.mediaService.saveMedia(data).subscribe({
                  next: (res: any) => {
                    console.log(res);
                  },
                  error: (err: any) => {
                    console.log(err);
                  }

                })
              }

              //add answars
              for (let i = 0; i < answarListArray.controls.length; i++) {
                let data = {
                  answareText: answarListArray.controls[i].get('answareText')!.value,
                  points: answarListArray.controls[i].get('points')!.value,
                  checkAnswar: answarListArray.controls[i].get('checkAnswar')!.value,
                  question_id: res.New_Question.id
                };

                console.log(data);
                this.answarService.saveAnswar(data).subscribe({
                  next: (res: any) => {
                    console.log(res.message);
                    console.log('add ');

                  },
                  error: (err: any) => {
                    console.log(err.error.errors, 'errors');

                  }
                })
              }
              

          },


          error: (err: any) => {
            console.log(err.error.errors, 'errors');

          }
        })
      }else{
        console.log('No data to save.');
      }
    }else{
      console.log("minimal 2 answar !");

    }



    console.log(this.answarForm.value);
  }

  //db

  getDataLocal(): Question | null {
    this.myQuestion = this.localStorageService.getDataLocal('questionObject');
    if (this.myQuestion) {
      console.log('Question Object:', this.myQuestion);
      // this.questionTextResponse = this.myQuestion.questionText;
      return this.myQuestion;
    } else {
      console.log('No object found.');
      return null;
    }
  }

  saveAnswar(){

  }

}




// export class Answar {
//   answareText: any;
//   points: any;
//   checkAnswar: any;
//   question_id: any;
// }
