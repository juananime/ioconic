type Movie = {
  rate: number;
  title?: string;
  synopsis?: string;
  id: string;
};
interface Movies {
  movies: Array<Movie>;
}

type SortType = 'ascendant' | 'descendant';

export type {Movies, Movie, SortType};
