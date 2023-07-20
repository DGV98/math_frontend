import { HStack, Button } from "@chakra-ui/react";
import React from "react";

const difficulties = [
  { level: "Easy", color: "green" },
  { level: "Medium", color: "yellow" },
  { level: "Hard", color: "red" },
];

const DifficultyList = () => {
  return (
    <HStack>
      {difficulties.map((difficulty) => (
        <Button fontSize="sm" variant="ghost" colorScheme={difficulty.color}>
          {difficulty.level}
        </Button>
      ))}
    </HStack>
  );
};

export default DifficultyList;
