import { HStack, Button } from '@chakra-ui/react'
import React from 'react'

const difficulties = [
    "easy",
    "medium",
    "hard"
]

const DifficultyList = () => {
  return (
    <HStack>
        {difficulties.map((difficulty) => <Button>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Button>)}
    </HStack>
  )
}

export default DifficultyList