import Head from "next/head";
import data from "../src/data.json";
import Pokemon from "../src/Pokemon";

export function getStaticProps() {
  return {
    props: {
      pokemon: data,
    },
  };
}

export default function Home({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon Test</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1>Pokemon</h1>
          <table>
            {pokemon.map((pokemon) => (
              <tr key={pokemon.name}>
                <td>
                  <Pokemon data={pokemon}>{pokemon.name}</Pokemon>
                </td>
                <td>{pokemon.type.join(", ")}</td>
                <td>{pokemon.hp}</td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>{pokemon.special_attack}</td>
                <td>{pokemon.special_defense}</td>
                <td>{pokemon.speed}</td>
              </tr>
            ))}
          </table>
        </div>
      </main>
    </>
  );
}
