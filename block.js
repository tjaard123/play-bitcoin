function constructBlock(previousBlock, transactions) {
   return {
      header: {
         hash: '',
         previousBlockHash: previousBlock != null ? previousBlock.header.hash : undefined,
         height: previousBlock != null ? previousBlock.header.height + 1 : 0,
         nonce: 1,
         merkleTreeHash: '00002E18...',
         timestamp: new Date(),
         numberOfTransactions: transactions.length,
      },
      transactions: transactions.map((t) => {
         return {
            hash: '33SSdd...',
            value: t.value,
            fromAddress: t.fromAddress,
            toAddress: t.toAddress,
            previousTransactionHashes: [
               '1PSSGeF...',
               '1Pfalk0...'
            ],
            signature: t.signature,
            timestamp: t.timestamp
         }
      })
   };
}

module.exports = {
   constructBlock: constructBlock
};