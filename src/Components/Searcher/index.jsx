import { Input } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setPokemonsFiltered } from "../../redux/slices/pokemonDataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const pokemonsFiltered = useSelector(
    (state) => state.pokemonData.pokemonsFiltered,
    shallowEqual
  );

  const handleOnchange = (searchName) => {
    console.log("Searching...", searchName);
    dispatch(setPokemonsFiltered({ pokemonName: searchName }));
    console.log(pokemonsFiltered);
  };

  return (
    <Input.Search
      placeholder="Search ..."
      style={{ marginBottom: 10 }}
      onChange={(event) => handleOnchange(event.target.value)}
    />
  );
};

export { Searcher };
