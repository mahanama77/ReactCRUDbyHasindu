import axios from 'axios'
import React from 'react'
import API_ENDPOINT from './apiconfig'

export const getDataById = async(id) => {
    const response = await axios.get(API_ENDPOINT+'customer/'+ id.toString() );
    return response.data;
}
