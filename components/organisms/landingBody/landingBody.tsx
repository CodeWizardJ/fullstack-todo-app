import {
  Box,
  Container,
  Flex,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export const LandingBody = () => {
  return (
    <Container height={'830px'}>
      <SimpleGrid columns={2} spacing="40px" padding="200px 24px">
        <Box>
          <Box
            backgroundColor="gray.300"
            width="100%"
            height="255px"
            borderRadius="16px"
          ></Box>
        </Box>
        <Flex flexDirection="column" justifyContent="center">
          <Text mb="8px">Including the following technologies:</Text>
          <UnorderedList>
            <ListItem>Next.js</ListItem>
            <ListItem>Next Auth</ListItem>
            <ListItem>ChakraUI</ListItem>
            <ListItem>PrismaORM</ListItem>
            <ListItem>PostgreSQL</ListItem>
          </UnorderedList>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
