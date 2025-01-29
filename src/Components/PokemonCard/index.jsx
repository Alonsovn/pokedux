import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StartButton } from "../StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../redux/actions";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const pokemonType = pokemon.types
    .map((element) => element.type.name)
    .join(", ");

  const handleOnClickFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  };

  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={
        <StartButton
          isFavorite={pokemon.favorite}
          onClick={() => handleOnClickFavorite()}
        />
      }
    >
      <Meta description={pokemonType} />
    </Card>
  );
};

export { PokemonCard };
