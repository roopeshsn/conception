import { Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";

export default function IdeaPage({ children }) {
  const router = useRouter();
  return (
    <Container maxW='container.md'>
      <Navbar />

      <Button
        size='sm'
        onClick={() => router.push(`/${router.query.category}`)}
      >
        Back
      </Button>
      {children}
    </Container>
  );
}
