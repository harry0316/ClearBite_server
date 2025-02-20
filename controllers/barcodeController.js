import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import axios from "axios";



const getImg = async(req, res) =>{
    const upc = req.query.upc;
 try {
    const response = await axios.get(
      `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

export
{getImg};
