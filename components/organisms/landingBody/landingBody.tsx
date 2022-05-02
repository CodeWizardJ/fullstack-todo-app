import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export const LandingBody = () => {
  return (
    <Container>
      <SimpleGrid columns={2} spacing="40px" padding="200px 24px">
        <Box>
          <Image
            src={'/placeholder.jpg'}
            width="100%"
            height="255px"
            borderRadius="16px"
            alt={'alt text'}
          ></Image>
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
