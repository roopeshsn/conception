import React from "react"
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Switch,
  Text
} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/color-mode"
import Link from "next/link"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box pb={8}>
      <Flex justify="space-between" align="center" pt={1} pb={8}>
        <Heading>
          <Link href={`/`} passHref>
            <ChakraLink fontSize={18} textTransform="uppercase" fontWeight={700}>Conception</ChakraLink>
          </Link>
        </Heading>
        <Flex fontSize={14} direction='row' align="center">
          <Text>Light</Text>
          <Box mx={2}>
            <Switch colorScheme='brand' size='lg'
              isChecked ={colorMode === 'light' ? false : true}
              onChange={toggleColorMode}
              />
          </Box>
          <Text>Dark</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
