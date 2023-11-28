import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from 'src/app/Services/Level/level.service';

@Component({
  selector: 'app-level-edit',
  templateUrl: './level-edit.component.html',
  styleUrls: ['./level-edit.component.css']
})
export class LevelEditComponent {
  levelId!: any;
  level!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private levelService: LevelService){}

  ngOnInit(){
    this.levelId = this.route.snapshot.paramMap.get('id');

    this.levelService.getOne(this.levelId).subscribe((res:any) => {
        console.log(res);
        this.level = res.Level;
    });
  }

  updateLevel(){
    var inputData = {
      maxScore: this.level.maxScore,
      minScore: this.level.minScore,
      description: this.level.description,
    }

    this.levelService.updateLevel(inputData, this.levelId).subscribe({
      next:(res: any) => {
        console.log(res);
      },
      error:(err:any) => {
        console.log(err);
      }
    })

  }

}
