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

  deleteSubject(event:any, subjectId:Number){
    if(confirm('Are your sure you want to delete this ?')){
      event.target.innerText = "Deleting..."

      this.subjectService.deleteSubject(subjectId).subscribe((res:any) => {
        this.getSubjectLists();
        alert("Successfully deleted");
      })
    }
  }
}
