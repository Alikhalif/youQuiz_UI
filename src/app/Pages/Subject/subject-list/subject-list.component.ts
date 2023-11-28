import { Component } from '@angular/core';
import { SubjectResponse, SubjectService } from 'src/app/Services/Subject/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {

  constructor(private subjectService: SubjectService){}

  subjects!: SubjectResponse[];

  ngOnInit(){
    this.getSubjectLists();
  }

  getSubjectLists(){
    this.subjectService.getAllSubjects().subscribe((res:any) => {
      console.log(res.Subjects);
      this.subjects = res.Subjects;
    });
  }

}
