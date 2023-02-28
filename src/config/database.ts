import { DataSource } from "typeorm";
import { Pokemon } from "../Models/Pokemons";
// import * as dotenv from "dotenv"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "BVBadmin",
    database:"pokemon-ts",
    entities: [Pokemon],
    synchronize: true,
    logging: false
})