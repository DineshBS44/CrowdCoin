const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

var input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

const output = JSON.parse(solc.compile(JSON.stringify(input)));

//console.log(JSON.parse(output));

fs.ensureDirSync(buildPath);

for (let contract in output.contracts['Campaign.sol']) {
	var fileName = contract;
	fs.outputJsonSync(
		path.resolve(buildPath, fileName + ".json"),
		output.contracts['Campaign.sol'][fileName]
	);
}
