import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { FaGithub } from "react-icons/fa"

export const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Divider />
      <Stack mt={4} justify="space-between" direction="row" align="center">
        <Text fontSize="sm" color="subtle">
          Copyright &copy; {new Date().getFullYear()} Conception
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://github.com/roopeshsn/conception"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  )
}
