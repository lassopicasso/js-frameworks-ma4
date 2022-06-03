import NextHead from "next/head";

function Head({ title = "", description }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} JS Frameworks MA4
      </title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
