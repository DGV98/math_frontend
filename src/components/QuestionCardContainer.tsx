import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const QuestionCardContainer = ({children} : Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" margin={2}>{children}</Box>
  )
}

export default QuestionCardContainer