import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import MainSection from "./components/MainSection";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typeset();
    }
  }, []);

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
