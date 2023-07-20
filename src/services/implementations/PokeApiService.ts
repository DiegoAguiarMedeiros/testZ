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
      .then(({ data }) => data.abilities)
      .catch((err) => {
        console.log("err", err);
        throw new Error(err);
      });
  }
}
