import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import QuestionCard from './components/QuestionCard'
import NavBar from './components/NavBar'
import SubjectList from './components/SubjectList'

function App() {

  return (
    <Grid       
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}>
      <GridItem area="header" >
        <NavBar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5} paddingY={3}>
          <SubjectList subjects={["algebra", "calculus"]}/>
        </GridItem>
      </Show>
      <GridItem area="main"><QuestionCard/></GridItem>
    </Grid>
  )
}

export default App
