import { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
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
          <Heading marginBottom={8} size="2xl">
            {category}
          </Heading>
          <QuestionCard
            question="Find the derivative of the function \( f(x) = 3x^2 + 2x + 1 \)."
            category="Calculus"
          />
          <Heading marginTop={8} size="lg">
            Next
          </Heading>
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
