import React from 'react';
import axios from 'axios';
import API_ENDPOINT from './apiconfig';

export const updateData = (id,data) => {
  
    const response = axios.put(API_ENDPOINT+'customer/'+ id.toString(),data);
    return response.data;
  
}