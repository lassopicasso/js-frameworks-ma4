import Head from "../components/Head";
import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <>
      <Head description="This is the module assignment 4 where I use Next.js to build an app" />
      <Layout>
        <Heading heading="Homepage" />
        <Link href="/results">
          <a>Results</a>
        </Link>
      </Layout>
    </>
  );
}
