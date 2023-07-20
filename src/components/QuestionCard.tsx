import React from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";

interface Props {
  question: string;
  category: string;
}

const QuestionCard = ({ question, category }: Props) => {
  return (
    <QuestionCardContainer>
      <Card>
        <CardHeader fontSize="2xl">{category}</CardHeader>
        <CardBody>{question}</CardBody>
        <CardFooter></CardFooter>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
