var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1, {from: account_one});
            //await this.contract.mint(account_one, 2, {from: account_one});
            //await this.contract.mint(account_one, 3, {from: account_one});
            await this.contract.mint(account_two, 4, {from: account_one});
            //await this.contract.mint(account_two, 5, {from: account_one});
        })

        it('should return total supply', async function () { 
            let total = await this.contract.totalSupply();
            assert.equal(parseInt(total), 2, "Returned Zero total supply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_one);
            assert.equal(parseInt(balance), 1, "wrong Balance number");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI(1);
            assert.equal(uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Different URI");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_one, 4, {from: account_two});
            let owner = await this.contract.ownerOf(4);
            assert.equal(owner, account_one, "wrong owner");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let mintStatus = false;
            try 
            {
                await this.contract.mint(account_one, 6, { from: account_two });
            }
            catch(e) {
                mintStatus = true;
            }
            assert.equal(mintStatus, true, "Minting is not restricted to Contract Owner");
        })

        it('should return contract owner', async function () { 
            let result = await this.contract.owner();
            assert.equal(result, account_one, "different contract owner");
        })

    });
})