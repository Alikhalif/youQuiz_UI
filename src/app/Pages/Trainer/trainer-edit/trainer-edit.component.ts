import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from 'src/app/Services/Trainer/trainer.service';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.css']
})
export class TrainerEditComponent {

  trainerId!: any;
  trainer!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private trainerService: TrainerService){}

  ngOnInit(){
    this.trainerId = this.route.snapshot.paramMap.get('id');

    this.trainerService.getOne(this.trainerId).subscribe((res:any) => {
        console.log(res);
        this.trainer = res.trainer
    });
  }

  updateTrainer(){
    var inputData = {
      firstName: this.trainer.firstName,
      lastName: this.trainer.lastName,
      birthDate: this.trainer.birthDate,
      address: this.trainer.address,
      speciality: this.trainer.speciality
    }

    this.trainerService.updateTrainer(inputData, this.trainerId).subscribe({
      next:(res: any) => {
        console.log(res);
      },
      error:(err:any) => {
        console.log(err);
      }
    })
  }
}
