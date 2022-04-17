import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Flex w="100%">
      <Container py="64px">
        <Heading>
          Increase your productivity
          <br />
          Make your app in minutes
        </Heading>
        <Heading as="h2" size="lg" mt="4">
          <Text mt="16px" fontSize="30px" color="gray.600">
            Your Fullstack React App Organizer
          </Text>
        </Heading>
      </Container>
    </Flex>
  );
};
