import { useEffect } from "react";
import { useState } from "react";
import { getQuestions } from "../helpers/getQuestions";
import { QuestionResult } from "../interfaces/interfaces";

export const useFetchQuestions = () => {
  const [state, setState] = useState<QuestionResult>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getQuestions().then((data) =>
      setState({
        data: data.questions,
        loading: false,
      })
    );
  }, []);

  return state;
};
