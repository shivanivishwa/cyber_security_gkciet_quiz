export interface Question {
  id: number;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
}

export interface UserData {
  name: string;
  phone: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  userData: UserData | null;
  isComplete: boolean;
}
