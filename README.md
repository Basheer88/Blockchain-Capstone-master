# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 


### Dependencies
**This project works with**
1. **Install all required packages**
```bash
Truffle v5.4.13 (core: 5.4.13)
Solidity v0.5.16 (solc-js)
Node v16.10.0
Web3.js v1.5.3
npm 7.24.1
```

2. **Metamask: 5.3.1** - If you need to update Metamask just delete your Metamask extension and install it again.


3. **Ganache** 
Intall from here (https://www.trufflesuite.com/ganache) - Make sure that your Ganache and Truffle configuration file have the same port.


4. **Other mandatory packages**:
```bash
cd eth-contracts
# install packages
npm install --save  openzeppelin-solidity@2.2
npm install --save  truffle-hdwallet-provider
```

## Download
download or get a clone of this repository
```bash
git clone https://github.com/Basheer88/Blockchain-Capstone-master.git
```

## Zokrates 
```bash
docker run -v E:\Blockchain-Capstone-master\zokrates\code:/home/zokrates/code -ti zokrates/zokrates:0.4.6 /bin/bash
cd code/square
~/zokrates compile -i square.code
~/zokrates setup
~/zokrates compute-witness -a 3 9
~/zokrates generate-proof
~/zokrates export-verifier
```

# Run and deploy locally
```bash
cd eth-contracts
truffle compile
truffle migrate --rest
```

# Migrate to rinkeby test net
```bash
cd eth-contracts
truffle develop
compile
migrate --network --rinkeby
```

For testing run 
Note : Ganachi should be working before compiling and running test
```bash
truffle test
```

# Rinkeby URL
SolnSquareVerifier
https://rinkeby.etherscan.io/tx/0xbce19e75a9d102a8de13f432723ee89b089d49ee55c2624a2f255bed4c5eca31

Verifier
https://rinkeby.etherscan.io/tx/0xe131be300ad6bd915c042b697a39fb94209cc4e44b98d0a9468cf2f4fe479ed6

# Contract Address

address : 0x9fEb29Dba9aaFFC8d44081EF269039651722FFC6

Transaction hash:    0xbce19e75a9d102a8de13f432723ee89b089d49ee55c2624a2f255bed4c5eca31

# ABI Files

please see ( ABI SolnSquareVerifier.txt ) it contains SolnSquareVerifer ABI that had been used in https://www.myetherwallet.com/

please see ( ABI Verifier.txt ) it contains verifier.sol ABI

please see ( ABI CustomERC721Token.txt ) it contains CustomERC721Token.sol ABI

Navigate to \eth-contracts\build\contracts  To see Json files of the project 

# Mint 10 Token To Rinkeby

First Token ID 10
https://rinkeby.etherscan.io/tx/0x291df1f9903cd9bae056ad251e44c10e4b75d873ebd305290bb33b3d3172a186

Second Token ID 20
https://rinkeby.etherscan.io/tx/0xf70c7b5a3d141a77a187e977930bd0f01fed375a4408ac3c6d7a708b61211fe2

Third Token ID 30
https://rinkeby.etherscan.io/tx/0x150cdb96eaf325b2e462e13c53329d223a8c7508ffce2b17309b7e3a753f075b

Forth Token ID 40
https://rinkeby.etherscan.io/tx/0x3799c1e20a4a0b7ec747a588a0a6d0ad2faebe00869ccbd9a5ab6f01451c610c

Fifth Token ID 50
https://rinkeby.etherscan.io/tx/0x77b72f9bc077f14e0b176efad708a14e9327a43191b68e152424bd40997a06fb

Sixth Token ID 60
https://rinkeby.etherscan.io/tx/0x74d075a3672a6a24a4b3476206446ee710bd38d6045a859d66be500eb335c206

Seventh Token ID 70
https://rinkeby.etherscan.io/tx/0x06776bfdbcf68e7eb561d451780d8895b4fdbc7107a43601bc85470ef3b0d4a8

Eight Token ID 80
https://rinkeby.etherscan.io/tx/0x05f86081c3779972ca436e05857026f9e78969bd523bb34d842704f1270fcad6

Ninth Token ID 90
https://rinkeby.etherscan.io/tx/0x574b1f6a9e31df2cf4283d87387ddef5d82fbe6f142b6786c618ecf2c92bde20

Tenth Token ID 100
https://rinkeby.etherscan.io/tx/0xce1579ef59d0d61a2e01772f4dda9c13097b92ccd450e1ce16ac15e28f4c7db5

# Opensea Collection Marketplace

https://testnets.opensea.io/collection/specialhometoken

# Token Collection URL

First Token ID 10
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/10

Second Token ID 20
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/20

Third Token ID 30
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/30

Forth Token ID 40
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/40

Fifth Token ID 50
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/50

Sixth Token ID 60
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/60

Seventh Token ID 70
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/70

Eight Token ID 80
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/80

Ninth Token ID 90
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/90

Tenth Token ID 100
https://testnets.opensea.io/assets/0x9feb29dba9aaffc8d44081ef269039651722ffc6/100

# Purchased Hash Transaction
Token ID 10
https://rinkeby.etherscan.io/tx/0x948fa2905ae7b4d38499d90be7678fa356d7683ea69b83489a8dd6664ab029da

Token ID 20
https://rinkeby.etherscan.io/tx/0x23c4c1ecddc18c5bfc6217f8aa88c6dfb959ef0dcdb99c57a4f93e66953d22db

Token ID 30
https://rinkeby.etherscan.io/tx/0x6cc6ad975134448a3c3e55daa81254a6f5afc8b7ac944617278ae5a2b24c0f38

Token ID 40
https://rinkeby.etherscan.io/tx/0x58dd4bbebe864c3f8ec9b35866b4ae2065deceb2abd955fc03dabda89925e9ad

Token ID 50
https://rinkeby.etherscan.io/tx/0x14a88060190cfbc91ee05fd30054ea1a57494332550c27511c1aff43d7e1a132



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
