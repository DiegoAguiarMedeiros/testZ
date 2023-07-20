import { Router } from "express";
import getAllPokemonController from "./useCases/Pokemon/GetAllAbilities";

const router = Router();

router.get("/pokemon/:pokemonName", getAllPokemonController.handle);

export default router;
