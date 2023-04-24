import { Request, Response } from "express"
import { PokemonService } from "./pokemon.service"

class PokemonController {
    async getPokemons(req: Request, res: Response) {
        const pokemon = await new PokemonService().getPokemon()
        return res.status(200).json(pokemon)
    }

    async timesPokemons(req: Request, res: Response) {
        const pokemon = await new PokemonService().timesPokemon()
        return res.status(200).json(pokemon)
    }

    async getPokemonIds(req: Request, res: Response) {
        const pokemon = await new PokemonService().getPokemonId(req.params.id)
        return res.status(200).json(pokemon)
    }
}

export default new PokemonController();