"use client";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export const FilterPosts = () => {
  const params = useSearchParams();
  const genre = params.get("genre");
  const sort = params.get("order");
  return (
    <Box as="a" href={`/?${params.toString()}`}>
      {" "}
      ジャンル
    </Box>
  );
};
