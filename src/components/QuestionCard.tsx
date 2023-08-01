import React, { useEffect, useState } from "react";
import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import QuestionCardSkeleton from "./QuestionCardSkeleton";
import { useQuestion } from "../hooks/useQuestion";
import Latex from "react-latex-next";

interface Props {
  question?: string;
  isLoading: boolean;
}

const QuestionCard = ({ question, isLoading }: Props) => {
  // useEffect(() => {
  //   if (typeof window?.MathJax !== "undefined") {
  //     window.MathJax.typeset();
  //   }
  // }, []);
  return (
    <QuestionCardContainer>
      {!isLoading ? (
        <Card>
          <CardBody fontSize="2xl">
            <Latex>{question}</Latex>
          </CardBody>
        </Card>
      ) : (
        <QuestionCardSkeleton />
      )}
    </QuestionCardContainer>
  );
};

export default QuestionCard;
