function constructBlock(previousBlock, transactions) {
   return {
      header: {
         hash: '', // The content of this block will be hashed during mining
         previousBlockHash: previousBlock != null ? previousBlock.header.hash : undefined,
         height: previousBlock != null ? previousBlock.header.height + 1 : 0, // Index of this block inthe chain
         nonce: 0, // Nonce will be enumerated to obtain a valid hash, one starting with 4 zeros for example
         merkleTreeHash: '', // A merkle tree hash of the transactions
         timestamp: new Date(),
         numberOfTransactions: transactions.length,
      },
      transactions: transactions.map((t) => {
         return {
            hash: '33SSdd...',
            value: t.value, // How much?
            fromAddress: t.fromAddress, // Public key of payer
            toAddress: t.toAddress, // Public key of recipient
            previousTransactionHashes: [
               '1PSSGeF...',
               '1Pfalk0...'
            ],
            signature: t.signature, // Transaction must be signed by from address's private key
            timestamp: t.timestamp
         }
      })
   };
}

module.exports = {
   constructBlock: constructBlock
};