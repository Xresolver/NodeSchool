const vendingMachine = require('./vendingMachine')


let balance = 0;

module.exports = 
{
    isValidAmount: vendingMachine.isValidAmount,

    getBalance: function()
    { 
        return balance;
    },

    decreaseBalance: function(amount)
        {

            let errorMessage;
            if(!vendingMachine.canAfford(amount)){
                errorMessage = 'Insufficient balance';
            }
            if(errorMessage){
                throw new Error(errorMessage);
            }
            balance -= amount;
        },
    
    increaseBalance: function(amount)
        {
            balance += amount;
        },
    
    canAfford: function(amount)
        {            
            let errorMessage;

            if(!vendingMachine.isValidAmount(amount))
                errorMessage = 'Invalid Input';
            
            if(errorMessage)
                throw new Error(errorMessage);
            
            return amount <= balance;
        },
};