import { Level } from "./level";
import { Subject } from "./subject";

export interface QuestionDtoResponse{
  id: number;
  questionText: string;
  type: string;
  totalScore: number;
  subject: Subject;
  level: Level;
  // List<MediaDto> medias;
}
