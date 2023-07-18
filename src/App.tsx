import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import QuestionCard from './components/QuestionCard'
import NavBar from './components/NavBar'

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
        <GridItem area="aside"backgroundColor="green">Aside</GridItem>
      </Show>
      <GridItem area="main"><QuestionCard/></GridItem>
    </Grid>
  )
}

export default App
