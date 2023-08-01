import { Button, Center, Heading, Spinner } from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";
import { useQuestion } from "../hooks/useQuestion";
import { useState } from "react";

interface Props {
  category: string;
  difficulty: string;
}

const MainSection = ({ category, difficulty }: Props) => {
  const [refetch, setRefetch] = useState(true);
  const [i, setI] = useState(0);
  // console.log(refetch);
  const { data, error, isLoading } = useQuestion(
    "generate",
    category,
    difficulty,
    refetch
  );
  if (error) return <h1>{error}</h1>;
  if (!data) return <h1>Oops! Something went wrong!</h1>;

  const question = data[i];

  return (
    <>
      <Heading marginBottom={8} size="2xl">
        {category}
      </Heading>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <QuestionCard question={question} />
      )}
      <Button
        variant="ghost"
        colorScheme="green"
        marginTop={8}
        size="lg"
        onClick={() => {
          if (isLoading) return;
          if (i === 8) {
            setRefetch(!refetch);
            setI(0);
          } else {
            setI(i + 1);
          }
        }}
      >
        Next
      </Button>
    </>
  );
};

export default MainSection;
