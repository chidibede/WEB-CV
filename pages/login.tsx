import { Box } from "@chakra-ui/react";
import Head from "next/head";
import LoginComponent from "../components/Login/LoginComponent";
import Navigation from "../components/Navigation/Navigation";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <Navigation />
      <LoginComponent />
    </>
  );
}
