import { Component } from '@angular/core';
import { LevelService } from 'src/app/Services/Level/level.service';

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.css']
})
export class LevelCreateComponent {
  constructor(private levelService: LevelService) { }

  maxScore!: number;
  minScore!: number;
  description!: string;


  errors : any = [];

  saveLevel(){
    var inputData = {
      maxScore: this.maxScore,
      minScore: this.minScore,
      description: this.description,
    }

    this.levelService.saveLevel(inputData).subscribe({
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
