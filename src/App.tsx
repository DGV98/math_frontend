import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import QuestionCard from "./components/QuestionCard";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";

export interface QuestionQuery {
  category: string;
  difficulty: string;
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [questionQuery, setQuestionQuery] = useState<QuestionQuery>(
    {} as QuestionQuery
  );
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
            {questionQuery.category}
          </Heading>
          <QuestionCard query={questionQuery} />
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
        changeDifficulty={(difficulty) =>
          setQuestionQuery({ ...questionQuery, difficulty })
        }
        changeCategory={(category) =>
          setQuestionQuery({ ...questionQuery, category })
        }
      />
    </Box>
  );
}

export default App;
