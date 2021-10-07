# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Setup

docker run -v E:\Blockchain-Capstone-master\zokrates\code:/home/zokrates/code -ti zokrates/zokrates:0.4.6 /bin/bash
cd code/square

~/zokrates compile -i square.code

~/zokrates setup

~/zokrates compute-witness -a 3 9

~/zokrates generate-proof

~/zokrates export-verifier


npm install --save  openzeppelin-solidity@2.2


# Migrate to rinkeby test net

cd eth-contracts

truffle develop

compile

migrate --network --rinkeby

rinkeby testnet url
SolnSquareVerifier
https://rinkeby.etherscan.io/tx/0xbce19e75a9d102a8de13f432723ee89b089d49ee55c2624a2f255bed4c5eca31

Verifier
https://rinkeby.etherscan.io/tx/0xe131be300ad6bd915c042b697a39fb94209cc4e44b98d0a9468cf2f4fe479ed6

