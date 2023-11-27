import { Component } from '@angular/core';
import { TrainerService } from 'src/app/Services/Trainer/trainer.service';

@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.css']
})
export class TrainerCreateComponent {

  constructor(private trainerService: TrainerService){}

  firstName! :string;
  lastName! :string;
  birthDate! :Date;
  address! :string;
  speciality! :string;

  errors: any = [];

  saveTrainer(){
    var inputData = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      address: this.address,
      speciality: this.speciality
    }

    this.trainerService.saveTrainer(inputData).subscribe({
      next: (res: any) => {
          console.log(res, 'response');
      },

      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');

      }
    })
  }
}
