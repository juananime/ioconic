import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, SortType} from '../types/Movies';
interface MoviesState {
  movies: Array<Movie>;
}
const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    updateMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(obj => obj.id === action.payload.id);
      state.movies[index] = action.payload;
    },
    sortMovies: (state, action: PayloadAction<SortType>) => {
      if (action.payload === 'ascendant') {
        state.movies.sort((a, b) => a.rate - b.rate);
      } else {
        state.movies.sort((a, b) => b.rate - a.rate);
      }
    },
  },
});

export const {addMovie, updateMovie, sortMovies} = moviesSlice.actions;

export type {MoviesState};

export default moviesSlice.reducer;
