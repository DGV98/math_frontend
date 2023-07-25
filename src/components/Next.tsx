import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  setMathText: (question: string) => void;
}

const Next = ({ setMathText }: Props) => {
  return (
    <Heading marginTop={7} size="lg" onClick={() => {}}>
      Next
    </Heading>
  );
};

export default Next;
