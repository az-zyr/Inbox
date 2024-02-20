// Load environment variables from .env file
require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require('web3');

// Import ABI and Compiler Contract
const { abi, evm } = require('./compile');

// Provider that is connecting us to Sepolia Testnet
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
);

// New Web3 Instance with Infura API Node
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ["azzyr"]
    })
    .send({
      from: accounts[0],
      gas: '1000000'
    });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();