import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import QuestionCard from "./QuestionCard";
import { difficulties } from "./DifficultyList";
import WelcomeCard from "./WelcomeCard";

interface Props {
  category: string;
  difficulty: string;
}

const MainSection = ({ category, difficulty }: Props) => {
  if (!category && !difficulty) return <WelcomeCard />;
  return (
    <>
      <Heading
        marginBottom={8}
        size="2xl"
        color={difficulties.filter((i) => i.level === difficulty)[0].color}
      >
        {category}
      </Heading>
      <QuestionCard />
      <Button variant="ghost" colorScheme="green" marginTop={8} size="lg">
        Next
      </Button>
    </>
  );
};

export default MainSection;
