import { Heading } from "@chakra-ui/react";

const MdxComponents = {
  h1: (props) => <Heading as='h1' size='xl' my={4} {...props} />,
  h2: (props) => <Heading as='h2' size='lg' my={2} {...props} />,
};

export default MdxComponents;
