
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');



module.exports = {







  insertCoin: function(coinType)
  {
      const value = changeHandler.getAmount(coinType);
      balanceManager.increaseBalance(value);
  },

releaseChange: function () 
  {
      const currentBalance = balanceManager.getBalance();
      balanceManager.decreaseBalance(currentBalance);
      return this.convertToChange(currentBalance);
  },

vendProduct: function (productId) {
      const product = this.getProduct(productId);
      balanceManager.decreaseBalance(product.price);
      return product;
    },

  isValidAmount: function (amount) {
    if (amount === null) {
      return false;
    } else {
      return true;
    }
  },

};
