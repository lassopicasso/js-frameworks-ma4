import Image from "next/image";
import Head from "../components/Head";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Layout from "../components/Layout";
import Heading from "../components/Heading";

export default function Results(props) {
  return (
    <>
      <Head title="Results" description="Here are the results from the API" />
      <Layout>
        <Heading heading="Results from API" />
        <div className="games">
          {props.games.map((game) => {
            const imgPriority = game.title.rendered === "Heroes of Might and Magic" ? "true" : "false";
            return (
              <div key={game.slug}>
                <h2 className="game-title">{game.title.rendered}</h2>
                <div className="image-wrapper">
                  <Image src={game._embedded["wp:featuredmedia"][0].source_url} layout="fill" objectFit="cover" objectPosition="50%" alt={game._embedded["wp:featuredmedia"][0].alt_text} priority={imgPriority} />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let games = [];
  try {
    const response = await axios.get(BASE_URL);

    games = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      games: games,
    },
  };
}
