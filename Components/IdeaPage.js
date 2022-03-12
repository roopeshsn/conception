import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

export default function IdeaPage({ children }) {
  return (
    <Container maxW='container.md'>
      <Navbar />
      {children}
    </Container>
  );
}
