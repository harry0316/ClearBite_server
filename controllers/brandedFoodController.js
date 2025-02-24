import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const searchFood = async (req,res) =>{
try{
    const {query} = req.query;
    
    //confirm if query exist
    if(!query){
     return res.status(400).json({ error: "No query provided for search" });

    }

    const targetFood = await knex("branded_food")
    .where("gtin_upc","like",`%${query}%`)
    .orWhere('description', 'like', `%${query}%`);

    if(targetFood.length === 0){
        return res.status(200).json({ message: "No matching food found" });
    }

    res.status(200).json(targetFood);

}catch(e){

console.error(e);
res.status(400).json({ error: "Cannot access the food database" });

}
}


export {
searchFood

};
