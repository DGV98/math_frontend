import { Button, Heading } from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";
import { difficulties } from "./DifficultyList";
import WelcomeCard from "./WelcomeCard";
import { useQuestion } from "../hooks/useQuestion";
import apiClient from "../services/api-client";
import { useState } from "react";

interface Props {
  category: string;
  difficulty: string;
}

const MainSection = ({ category, difficulty }: Props) => {
  if (!difficulty) return <WelcomeCard />;
  const { data, error, isLoading } = useQuestion(
    "generate",
    category,
    difficulty
  );
  const [i, setI] = useState(1);
  const question = data.at(i);
  // if (error) return <p>{error}</p>;
  // console.log(data);
  return (
    <>
      <Heading marginBottom={8} size="2xl">
        {category}
      </Heading>
      <QuestionCard question={question} isLoading={false} />
      <Button
        variant="ghost"
        colorScheme="green"
        marginTop={8}
        size="lg"
        // onClick={() => setI(i + 1)}
      >
        Next
      </Button>
    </>
  );
};

export default MainSection;
