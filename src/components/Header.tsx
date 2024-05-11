"use client";

import { Fade, Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollWindow = () => {
      const scroll = window.scrollY;
      if (scroll <= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return (
    <Flex
      w={"100%"}
      h={"72px"}
      bg={"blue.700"}
      position={"fixed"}
      top={0}
      borderBottomWidth={1}
      justify={"center"}
      zIndex={10}
    >
      <Fade in={isVisible}>
        <Img
          src="/icon.png"
          position={"absolute"}
          bottom={"-70px"}
          boxSize={"112px"}
          borderRadius="full"
          onClick={() => router.push("/")}
        />
      </Fade>
    </Flex>
  );
};
