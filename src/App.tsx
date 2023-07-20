import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show, useDisclosure } from "@chakra-ui/react";
import QuestionCard from "./components/QuestionCard";
import NavBar from "./components/NavBar";
import SubjectList from "./components/SubjectList";
import SideDrawer from "./components/SideDrawer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="header">
          <NavBar openMenu={onOpen} />
        </GridItem>
        <GridItem area="main" marginBottom={3}>
          <QuestionCard question="Math Text" category="Calculus" />
        </GridItem>
        <GridItem area="footer" backgroundColor="red">
          Footer
        </GridItem>
      </Grid>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
