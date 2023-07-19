import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, Box, AccordionItem, Text } from '@chakra-ui/react'
import React from 'react'
import DifficultyList from './DifficultyList'; 


interface Props {
  subjects: string[];
}

const SubjectList = ({subjects}: Props) => {
  return (
    <Accordion allowToggle>
      {subjects.map((subject) => 
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Text>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={3}>
            <DifficultyList/>
          </AccordionPanel>
        </AccordionItem>
      )}
      
    </Accordion>
  )
}

export default SubjectList;