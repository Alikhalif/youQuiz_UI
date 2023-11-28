import { Component } from '@angular/core';
import { TrainerService, TrainerResponse } from 'src/app/Services/Trainer/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent {
  constructor(private trainerService:TrainerService){}

  trainers!: TrainerResponse[];

  ngOnInit(){
    this.getTrainerLists();
  }

  getTrainerLists(){
    this.trainerService.getTrainer().subscribe((res:any) => {
      console.log(res.Trainers);
      this.trainers = res.Trainers;
    });
  }

  // deleteTrainer(event:any, trainerId:Number){
  //     if(confirm('Are your sure you want to delete this ?')){
  //       event.target.innerText = "Deleting..."

  //       this.trainerService.deleteTrainer(trainerId).subscribe((res:any) => {
  //         this.getTrainerLists();
  //         alert("Successfully deleted");
  //       })
  //     }
  // }

}
