import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuizPageActions from './actions/quiz-page.action';
import * as QuizApiActions from './actions/quiz-api.action';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import { Quiz } from '../../Model/quiz';

@Injectable()
export class QuizEffect {
  constructor(private actions$: Actions, private QuizService: QuizService) {}

  loadQuizs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizPageActions.enter),
      exhaustMap(() =>
        this.QuizService
          .getAllQuizzes()
          .pipe(
            map((Quizs) =>
              QuizApiActions.QuizsLoadedSuccessfully({ Quizs })
            )
          )
      )
    )
  );

  createQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizPageActions.addQuiz),
      concatMap((action) =>
        this.QuizService
          .saveQuiz(action.Quiz)
          .pipe(
            map((addedQuiz) =>
              QuizApiActions.QuizAddedSuccessfully({ addedQuiz })
            )
          )
      )
    )
  );

  updateQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizPageActions.updateQuiz),
      concatMap((action) =>
        this.QuizService
          .updateQuiz(action.Quiz, action.QuizID)
          .pipe(
            map((updatedQuiz) =>
              QuizApiActions.QuizUpdatedSuccessfully({ updatedQuiz })
            )
          )
      )
    )
  );

  deleteQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizPageActions.deleteQuiz),
      mergeMap((action) =>
        this.QuizService.deleteQuiz(action.QuizID).pipe(
          map((response) =>
            QuizApiActions.QuizDeletedSuccessfully({
              message: response.message,
              QuizID: response.deletedElementIdentifier,
            })
          )
        )
      )
    )
  );
}
