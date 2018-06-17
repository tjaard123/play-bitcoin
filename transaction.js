function create(from, to, value) {
   return {
      fromAddress: from,
      toAddress: to,
      value: value
   };
}

module.exports = {
   create: create
};