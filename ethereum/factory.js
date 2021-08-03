import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// This file is to get a Contract instance to work with the Campaign

const instance = new web3.eth.Contract(
	CampaignFactory.abi,
	'0x309CF4A3AC8b11F8eC6182c341da725c4c20365E'
);

export default instance;