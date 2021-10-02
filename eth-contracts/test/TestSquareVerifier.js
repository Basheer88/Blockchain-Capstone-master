// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require('verifier');

contract('TestSquareVerifier', accounts => {

    const owner = accounts[0];
    //const account_one = accounts[0];
    //const account_two = accounts[1];

    // - use the contents from proof.json generated from zokrates steps
    let proof = {
        a: ["0x000cec419d581bca9684c23f54d63a1a208a6a8248199d8b8e7e38a9ea464fc2", "0x012178abe0cb39e4641b020cbf4a12710b8205a8c440b76ae3c7307b243fab59"],
        b: [["0x06ccf3d807b74e26ee0c4105f4d58567c3562596d8c67e0322cb3119492bf937", "0x226ab2d85961362a826769e08b22a4d339b6a9c11b7bc81e604ce03bcf2c7d95"], ["0x2c0bd3d77ba722537b35472d54eae0e4af0a0bc5d53ac7fe92eff3e78c30cbd8", "0x29b6923b0a56c9157c9d1ff07416c2b1690ca871cfaedf28ccf337efad79e12c"]],
        c: ["0x1c676558b327c895034fc50ac99ef1ff02d15e5c84a05f06afb90e95345d5e53", "0x26c0fa3a76ee257931e73d67b83d0b8840df70d54628dda31af57cd61720126e"],
        input: ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    }
/*
    // Before for each
    beforeEach(async function () { 
        this.contract = await Verifier.new({from: account_one});
    })*/

    // Test verification with correct proof
    it('correct proof verification test', async function () {
        let instance = await verifier.deployed();
        result = await instance.verifyTx(proof.a, proof.b, proof.c, proof.input, {from: owner});
        assert.equal(result, false, "Proofing with correct proof Failed");
    })
        
    // Test verification with incorrect proof
    it('incorrect proof verification test', async function () {
        let instance = await verifier.deployed();
        result = await instance.verifyTx(proof.a, proof.b, proof.c, [8,0], {from: owner});
        assert.equal(result, true, "Proofing with incorrect proof Failed");
    })

})