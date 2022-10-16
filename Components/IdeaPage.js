import { Box, Button, Container, Tag, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import Navbar from "./Navbar"
import formatStringToArray from "../utils/formatStringToArray"
import { Footer } from "./Footer"

export default function IdeaPage({ children }) {
  const router = useRouter()

  let tagsString = children.props.frontmatter.tags
  const formattedTags = formatStringToArray(tagsString)

  return (
    <Container maxW="container.md">
      <Navbar />
      <Box mt={4}>
        <Button
          size="sm"
          onClick={() => router.push(`/${router.query.category}`)}
        >
          {`Back to a list of ${router.query.category}`}
        </Button>
        <Box mt={8}>{children}</Box>
        <Box>
          <Text display="inline">Tags: </Text>
          <Box display="inline">
            {formattedTags.map((tag) => {
              return (
                <Tag key={tag} ml={1}>
                  {tag}
                </Tag>
              )
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Container>
  )
}
