import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DifficultyList from "./DifficultyList";
import useSubjects from "../hooks/useSubjects";

interface Props {
  onClose: () => void;
}

const SubjectList = ({ onClose }: Props) => {
  const { data, error, isLoading } = useSubjects();
  // console.log(data);
  return (
    <Accordion allowToggle>
      {data.map((subject) => (
        <AccordionItem key={subject}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text>{subject}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={3}>
            <DifficultyList onClose={onClose} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SubjectList;
