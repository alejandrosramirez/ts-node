import { getPokemon } from "./generics/get-pokemon";

getPokemon(6)
	.then((pokemon) => console.log(pokemon.sprites.front_shiny))
	.catch((error) => console.error(error))
	.finally(() => console.log("Fin de getPokemon"));