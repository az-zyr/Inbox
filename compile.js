const path = require("path");
const fs = require("fs");

// Using solidity compiler
const solc = require("solc");

// Getting actual absolute path to Inbox.sol
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");

// Read solidity script
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

// Compile it
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts["Inbox.sol"].Inbox;