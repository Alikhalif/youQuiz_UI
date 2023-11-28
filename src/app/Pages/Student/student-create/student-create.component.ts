import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/Student/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  constructor(private studentService: StudentService){}

  firstName! :string;
  lastName! :string;
  birthDate! :Date;
  address! :string;
  dateInscription! :Date;

  errors: any = [];

  SaveStudent(){
    var inputData = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      address: this.address,
      dateInscription: this.dateInscription
    }

    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
          console.log(res, 'response');
      },

      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
      }

    });

  }


}
