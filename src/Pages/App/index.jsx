import { Col, Spin } from "antd";
import { Searcher } from "../../Components/Searcher";
import "./App.css";
import { PokemonList } from "../../Components/PokemonList";
import logo from "../../statics/logo.svg";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../../redux/slices/pokemonDataSlice";

function App() {
  const pokemons = useSelector(
    (state) => state.pokemonData.pokemons,
    shallowEqual
  );
  const pokemonsFiltered = useSelector(
    (state) => state.pokemonData.pokemonsFiltered,
    shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = () => {
      dispatch(fetchPokemonsWithDetails());
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <div className="App">
        <Col span={4} offset={10}>
          <img src={logo} alt="Pokedux" />
        </Col>

        <Col span={8} offset={8}>
          <Searcher />
        </Col>

        {loading ? (
          <Col offset={12}>
            <Spin spinning size="large" />
          </Col>
        ) : (
          <PokemonList pokemons={pokemonsFiltered} />
        )}
      </div>
    </>
  );
}

export default App;
