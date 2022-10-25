import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Link as ChakraLink,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import React from "react"
import Navbar from "./Navbar"
import Link from "next/link"
import Contribution from "./Contribution"
import { Footer } from "./Footer"
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";

export default function HomePage({ categories }) {
  const boxBg = useColorModeValue('#FFFFFF', '#0D1B2A')
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Grid templateColumns="repeat(2, 1fr)" gap={7}>
        {categories.map((category) => {
          return (
            <GridItem
              minH="186px"
              key={category.title}
            >
              <Link
                minH="inherit"
                href={`/${category.href}`} flex passHref>
                <Box
                  bg={boxBg}
                  px={3}
                  py={3}
                  borderRadius="lg"
                  _hover={{ border: `2px solid ${category.title === "App Ideas" ? "#2A9D8F" : "#E76F51"}` }}
                  fontSize={{ base: "14px", md: "18px" }}
                  boxShadow="0px 0px 15px rgba(255, 99, 71, 0.05)"
                  cursor="pointer"
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  minH="inherit">
                  {
                    category.title === "App Ideas" ?
                      <FaLightbulb fontSize={41} color="#2A9D8F" /> :
                      <FaGraduationCap fontSize={41} color="#E76F51" />
                  }
                  <Text textTransform="uppercase" fontWeight="bold" mt={3}>
                    {category.title}
                  </Text>
                </Box>
              </Link>
            </GridItem>
          )
        })}
      </Grid>
      <Contribution />
      <Footer />
    </Container>
  )
}
