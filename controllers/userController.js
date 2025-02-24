import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const getAllUsers = async(_req,res) =>{
try{
 const setting = await knex("users");
    res.status(200).json(setting);
}catch(e){
  console.error(e);
    res.status(404).send("Error getting list of all users",e);
}};


const addNewUser = async (req,res)=>{
const {
 username,
 password,
 preference
} = req.body;

//validation to confirm there is no empty form
if(!username || !password || !preference){
 return res.status(400).json({ error: "All fields are required." });
}

//add new user 
try{
const addNewUser = await knex("users").insert(
{
username,password,preference
});


const newUserId = addNewUser[0];
const addNewData = await knex("users").where({
id:newUserId,
})

    res.status(200).json(addNewData);

}catch(e){
 console.error(e);
 res.status(404).send("Can not add new user",e);
}
};

export{
getAllUsers,
addNewUser
};