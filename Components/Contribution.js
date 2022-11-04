import React from "react"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode"

export default function Contribution() {
  const boxBg = useColorModeValue('#FFFFFF', '#0D1B2A');
  const router = useRouter()
  return (
    <>
      <Box my={4}>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          bgColor={boxBg}
          borderRadius="lg"
          p={8}
          mt={6}
          boxShadow="0px 0px 15px rgba(255, 99, 71, 0.05)"
        >
          <Box>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="bold"
              mb={3}
            >
              Want to Contribute?
            </Text>
            <Text fontSize={{ base: "14px", md: "16px" }} >
              Share your Ideas to the whole community by writing your ideas in the
              Markdown
            </Text>
          </Box>
          <Box>
            <Button
              size="md"
              colorScheme="blackAlpha"
              color="white"
              bgColor="#FF6347"
              borderRadius="lg"
              fontWeight="normal"
              onClick={() => router.push("/contribution")}
            >
              Contribute Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
