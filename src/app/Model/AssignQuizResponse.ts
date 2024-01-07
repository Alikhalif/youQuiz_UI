import { Quiz } from "./quiz";
import { Student } from "./student";

export interface AssignQuizResponse {
  id: number;
  score: number;
  result: number;
  reason: string;
  debutDate: Date;
  endDate: Date;
  student: Student;
  quiz: Quiz;
}
