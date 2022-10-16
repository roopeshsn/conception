import {
  Box,
  Container,
  Flex,
  Button,
  Text,
  Link as ChakraLink,
  Divider,
  Tag,
  Badge,
} from "@chakra-ui/react"
import React, { useState } from "react"
import Navbar from "./Navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { Footer } from "./Footer"

export default function CategoryPage({ ideas: inIdeas }) {
  const router = useRouter()
  // Original state
  const [ideas, setIdeas] = useState(inIdeas)

  // This state may vary depends on the selected tags
  const [filteredIdeas, setFilteredIdeas] = useState(inIdeas)

  // Processing tags from every idea posts and make it as unique because duplicates may have
  const tags = ideas.map((idea) => {
    return idea.tags
  })
  const tagsDuplicate = tags.flat(1)
  let uniqueTags = [...new Set(tagsDuplicate)]

  // To handle click event on the tags
  function handleClick(e) {
    e.preventDefault()
    let selectedTag = e.target.innerText
    let filtered = ideas.filter((idea) => {
      return idea.tags.includes(selectedTag)
    })
    setFilteredIdeas(filtered)
  }

  return (
    <Container maxW="container.md">
      <Navbar />
      <Box py={4}>
        <Button size="sm" onClick={() => router.push("/")}>
          Back to the collection
        </Button>
        <Box mt={4}>
          {uniqueTags.map((tag) => {
            return (
              <Button
                key={tag}
                mr={1}
                mt={1}
                size="sm"
                colorScheme="teal"
                onClick={handleClick}
              >
                {tag}
              </Button>
            )
          })}
        </Box>
        <Box mt={8}>
          {filteredIdeas &&
            filteredIdeas.map((idea) => {
              return (
                <Box key={idea.title}>
                  <Flex justify="space-between" align="center" my={4} gap={2}>
                    <Flex direction="column" flexGrow={1}>
                      <Link
                        href={`/${idea.category}/${idea.fileName.replace(
                          /\.mdx/,
                          "",
                        )}`}
                        passHref
                      >
                        <ChakraLink>
                          <Text
                            as="h2"
                            fontSize={{ base: "20px", md: "26px" }}
                            fontWeight="semibold"
                          >
                            {idea.title}
                          </Text>
                        </ChakraLink>
                      </Link>
                      <Text
                        my={2}
                        fontSize={{ base: "16px", md: "16px" }}
                        noOfLines={[1, 1]}
                      >
                        {idea.summary}
                      </Text>
                      <Box mt={1}>
                        <Badge colorScheme="yellow">{idea.category}</Badge>
                        <Box display="inline">
                          {idea.tags.map((tag) => (
                            <Tag
                              ml={1}
                              mt={1}
                              key={tag}
                              fontSize={{ base: "12px", md: "14px" }}
                            >
                              {tag}
                            </Tag>
                          ))}
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                  <Divider orientation="horizontal" />
                </Box>
              )
            })}
        </Box>
      </Box>
      <Footer />
    </Container>
  )
}
