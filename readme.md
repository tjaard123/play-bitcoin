# Bitcoin

Building Bitcoin from scratch for fun

## Resources

* [Bitcoin whitepaper](https://bitcoincore.org/bitcoin.pdf)
* [Core concepts](~/core-concepts.md)
* [JS Bitcoin Node](https://github.com/bcoin-org/bcoin)
* [Whitepaper Explained](https://steemit.com/bitcoin/@dr-physics/bitcoin-white-paper-explained-bitcoin-made-easy)

## Example Block

```js
var exampleBlock = {
   header: {
      previousBlockHash: '0000855B...',
      height: 0,
      nonce: 1,
      merkleTreeHash: '00002E18...',
      timestamp: '2018-06-16T15:22:24.359Z',
      numberOfTransactions: 1,
   },
   transactions: [
      {
         hash: '33SSdd...',
         value: 10.00,
         fromAddress: '1PSSGeF...',
         toAddress: '9hrQDDWc...',
         previousTransactionHashes: [
            '1PSSGeF...',
            '1Pfalk0...'
         ],
         signature: 'yFrD1wc...',
         timestamp: '2018-06-16T15:22:24.359Z'
      }
   ]
}
```