import { Component } from '@angular/core';
import { StudentResponse, StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  constructor(private studentService: StudentService){}

  students!: StudentResponse[];

  ngOnInit(){
    this.getStudentLists();
  }

  getStudentLists(){
    this.studentService.getAllStudent().subscribe((res:any) => {
      console.log(res);
      this.students = res;
    });
  }

  deleteStudent(event:any, studentId:Number){
    if(confirm('Are your sure you want to delete this ?')){
      event.target.innerText = "Deleting..."

      this.studentService.deleteStudent(studentId).subscribe((res:any) => {
        this.getStudentLists();
        alert("Successfully deleted");
      })
    }
}

}
