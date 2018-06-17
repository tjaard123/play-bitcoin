let miner = require('./miner');
let block = require('./block');
let transaction = require('./transaction');

let blockChain = [];

let genesisBlock = block.constructBlock(null, [ transaction.create('A Tree', 'Tjaard', 100) ])

blockChain.push(miner.mine(genesisBlock));

let nextBlock = block.constructBlock(blockChain[0], [ 
   transaction.create('Tjaard', 'Amazon', 10),
   transaction.create('Tjaard', 'Tom', 20)
]);

blockChain.push(miner.mine(nextBlock));

console.log(blockChain);