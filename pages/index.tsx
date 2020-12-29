import { Box, Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Page</title>
      </Head>

      <Navigation />
    </>
  );
}
