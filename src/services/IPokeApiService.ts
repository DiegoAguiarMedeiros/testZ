import Pokemon from "../entities/Pokemon";

export interface IPokeApiService {
  getPokemonAbilitiesByName(name: string): Promise<Pokemon[]>;
}
