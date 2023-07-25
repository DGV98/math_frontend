import React, { useState } from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";

const QuestionCard = () => {
  const [question, setQuestion] = useState(
    "Click on a Category and Difficulty to start!"
  );
  return (
    <QuestionCardContainer>
      <Card>
        <CardBody>{question}</CardBody>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
