import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  studentId!: any;
  student!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService){}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.studentService.getOne(this.studentId).subscribe((res:any) => {
        console.log(res);
        this.student = res
    });
  }

  updateStudent(){
    var inputData = {
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      birthDate: this.student.birthDate,
      address: this.student.address,
      speciality: this.student.speciality
    }

    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next:(res: any) => {
        console.log(res);
      },
      error:(err:any) => {
        console.log(err);
      }
    })

  }


}
