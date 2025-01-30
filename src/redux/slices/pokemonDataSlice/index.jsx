import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../../../api";
import { setLoading } from "../uiDataSlice";

const initialState = {
  pokemons: [],
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
      console.log("set favorite", action.payload);
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex > 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
