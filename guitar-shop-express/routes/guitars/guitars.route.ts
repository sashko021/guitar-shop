import express, { Router } from 'express';
import { Guitar } from '../../models/guitars.model';


export const guitar = Router();

guitar.get("/guitars/:id",async (req,res)  => {

    try{const params=req.params
       
        const guitar = await Guitar.findByPk(params.id)
        
        return res.json({guitar})}catch(error){
            return res.json({error}) 
        }
})
guitar.get("/guitars",async (req,res)  => {

    try{
        const guitar = await Guitar.findAll()
        
        return res.json({guitar})}catch(error){
            return res.json({error}) 
        }
})
guitar.post("/guitars",async (req,res) =>{
    try{const params=req.body
        console.log(params)
        const guitar = await Guitar.create(params);
        
        return res.json({guitar})}catch(error){
            return res.json({error}) 
        }
})
