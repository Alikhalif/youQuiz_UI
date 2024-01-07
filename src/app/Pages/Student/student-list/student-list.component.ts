import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentResponse, StudentService } from 'src/app/Services/Student/student.service';
import * as studentPageActions from '../../../store/student-state/actions/student-page.action';
import * as studentApiActions from '../../../store/student-state/actions/student-api.action';
import { Student } from 'src/app/Model/student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  // studentList: Student[]=[];
  studentsList$: Observable<Student[]> | null=null
  currentStudent: Student | null = null;
  total: number = 0;

  constructor(private studentService: StudentService,
            private store:Store){

    // this.students$ =
  }

  students!: StudentResponse[];

  ngOnInit(): void{
    //this.getStudentLists();

    console.log(    this.store.dispatch(studentPageActions.enter())
    );

     this.getStudents()



    // this.studentsState$.subscribe((state) => {
    //   console.log('Updated state:', state);
    // });
  }

  getStudents(){
    this.studentService.getAllStudent().subscribe((students)=>{
      this.store.dispatch(studentPageActions.enter())
    })
  }

  onGetAllStudents(){
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


  onSelect(student: Student){
    this.store.dispatch(studentPageActions.selectStudent({ StudentID: student.id }))

    this.currentStudent = student;
  }

  onCancel(){
    this.removeSelectStudent()
  }

  removeSelectStudent(){
    this.store.dispatch(studentPageActions.unselectStudent());

    this.currentStudent=null;
  }

}
