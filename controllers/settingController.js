import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllCategories = async (_req,res) => {
try{
    const setting = await knex("setting");
    res.status(200).json(setting);
}catch(e){
    console.error(e);
    res.status(404).send("Error getting list of all categories",e);
}
};


export{
getAllCategories


};