import { Component } from '@angular/core';
import { SubjectResponse, SubjectService } from 'src/app/Services/Subject/subject.service';


@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css'],
})
export class SubjectCreateComponent {

  constructor(private subjectService: SubjectService){}

  title! :string;
  parentId! :number;

  subjects!: SubjectResponse[];

  errors: any = [];

  ngOnInit(){
    this.getSubjectLists();
  }

  saveSubject(){
    var inputData = {
      title: this.title,
      parentId: this.parentId
    }

    this.subjectService.saveSubject(inputData).subscribe({
      next: (res: any) => {
          console.log(res, 'response');
      },

      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');

      }
    })
  }


  getSubjectLists(){
    this.subjectService.getAllSubjects().subscribe((res:any) => {
      console.log(res.Subjects);
      this.subjects = res.Subjects;
    });
  }


}
