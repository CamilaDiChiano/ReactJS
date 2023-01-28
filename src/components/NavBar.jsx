import React from "react";
import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="gray" color="#262626">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="black">
            <Heading size="md">
              <h1>E-commerce</h1>
            </Heading>
          </Box>
          <Spacer/>
          <Box p="2" color="black">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
