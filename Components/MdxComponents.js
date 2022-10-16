import { Heading, Text } from "@chakra-ui/react"

const MdxComponents = {
  h1: (props) => (
    <Heading as="h1" size="xl" fontWeight="medium" my={4} {...props} />
  ),
  h2: (props) => <Heading as="h2" size="md" fontWeight="medium" {...props} />,
  p: (props) => <Text fontSize="md" my={2} {...props} />,
}

export default MdxComponents
