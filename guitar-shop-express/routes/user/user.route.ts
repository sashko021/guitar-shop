
import { Router } from "express";

const users =[{
    email: "ivan@mail.bg",
    id: 335
},{

}];
export const user = Router()
user.get("/user/:email", (req, res) =>{
    const params=req.params
    const user = users.find(user => user.email === params.email) 
    return res.json({user})
    
})

user.delete("/user/:email", (req, res) =>{
const params=req.params

})