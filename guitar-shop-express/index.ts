import express, {Application, json, Request, Response} from "express";
import { user } from "./routes/user/user.route";
import { guitar } from "./routes/guitars/guitars.route";
const cors = require("cors");
import "./database"

const app: Application = express();

app.use(json());
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api", (req, res) =>{
    return res.send("Hello")
})
app.use(user)
app.use(guitar)
app.listen(3004, () => {
    console.log("Successfully started server");
})