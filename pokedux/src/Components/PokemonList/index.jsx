import { PokemonCard } from "../PokemonCard";
import "./PokemonList.css";

const PokemonList = () => {
  //create a pokemon list with 10 elements
  const pokemons = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: `Pokemon ${index + 1}`,
    image:
      "https://allroundclub.com/blog/wp-content/uploads/2021/10/how-to-draw-pikachu.png",
    description: "fire , magic",
  }));
  return (
    <div className="PokemomList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export { PokemonList };
