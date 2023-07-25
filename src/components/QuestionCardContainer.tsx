import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const QuestionCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={30} overflow="hidden" margin={2}>
      {children}
    </Box>
  );
};

export default QuestionCardContainer;
