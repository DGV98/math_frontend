import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid       
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}>
      <GridItem area="nav" backgroundColor="red">Nav</GridItem>
      <Show above='lg'>
        <GridItem area="aside"backgroundColor="green">Aside</GridItem>
      </Show>
      <GridItem area="main" backgroundColor="blue">Main</GridItem>
    </Grid>
  )
}

export default App
