var sha256 = require('js-sha256');

let difficulty = 4;

/*
Repeatedly change nonce until we have a valid hash starting with 4 zeros
*/
function mine(block) {
   var blockHash = sha256(JSON.stringify(block));
   while (!isValidHash(blockHash)) { //Would prefer to do this with a recursive function but JS doesn't do tail call optimization so can't, boohoo :(
      block.header.nonce++;
      blockHash = sha256(JSON.stringify(block));
   }
   block.header.hash = blockHash;
   return block;
}

/*
This function checks if a hash is valid.

In our implementation a block is valid if it starts with 4 zeros.  E.g. 0000TheRestOfTheHash
This hash can be calculated with ease, therefore our blockchain has low difficulty

Bitcoin's difficulty is much more, requiring 18 zeros.
Example bitcoin hash: 000000000000000000386f2e515feafb051543179a24c14d8f968822254839e4
*/
function isValidHash(blockHash) {
   return blockHash.substring(0, difficulty) == '0'.repeat(difficulty);
}

module.exports = {
   mine: mine
};