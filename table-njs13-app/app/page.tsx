import Pokemon from "../src/Pokemon";
import pokemon from "../src/data.json";

export default async function Home() {
  return (
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
  );
}
