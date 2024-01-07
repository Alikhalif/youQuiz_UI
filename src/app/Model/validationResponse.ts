import { AnswarDtoResponse } from "./AnswarDtoResponse";
import { QuestionDtoResponse } from "./questionDtoResponse";

export interface ValidationResponse{
  id: number;
  question: QuestionDtoResponse;
  answar: AnswarDtoResponse;
  points: number;
  checkAnswar: boolean;
}
