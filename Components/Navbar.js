import React from "react"
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/color-mode"
import Link from "next/link"

export default function Navbar() {
  const { toggleColorMode } = useColorMode()
  return (
    <Box>
      <Flex justify="space-between" align="center" py={4}>
        <Box>
          <Heading fontSize="2xl" fontWeight={500}>
            <Link href={`/`} passHref>
              <ChakraLink>Conception</ChakraLink>
            </Link>
          </Heading>
        </Box>
        <Button size="sm" color="gray.500" onClick={toggleColorMode}>
          Switch Theme
        </Button>
      </Flex>
    </Box>
  )
}
