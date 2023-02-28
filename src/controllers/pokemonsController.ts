import { Request, Response, NextFunction } from "express"
import { DatabaseRepository } from "../declarations";
import { Pokemon } from "../Models/Pokemons";
export class RoutesController {
    constructor(private repository: DatabaseRepository<Pokemon>){}
    
    async create(
        req: Request, 
        res: Response, 
        next: NextFunction 
        ): Promise<void> {
            try {
                const body = req.body
                const {name, lifePoints, defensePoints, attackPoints, speedPoints, heigth, weigth} = req.body;
                // console.log("THIS REPOSITORY",this);
                // console.log("THIS REPOSITORY",this.repository);
                if(!name || !lifePoints || !defensePoints || !attackPoints || !speedPoints || !heigth || !weigth) {
                    throw Error("Faltan datos para crear el pokemon")
                }
                // console.log("BODY CREATE ROUTE CONTROLLER",body);
                const newPokemon = await this.repository.create(body)
                res.status(200).json({msg: "Pokemon created: ", newPokemon})
            } catch (error) {
                console.log("ERROR POKEMONS CONTROLLER.TS; FN CREATE ", error);
                next(error)
            }
        }

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction 
        ): Promise<void> {
            try {
                const pokemons = await this.repository.list()
                console.log("POKEMONES TOTALES: ", pokemons.length);
                res.status(200).json(pokemons)
            } catch (error) {
                console.log("ERROR POKEMONS CONTROLLER.TS; FN LIST ", error);
                next(error)
            }            
        }

    async get(
        req: Request, 
        res: Response, 
        next: NextFunction 
        ): Promise<void> {
            try {
                const { id } = req.query
                const pokemonById = await this.repository.get(id as any)
                console.log("ID POKE: ", id);
                res.status(200).json({msg: `Get Controller response: Query Id: ${id}`, pokemonById})
            } catch (error) {
               console.log(error);
               next(error)
            }
        }
    async update(
        req: Request, 
        res: Response, 
        next: NextFunction 
        ): Promise<void> {
            res.status(200).json({msg: `Update Controller response: ID: ${req.params.id}`})
        }
    async remove(
        req: Request, 
        res: Response, 
        next: NextFunction 
        ): Promise<void> {
            res.status(200).json({msg: `Remove Controller response: ID: ${req.params.id}`})
        }
}