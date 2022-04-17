import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const LandingFooter = () => {
  return (
    <Box
      as="footer"
      backgroundColor="blue.300"
      py="40px"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Container w={['100%', '100%', '100%', '90ch']}>
        <SimpleGrid columns={2} spacing={8}>
          <Box>Todo App 2022</Box>
          <Flex flexDirection={'column'}>
            <Text mb="16px">Follow us on</Text>
            {/* Setting up for more follow links later*/}
            <HStack spacing={4}>
              <Text>Github</Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
