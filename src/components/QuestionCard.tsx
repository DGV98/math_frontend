import React from 'react'
import QuestionCardContainer from './QuestionCardContainer'
import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react'

interface Props {
    question: string;
}

const problems = [
    {
        "problem": "Find the limit of \(f(x) = \frac{\sin(x)}{x}\) as \(x\) approaches 0."
    },
    {
        "problem": "Calculate the second deivative of \(f(x) = \ln(2x^3 - 4x^2 + 5x - 1)\)."
    },
    {
        "problem": "Compute the integral \(\int \frac{x^2 + 3x + 1}{x^3 + 2x^2 + 1} dx\)."
    },
    {
        "problem": "Determine the absolute maximum and minimum of \(f(x) = x^4 - 4x^3 + 6x^2 + 8\) on the interval \([-1, 2]\)."
    },
    {
        "problem": "Find the volume of the solid obtained by rotating the region bounded by \(y = \cos(x)\), \(y = 0\), \(x = 0\), and \(x = \frac{\pi}{2}\) about the x-axis."
    }
]

const QuestionCard = () => {
  return (
    <QuestionCardContainer>
        <Card>
            <CardHeader fontSize="2xl">
                Calculus
            </CardHeader>
            <CardBody>
                
            </CardBody>
        </Card>
    </QuestionCardContainer>
  )
}

export default QuestionCard