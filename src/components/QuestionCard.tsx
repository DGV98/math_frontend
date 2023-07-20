import React from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

interface Props {
  question: string;
  category: string;
}

const QuestionCard = ({ question, category }: Props) => {
  return (
    <QuestionCardContainer>
      <Card>
        <CardHeader paddingBottom={1} fontSize="2xl">
          {category}
        </CardHeader>
        <CardBody>{question}</CardBody>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
