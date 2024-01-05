import axios from 'axios'
import React from 'react'
import API_ENDPOINT from './apiconfig'

export const saveData = async(data) => {
  const response = axios.post(API_ENDPOINT+'customer',data);
  console.log(response);
  return response;
}
