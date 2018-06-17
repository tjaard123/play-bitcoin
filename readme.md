# Bitcoin

Building Bitcoin from scratch for fun

## Resources

* [Bitcoin whitepaper](https://bitcoincore.org/bitcoin.pdf)
* [Core concepts](~/core-concepts.md)

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
   }
   transactions: [
      {
         value: 10.00,
         fromAddress: '1PSSGeF...',
         toAddress: '9hrQDDWc...',
         signature: 'yFrD1wc...'
         timestamp: '2018-06-16T15:22:24.359Z'
      }
   ]
}
```