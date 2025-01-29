import { Col, Spin } from "antd";
import { Searcher } from "../../Components/Searcher";
import "./App.css";
import { PokemonList } from "../../Components/PokemonList";
import logo from "../../statics/logo.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/api";
import { getPokemonsWithDetails, setLoading } from "../../redux/actions";

function App() {
  const pokemons = useSelector((state) => state.get("pokemons")).toJS();
  // const loading = useSelector((state) => state.loading);
  const loading = useSelector((state) => state.get("loading"));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
          <PokemonList pokemons={pokemons} />
        )}
      </div>
    </>
  );
}

export default App;
