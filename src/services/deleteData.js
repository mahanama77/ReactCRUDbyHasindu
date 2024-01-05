import React from "react";
import axios from "axios";
import API_ENDPOINT from "./apiconfig";

export const deleteData = async (customer) => {
	try {
		const response = await axios.delete(API_ENDPOINT + "customer/" + customer);
		window.location.reload(true);
		console.log(response);
	} catch (error) {
		console.error("Error deleting data:", error);
	}
};
