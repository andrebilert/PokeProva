import { Router } from "express";
import pokemonController from "./pokemon/pokemon.controller";


const routes = Router()

routes.get('/pokemons', pokemonController.getPokemons)
routes.post('/pokemons-time', pokemonController.timesPokemons)
routes.get('/pokemons-busca/:id', pokemonController.getPokemonIds)

export default routes;