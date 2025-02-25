import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);




const getAllFav = async(req,res) =>{
const {userId} = req.query;

//validation for userId
if(!userId){
return res.status(400).json({ error: "userId do no exist" });
}

try{
 const result = await knex("favorite").where({
 userid:userId 
 })

res.status(200).json(result);

}catch(e){
console.error(e);
res.status(404).send("can not fetch favorite from the database",e);
}
}


const addFavorite = async(req,res) =>{
const {
        userId,
        gtin_upc,
        description
        } = req.body;

//validation for id, and code number
if(!userId || !gtin_upc){
return res.status(400).json({ error: "All fields are required" });
}

//add product into darabase
try{
const addFavorite = await knex("favorite").insert(
{
userId,gtin_upc,description
})

const newFavoriteId = addFavorite[0];
const addNewData = await knex("favorite").where({
id:newFavoriteId
})

res.status(200).json(addNewData);

}catch(e){
console.error(e);
res.status(404).send("can not add favorite to the database",e);


}
}

export {
addFavorite,
getAllFav

}