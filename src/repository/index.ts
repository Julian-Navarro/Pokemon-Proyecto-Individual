import database from "../config/database";
import { Pokemon } from "../Models/Pokemons";
import { DatabaseRepository, Id, Query } from "../declarations";



export class PokemonRepository implements DatabaseRepository<Pokemon>{
    async create(data: Partial<Pokemon>, query?: Query | undefined): Promise<Pokemon> {
        const repository = database.getRepository(Pokemon);
        const newPokemon = repository.create(data);
        await repository.save(newPokemon)
        return newPokemon
    }
    async list(query?: Query | undefined): Promise<Pokemon[]> {
        const repository = database.getRepository(Pokemon);
        console.log("repository/index.ts PROMESA POKEMONES: ", repository);
        
        return repository.find()
    }
    async get(id?: Id | undefined, query?: Query | undefined): Promise<Pokemon> {
        const repository = database.getRepository(Pokemon);

        const pokemon = await repository.findOneBy({id: id as any});
        console.log("GET BY ID POKEMON: ",pokemon);
        
        if (!pokemon) {
            throw new Error("El pokemon con ese ID no existe")
        };
        return pokemon
    }
    update(id: Id, data: Pokemon, query?: Query | undefined): Promise<Pokemon> {
        throw new Error("Method not implemented.");
    }
    remove(id: Id, query?: Query | undefined): Promise<Pokemon> {
        throw new Error("Method not implemented.");
    }
    
}