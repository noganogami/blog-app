"use client";

import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

export const SelectedTag = () => {
  const router = useRouter();

  const params = useSearchParams();
  const tag = params.get("tag");
  const newParams = new URLSearchParams(params);

  const onClick = () => {
    newParams.delete("tag");
    router.replace(`/?${newParams.toString()}`);
  };

  return (
    <>
      {tag !== null ? (
        <Tag>
          <TagLabel>{tag}</TagLabel>
          <TagCloseButton onClick={onClick} />
        </Tag>
      ) : (
        <></>
      )}
    </>
  );
};
