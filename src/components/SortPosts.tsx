"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SortPosts = () => {
  const router = useRouter();
  const pathname = usePathname();

  const params = useSearchParams();
  const newParams = new URLSearchParams(params);

  const sort = params.get("order");
  newParams.set("order", sort === "ascending" ? "descending" : "ascending");

  return (
    <Box
      as="button"
      onClick={() => router.replace(`${pathname}?${newParams.toString()}`)}
    >
      日付{sort === "ascending" ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </Box>
  );
};
