import { Component } from '@angular/core';
import { LevelResponse, LevelService } from 'src/app/Services/Level/level.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.css']
})
export class LevelListComponent {
  constructor(private levelService:LevelService){}

  levels!: LevelResponse[];

  ngOnInit(){
    this.getLevelLists();
  }

  getLevelLists(){
    this.levelService.getAllLevel().subscribe((res:any) => {
      console.log(res.Levels);
      this.levels = res.Levels;
    });
  }

  deleteLevel(event:any, levelId:Number){
    if(confirm('Are your sure you want to delete this ?')){
      event.target.innerText = "Deleting..."

      this.levelService.deleteLevel(levelId).subscribe((res:any) => {
        this.getLevelLists();
        alert("Successfully deleted");
      })
    }
  }
}
