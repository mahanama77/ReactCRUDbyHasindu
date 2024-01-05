import React from "react";
import axios from 'axios';
import API_ENDPOINT from "./apiconfig";

export const getData = async() => {
// try{
//     const response = await axios.get(API_ENDPOINT+'customer');
//     return response.data;
// }
// catch(error){
//     console.error("Error deleting data:", error);
// }

const response = await axios.get(API_ENDPOINT+'customer');
     return response.data;
  
}
