import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectResponse, SubjectService } from 'src/app/Services/Subject/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent {

  subjectId!: any;
  subject!: any;

  subjects!: SubjectResponse[];

  errors: any = [];

  constructor(private route: ActivatedRoute, private subjectService: SubjectService){}

  ngOnInit(){
    this.subjectId = this.route.snapshot.paramMap.get('id');

    this.subjectService.getOne(this.subjectId).subscribe((res:any) => {
        console.log(res);
        this.subject = res.Subject
    });
    this.getSubjectLists();
  }

  getSubjectLists(){
    this.subjectService.getAllSubjects().subscribe((res:any) => {
      console.log(res.Subjects);
      this.subjects = res.Subjects;
    });
  }

  updateSubject(){
    var inputData = {
      title: this.subject.title,
      parentId: this.subject.parentId,
    }

    this.subjectService.updateSubject(inputData, this.subjectId).subscribe({
      next:(res: any) => {
        console.log(res);
      },
      error:(err:any) => {
        console.log(err);
      }
    })

  }
}
