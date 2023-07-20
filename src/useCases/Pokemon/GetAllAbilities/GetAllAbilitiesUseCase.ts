import { IPokeApiService } from "../../../services/IPokeApiService";
import Pokemon from "../../../entities/Pokemon";

export default class GetAllAbilitiesUseCase {
  constructor(private pokeApiService: IPokeApiService) {}

  execute = async (name: string): Promise<Pokemon[]> => {
    const pokemons = await this.pokeApiService.getPokemonAbilitiesByName(name);
    return pokemons;
  };
}
