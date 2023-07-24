import React from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";

interface Props {
  question: string;
}

const QuestionCard = ({ question }: Props) => {
  return (
    <QuestionCardContainer>
      <Card>
        <CardBody>{question}</CardBody>
      </Card>
      {/* <QuestionCardSkeleton /> */}
    </QuestionCardContainer>
  );
};

export default QuestionCard;
