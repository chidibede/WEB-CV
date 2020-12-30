import Head from "next/head";
import RegisterComponent from "../../components/Register/RegisterComponent";
import Navigation from "../../components/Navigation/Navigation";
import ResumeComponent from "../../components/Resume/ResumeComponent";
import { Flex } from "@chakra-ui/react";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Create CV</title>
      </Head>
      <Navigation>
        <ResumeComponent />
      </Navigation>
    </>
  );
}
