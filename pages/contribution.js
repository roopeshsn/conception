import { Box, Button, Container, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { Footer } from "../Components/Footer"
import Navbar from "../Components/Navbar"

export default function contribution() {
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Box my={4}>
        <Heading fontWeight="medium" fontSize={{ base: "24px", md: "32px" }}>
          Contribute to Conception
        </Heading>
        <Text mt={4}>
          Share you Ideas to the whole community by writing your ideas in a
          Markdown file. Here content is written in markdown and it is fully
          managed by MDX.
        </Text>
        <Text mt={2}>
          To use MDX with Next.js we use a plugin library called
          next-mdx-remote. Yeah, you&apos;re right! All of the content is also
          be a part in version control (Git and Github)
        </Text>
        <Text mt={2}>
          So, you can fork our repo, clone it on your local machine and add your
          idea by creating a new mdx file in any of the category or may be
          create a new category. And raise a PR!
        </Text>
        <Button
          my={6}
          as="a"
          target="_blank"
          href="https://github.com/roopeshsn/conception"
        >
          Start Contributing
        </Button>
      </Box>
      <Footer />
    </Container>
  )
}
