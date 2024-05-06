import { Router } from 'express';
export const cart = Router();

cart.post("/cart", (req,res) =>{
    res.send("success");
})
cart.get("/cart", (req,res) =>{
    res.send("success");
})
cart.put("/cart", (req,res) =>{
    res.send("success");
})
cart.delete("/cart", (req,res) =>{
    res.send("success");
})
