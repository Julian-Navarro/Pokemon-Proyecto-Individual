import { Router } from "express";
import { RoutesController } from "../controllers/pokemonsController";
import { PokemonRepository } from "../repository";
const router = Router();
const controller =  new RoutesController(
    new PokemonRepository()
    )

router.post("/create", controller.create.bind(controller))
router.get("/getPokemons", controller.list.bind(controller))
router.get("/getPokemonById", controller.get.bind(controller))
router.put("/update/:id", controller.update.bind(controller))
router.delete("/remove/:id", controller.remove.bind(controller))


export default router;