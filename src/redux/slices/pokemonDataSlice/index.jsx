import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../../../api";
import { setLoading } from "../uiDataSlice";

const initialState = {
  pokemons: [],
  pokemonsFiltered: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "pokemonData/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonsRes = await getPokemons();
    const pokemonDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
    dispatch(setPokemonsFiltered({ pokemonName: "" }));

    dispatch(setLoading(false));
  }
);

export const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex > 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
      state.pokemonsFiltered = state.pokemons;
    },
    setPokemonsFiltered: (state, action) => {
      const pokemonNameSearchText = action.payload.pokemonName.toLowerCase();

      if (pokemonNameSearchText === "") {
        state.pokemonsFiltered = state.pokemons;
      }

      const filtered = state.pokemons.filter((pokemon) => {
        const pokemonNameText = pokemon.name.toLowerCase();
        return pokemonNameText.includes(pokemonNameSearchText);
      });

      state.pokemonsFiltered = filtered;
    },
  },
});

export const { setFavorite, setPokemons, setPokemonsFiltered } =
  pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
