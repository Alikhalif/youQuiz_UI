import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuestionPageActions from './actions/question-page.action';
import * as QuestionApiActions from './actions/question-api.action';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs';
import { QuestionService } from 'src/app/Services/Question/question.service';

@Injectable()
export class QuestionEffect {
  constructor(private actions$: Actions, private QuestionService: QuestionService) {}

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionPageActions.enter),
      exhaustMap(() =>
        this.QuestionService
          .getQuestion()
          .pipe(
            map((Questions) =>
              QuestionApiActions.QuestionsLoadedSuccessfully({ Questions })
            )
          )
      )
    )
  );

  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionPageActions.addQuestion),
      concatMap((action) =>
        this.QuestionService
          .saveQuestion(action.Question)
          .pipe(
            map((addedQuestion) =>
              QuestionApiActions.QuestionAddedSuccessfully({ addedQuestion })
            )
          )
      )
    )
  );

  updateQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionPageActions.updateQuestion),
      concatMap((action) =>
        this.QuestionService
          .updateQuestion(action.Question, action.QuestionID)
          .pipe(
            map((updatedQuestion) =>
              QuestionApiActions.QuestionUpdatedSuccessfully({ updatedQuestion })
            )
          )
      )
    )
  );

  deleteQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionPageActions.deleteQuestion),
      mergeMap((action) =>
        this.QuestionService.deleteQuestion(action.QuestionID).pipe(
          map((response) =>
            QuestionApiActions.QuestionDeletedSuccessfully({
              message: response.message,
              QuestionID: response.deletedElementIdentifier,
            })
          )
        )
      )
    )
  );
}
