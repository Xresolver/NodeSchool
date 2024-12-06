// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
const coin =
{
    p: 1,
    n: 5,
    d: 10,
    q: 25
};

module.exports = 
{
    getAmount: function (coinType) 
        {
            if(coin.hasOwnProperty(coinType))
                return coin[coinType]
            else
                throw new Error('Unrecognized coin ' + coinType);
        },

    convertToChange: function(amount)
        {
            const cents = [];

            while(amount !== 0)
            {
                if((amount - coin.q) > 0)
                {
                    cents.push('q');
                    amount -= coin.q;
                }
                else if((amount - coin.d) > 0)
                {
                    cents.push('d');
                    amount -= coin.d;
                }
                else if((amount - coin.n) > 0)
                {
                    cents.push('n');
                    amount -= coin.n;
                }
                else
                {
                    cents.push('p');
                    amount -= coin.p;
                }
            }

            return cents.sort();
        }
};