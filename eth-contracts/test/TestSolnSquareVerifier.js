// define a variable to import the <SolnSquareVerifier>
//var ERC721MintableComplete = artifacts.require('CustomERC721Token');
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('TestSolnSquareVerifier', accounts => {
    
    const owner = accounts[0];

    // - use the contents from proof.json generated from zokrates steps
    let proof = {
        a: ["0x000cec419d581bca9684c23f54d63a1a208a6a8248199d8b8e7e38a9ea464fc2", "0x012178abe0cb39e4641b020cbf4a12710b8205a8c440b76ae3c7307b243fab59"],
        b: [["0x06ccf3d807b74e26ee0c4105f4d58567c3562596d8c67e0322cb3119492bf937", "0x226ab2d85961362a826769e08b22a4d339b6a9c11b7bc81e604ce03bcf2c7d95"], ["0x2c0bd3d77ba722537b35472d54eae0e4af0a0bc5d53ac7fe92eff3e78c30cbd8", "0x29b6923b0a56c9157c9d1ff07416c2b1690ca871cfaedf28ccf337efad79e12c"]],
        c: ["0x1c676558b327c895034fc50ac99ef1ff02d15e5c84a05f06afb90e95345d5e53", "0x26c0fa3a76ee257931e73d67b83d0b8840df70d54628dda31af57cd61720126e"],
        input: ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    }

    
    // Before for each
    beforeEach('setup environment', async function () { 
        //this.ERC721 = await ERC721MintableComplete.new({from: owner});
        this.verifier = await SquareVerifier.new(owner);
        this.contract = await SolnSquareVerifier.new(this.verifier.address);
    })
    
    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('New solution can be added for contract', async function () {
        //let instance = await SolnSquareVerifier.deployed();
        let result = await this.contract.addSolution(1, owner, {from: owner});
        assert.equal(result, true, "Add solutions Failed");
    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('ERC721 token can be minted for contract', async function () {
        //let instance = await SolnSquareVerifier.deployed();
        let result = await this.contract.newMint(proof.a, proof.b, proof.c, proof.input, 2, {from: owner});
        assert.equal(result, true, "token minted Failed");
    })
})