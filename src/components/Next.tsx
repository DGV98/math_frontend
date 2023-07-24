import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  setMathText: () => void;
}

const Next = () => {
  return (
    <Heading marginTop={7} size="lg" onClick={() => {}}>
      Next
    </Heading>
  );
};

export default Next;
