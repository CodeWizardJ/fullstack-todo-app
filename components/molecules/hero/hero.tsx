import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #4BC0C8 98.58%)"
    >
      <Container py="64px">
        <Heading>
          Increase your productivity
          <br />
          Make your app in minutes
        </Heading>
        <Heading as="h2" size="lg" mt="4">
          <Text mt="8px" fontSize="26px" color="gray.600">
            Your Fullstack React App Organizer
          </Text>
        </Heading>
      </Container>
    </Flex>
  );
};
