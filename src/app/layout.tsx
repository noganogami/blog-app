import "./globals.css";
import { Header } from "@/components/Header";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const font = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | noganogami",
    default: "記事一覧 | noganogami",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <ChakraProvider>
          <Flex flexDirection={"column"} align={"center"} minH={"100vh"}>
            <Header />
            <Box py={"72px"} px={4}>
              {children}
            </Box>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
