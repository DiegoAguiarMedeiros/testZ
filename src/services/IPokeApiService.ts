import Pokemon from "../entities/Pokemon";

export interface IPokeApiService {
  getPokemon(limit: number, offset: number): Promise<Pokemon[]>;
}
