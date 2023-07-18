import { HStack, Text } from '@chakra-ui/react'
import {BiMath} from "react-icons/bi"

const NavBar = () => {
  return (
    <HStack padding="10px" spacing="24px">
        <BiMath size={40}/>
        <Text fontSize="4xl">Math Problem Generator</Text>
    </HStack>
  )
}

export default NavBar