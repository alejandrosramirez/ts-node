import { Pokemon } from "./decorators/pokemon-class";

const charizard = new Pokemon("Charizard");

// (Pokemon.prototype as any).customName = "Pikachu";

// charizard.savePokemonToDb(6);
charizard.publicApi = "https://www.google.com";
console.log(charizard);
