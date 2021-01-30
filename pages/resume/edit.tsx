import Head from "next/head";
import RegisterComponent from "../../components/Register/RegisterComponent";
import Navigation from "../../components/Navigation/Navigation";
import ResumeComponent from "../../components/Resume/ResumeComponent";

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
