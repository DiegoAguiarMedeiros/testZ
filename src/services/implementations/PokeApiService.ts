import axios from "axios";
import { IPokeApiService } from "../IPokeApiService";
import Pokemon from "../../entities/Pokemon";

const NOT_FOUND_STATUS_CODE = 404;

export default class PokeApiService implements IPokeApiService {
  API_BASE_URL: any;
  constructor() {
    this.API_BASE_URL = process.env.API_BASE_URL;
  }
  async getPokemonAbilitiesByName(name: string): Promise<Pokemon[]> {
    return axios
      .get(`${this.API_BASE_URL}pokemon/${name}`)
      .then(({ data }) => this.getAbilitiesInAlphabeticalOrder(data.abilities))
      .catch((err) => {
        console.log("err", err);
        throw new Error(err);
      });
  }
  getAbilitiesInAlphabeticalOrder(data: any): Pokemon[] {
    // Extract the "ability" objects from each item in the "result" array
    const abilities = data.map((item) => item.ability);

    // Sort the ability objects in alphabetical order based on their names
    const sortedAbilities = abilities.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return sortedAbilities;
  }
}
