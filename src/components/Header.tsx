import { Flex, Img } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      w={"100%"}
      h={"72px"}
      bg={"blue.700"}
      position={"sticky"}
      borderBottomWidth={1}
      justify={"center"}
      zIndex={10}
    >
      <Img
        src="/icon.png"
        position={"absolute"}
        bottom={"-70px"}
        boxSize={"112px"}
        borderRadius="full"
        overflow={"hidden"}
      />
    </Flex>
  );
};
