import express, {Application, json, Request, Response} from "express";
import { user } from "./routes/user/user.route";
const cors = require("cors");

const app: Application = express();

app.use(json());
app.use(cors());

app.get("/api", (req, res) =>{
    return res.send("Hello")
})
app.use(user)
app.listen(3004, () => {
    console.log("Successfully started server");
})