import "reflect-metadata"
import express from "express";
import database from "./config/database";


import RouterControllers from "./routes"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
database.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error))
app.use(RouterControllers);
app.listen(3001, () => {
    console.log("App executed on port: 3001");
    
})
