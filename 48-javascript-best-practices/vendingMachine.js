const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {
    insertCoin: function (coinType) {
        const value = changeHandler.getAmount(coinType);
        balanceManager.increaseBalance(value);
    },

    releaseChange: function () {
        const currentBalance = balanceManager.getBalance();
        balanceManager.decreaseBalance(currentBalance);
        return changeHandler.convertToChange(currentBalance);
    },

    vendProduct: function (productId) {
        const product = productInventory.getProduct(productId);
        balanceManager.decreaseBalance(product.price);
        return product;
    },

    isValidAmount: function (amount) {
        if (!amount )
            return false;
        else
            return true;

    },
};  
