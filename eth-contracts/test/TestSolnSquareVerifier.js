// define a variable to import the <SolnSquareVerifier>
//var ERC721MintableComplete = artifacts.require('CustomERC721Token');
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('TestSolnSquareVerifier', accounts => {
    
    const owner = accounts[0];

    // - use the contents from proof.json generated from zokrates steps
    let proof = {
        a: ["0x04c288a27acf246e10741c1ab8b962ae094c4231a0fb3f332bd762ece7fd60d3", "0x2c6825c447b3bad7e95b091c1fb974a060babe1aae6b4f970e2a72ea7d2b6be1"],
        b: [["0x0fb4556fbf79693baec9291a19d53b0ccaac33b47d7dbb7c5cd050a6e765d438", "0x20bcc0658406bfb7c8c8b12fad8c4e4d4745355ff94fa491648d817a36f18d5b"], ["0x185c9d0b7b0848e0fbb0629eafdb309e45a521433931ae9ec36c590c78a386ac", "0x0114ee182c9b47a0089a2f34b74f33f64be3cffdecc37d97ebd3d02185e4bb28"]],
        c: ["0x16b449b38b144948bdbcd90c19b5aac20323cb276c038d4b28214c53d3416897", "0x20d9bca96481dd62c3b168c302476f2acf2d959c8b21af42410305c1d5123dc6"],
        inputs: ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
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
        let result = await this.contract.newMint(proof.a, proof.b, proof.c, proof.inputs, 2, {from: owner});
        assert.equal(result, true, "token minted Failed");
    })
})