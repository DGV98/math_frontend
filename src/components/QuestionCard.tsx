import React from 'react'
import QuestionCardContainer from './QuestionCardContainer'
import { Card, CardBody, Text } from '@chakra-ui/react'

const QuestionCard = () => {
  return (
    <QuestionCardContainer>
        <Card>
            <CardBody>
                <Text>Math</Text>
            </CardBody>
        </Card>
    </QuestionCardContainer>
  )
}

export default QuestionCard