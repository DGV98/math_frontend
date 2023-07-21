import { useState } from "react";
import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import QuestionCard from "./components/QuestionCard";
import NavBar from "./components/NavBar";
import SubjectList from "./components/SubjectList";
import SideDrawer from "./components/SideDrawer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  return (
    <Box minHeight="100vh">
      <Grid
        h="90vh"
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
          <Heading>{category}</Heading>
          <QuestionCard question="Math Text" category="Calculus" />
        </GridItem>
        <GridItem area="footer" backgroundColor="red">
          Footer
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
