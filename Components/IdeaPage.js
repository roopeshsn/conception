import { Box, Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";

export default function IdeaPage({ children }) {
  const router = useRouter();
  return (
    <Container maxW='container.md'>
      <Navbar />
      <Box my={4}>
        <Button
          size='sm'
          onClick={() => router.push(`/${router.query.category}`)}
        >
          {`Back to a list of ${router.query.category}`}
        </Button>
        {children}
      </Box>
    </Container>
  );
}
