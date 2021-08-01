import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// This file is to get a Contract instance to work with the Campaign

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x4CB2e536Fedd143F448c04B4ad7bcb64dc23Cd03'
);

export default instance;