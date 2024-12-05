module.exports = {
    products: [
        {
          name: 'Skittles',
          price: 85,
          id: 'A1'
        }
    ],

    getProduct: function (productId) 
        {
            const product = products.find(function (p) { return p.id === productId; });
            return product;
        },

    getProducts: function () {
        return products;
    },
};