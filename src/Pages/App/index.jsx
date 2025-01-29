import { Col } from "antd";
import { Searcher } from "../../Components/Searcher";
import "./App.css";
import { PokemonList } from "../../Components/PokemonList";
import logo from "../../statics/logo.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/api";
import { setPokemons } from "../../redux/actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
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

        <PokemonList pokemons={pokemons} />
      </div>
    </>
  );
}

export default App;
