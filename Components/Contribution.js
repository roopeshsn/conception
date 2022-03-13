import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Contribution() {
  const router = useRouter();
  return (
    <>
      <Box my={4}>
        <Flex
          direction='column'
          bgColor='papayawhip'
          borderRadius='lg'
          px={6}
          py={4}
        >
          <Text fontSize={{ base: "20px", md: "28px" }} fontWeight='medium'>
            Want to Contribute?
          </Text>
          <Text>
            Share you Ideas to the whole community by writing your ideas in
            Markdown
          </Text>
          <Box my={4}>
            <Button
              size='md'
              colorScheme='blackAlpha'
              color='white'
              bgColor='black'
              onClick={() => router.push("/contribution")}
            >
              Contribute Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
