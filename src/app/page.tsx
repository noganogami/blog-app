import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      flexDirection={"column"}
      h={"100%"}
      p={20}
    >
      <Box
        h={100}
        w={"100%"}
        bg={"gray"}
      >
        filter
      </Box>
      <Flex
        flexDirection={"column"}
        h={"100%"}
        w={"100%"}
        bg={"gray.100"}
        p={10}
        gap={5}
      >
        <Box
          h={200}
          w={"100%"}
          bg={"gray.200"}
        >
          post1
        </Box>
        <Box
          h={200}
          w={"100%"}
          bg={"gray.200"}
        >
          post2
        </Box>
      </Flex>
    </Box >
  );
}
