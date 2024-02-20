# Inbox

Basic Ethereum smart contract example that allows you to store and retrieve messages on the blockchain.

## Features
- Deployed on the Sepolia Testnet
- Simple message storage functionality
- Utilizes Truffle for smart contract compilation
- HDWalletProvider for secure access to the Sepolia Testnet
- Web3.js for interacting with the Ethereum blockchain

## Getting Started

1. **Install dependencies:** `npm install`

2. **Set up your environment variables:** Create a `.env` file with your mnemonic and Infura API key:

```
MNEMONIC="your_metamask_mnemonic"
INFURA_API_KEY="your_infura_api_key"
```

3. **Test the smart contract:** `npm run test`

4. **Deploy the smart contract:** `node deploy.js`