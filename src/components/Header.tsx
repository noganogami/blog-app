"use client";

import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      w={"100%"}
      // bg={useColorModeValue("gray.100", "gray.700")}
      position={"sticky"}
      borderBottomWidth={1}
    >
      <Button onClick={toggleColorMode}>toggle-color-mode</Button>
    </Box>
  );
};
