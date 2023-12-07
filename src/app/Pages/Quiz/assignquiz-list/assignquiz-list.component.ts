import { Component } from '@angular/core';
import { AssignQuizResponse, AssignQuizService } from 'src/app/Services/Assign-quiz/assign-quiz.service';

@Component({
  selector: 'app-assignquiz-list',
  templateUrl: './assignquiz-list.component.html',
  styleUrls: ['./assignquiz-list.component.css']
})
export class AssignquizListComponent {

  constructor(private assignQuizService: AssignQuizService){}

  Assignquizzes!:AssignQuizResponse[];

  ngOnInit(){
    this.getAssignQuizzes();
  }

  getAssignQuizzes(){
    this.assignQuizService.getAllAssigns().subscribe((res:any) => {
      console.log(res.all_assignements);
      this.Assignquizzes = res.all_assignements;
    });
  }

  deleteQuiz(id: number){
    this.assignQuizService.deleteAssign(id).subscribe({
      next:(value)=>{
        alert("Deleted Successfully");
        this.getAssignQuizzes();
      }

    })
  }
}
