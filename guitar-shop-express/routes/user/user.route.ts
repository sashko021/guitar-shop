import { User } from "../../models/users.model";
import { Router } from "express";


export const user = Router()
user.post("/user", async (req, res) =>{
    
try{const params=req.body
    const user = await User.create(params);
    
    return res.json({user})}catch(error){
        return res.json({error}) 
    }
    
        
})


