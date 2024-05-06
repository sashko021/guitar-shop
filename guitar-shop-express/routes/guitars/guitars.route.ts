import express, { Router } from 'express';


export const guitar = Router();

guitar.get("/guitars", (req,res)  => {

    res.send("Hi, I'm a gitar!");
})
guitar.post("/guitars", (req,res) =>{
    res.send("Hi, I'm a gitar!");
})
guitar.put("/guitars", (req,res) =>{
    res.send("Hi, I'm a gitar!");
})
guitar.delete("/guitars", (req,res) =>{
    res.send("Hi, I'm a gitar!");
})