import React, { useState } from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";
import { useQuestion } from "../hooks/useQuestion";
import { QuestionQuery } from "../App";

interface Props {
  query: QuestionQuery;
}

const QuestionCard = ({ query }: Props) => {
  const { data, error, isLoading } = useQuestion(query);

  if (error) return <p>{error.message}</p>;
  return (
    <QuestionCardContainer>
      <Card>
        <CardBody fontSize="2xl">{data?.question}</CardBody>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
