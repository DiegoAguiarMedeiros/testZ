import GetAllAbilitiesUseCase from "./GetAllAbilitiesUseCase";
import GetAllAbilitiesController from "./GetAllAbilitiesController";
import PokeApiService from "../../../services/implementations/PokeApiService";
const pokeApiService = new PokeApiService();

const getAllAbilitiesUseCase = new GetAllAbilitiesUseCase(pokeApiService);

const getAllAbilitiesController = new GetAllAbilitiesController(
  getAllAbilitiesUseCase
);

export default getAllAbilitiesController;
