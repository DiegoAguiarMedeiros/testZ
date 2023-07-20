import axios from "axios";
import { IPokeApiService } from "../IPokeApiService";
import Pokemon from "../../entities/Pokemon";

const NOT_FOUND_STATUS_CODE = 404;

export default class PokeApiService implements IPokeApiService {
  API_BASE_URL: any;
  constructor() {
    this.API_BASE_URL = process.env.API_BASE_URL;
  }
  async getPokemon(limit: number, offset: number): Promise<Pokemon[]> {
    return axios
      .get(`${this.API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
      .then(({ data }) => data.results)
      .catch((err) => {
        const { data } = err.response;
        if (data.status_code === NOT_FOUND_STATUS_CODE) {
          return [];
        }
        throw new Error(data);
      });
  }
}
