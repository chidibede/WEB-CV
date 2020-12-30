import Head from "next/head";
import RegisterComponent from "../components/Register/RegisterComponent";
import Navigation from "../components/Navigation/Navigation";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Sign Up Page</title>
      </Head>

      <Navigation />
      <RegisterComponent />
    </>
  );
}
