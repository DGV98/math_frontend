import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import QuestionCard from "./components/QuestionCard";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import { useQuestion } from "./hooks/useQuestion";
import WelcomeCard from "./components/WelcomeCard";
import MainSection from "./components/MainSection";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <Box minHeight="90vh">
      <Grid
        h="90vh"
        templateAreas={{
          base: `"header" "main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="header">
          <NavBar openMenu={onOpen} />
        </GridItem>
        <GridItem area="main" marginBottom={3}>
          <MainSection category={category} difficulty={difficulty} />
        </GridItem>
      </Grid>
      <SideDrawer
        isOpen={isOpen}
        onClose={onClose}
        changeDifficulty={setDifficulty}
        changeCategory={setCategory}
      />
    </Box>
  );
}

export default App;
