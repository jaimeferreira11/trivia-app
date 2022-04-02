export type RootStackParamList = {
  Welcome: undefined;
  Questions: undefined;
  Results: undefined;
};

export type QuestionResult = {
  data: Array<Question>;
  loading: boolean;
};

export interface Question {
  correctAnswer: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  number: number;
  text: string;
  answer: string;
  isCorrect: boolean;
}

export interface AppState {
  answerList?: Answer[];
}

export interface AppAction {
  type: string;
  payload: { answerList: Answer[] };
}
