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
  changeDifficulty: (difficulty: string) => void;
  changeCategory: (category: string) => void;
}

const SubjectList = ({ onClose, changeDifficulty, changeCategory }: Props) => {
  const { data, error, isLoading } = useSubjects();
  // console.log(data);
  return (
    <Accordion allowToggle>
      {data.map((subject) => (
        <AccordionItem key={subject}>
          <h2>
            <AccordionButton onClick={() => changeCategory(subject)}>
              <Box as="span" flex="1" textAlign="left">
                <Text>{subject}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={3}>
            <DifficultyList
              onClose={onClose}
              setDifficulty={changeDifficulty}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SubjectList;
