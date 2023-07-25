import React, { useState } from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";

const QuestionCard = () => {
  const [question, setQuestion] = useState("");
  return (
    <QuestionCardContainer>
      <Card>
        <CardBody>{question}</CardBody>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
