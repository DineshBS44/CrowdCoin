import web3 from "./web3";
import Campaign from "./build/Campaign.json";

// This file is to get a Contract instance to work with the Campaign

export default (address) => {
	return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};

