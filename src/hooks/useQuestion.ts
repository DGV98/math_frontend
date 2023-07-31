import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QuestionQuery } from "../App";

interface Question {
  question: string;
}

export const useQuestion = (query: QuestionQuery) => {
  const fetchQuestion = () =>
    axios
      .post("http://127.0.0.1:5000/api/generate", {
        params: {
          category: query.category,
          difficulty: query.difficulty,
        },
      })
      .then((res) => res.data);
  return useQuery<Question, Error>({
    queryKey: ["question", query],
    queryFn: fetchQuestion,
  });
};
