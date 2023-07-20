import { Response } from "express";
import GetAllAbilitiesUseCase from "./GetAllAbilitiesUseCase";

export default class GetAllAbilitiesController {
  constructor(private GetAllAbilitiesUseCase: GetAllAbilitiesUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { params } = req;
    const { pokemonName } = params;
    try {
      const result = await this.GetAllAbilitiesUseCase.execute(pokemonName);
      return res.status(200).send({ result });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
