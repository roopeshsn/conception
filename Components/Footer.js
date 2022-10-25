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
    <Box as="footer" role="contentinfo" pt={{ base: "12", md: "16" }} pb={{base: "6", md: "8"}}>
      <Stack justify="space-between" direction="row" align="center">
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
