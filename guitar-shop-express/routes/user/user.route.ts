import { User } from "../../models/users.model";
import { Router } from "express";

const users =[{
    email: "ivan@mail.bg",
    id: 335
},{

}];
export const user = Router()
user.get("/user/:email", async (req, res) =>{
    
try{const params=req.params
    const user = await User.create({  email: 'asdv' });
    
    return res.json({user})}catch(error){
        return res.json({error}) 
    }
    
        
})


user.delete("/user/:email", (req, res) =>{
const params=req.params

})
