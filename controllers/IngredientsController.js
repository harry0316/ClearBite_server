import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const getIngredients = async(req,res)=>{
const {userId} = req.query;

//check user id 
if(!userId){
return res.status(404).send("user Id is required");
}

try{
const ingredientsList = await knex("users as u")
.join("mapping as m", function () {
        this.on(knex.raw("FIND_IN_SET(m.type_id, u.preference) > 0"));
      })
      .join("ingredient as i", "m.ingredient_id", "i.id")
      .where("u.id", userId)
      .select("i.ingredient");

  res.status(200).json(ingredientsList);

}catch(e){
console.error(e);
res.status(404).send("can not access to the ingredients database",e);

}
};



export {
getIngredients


}