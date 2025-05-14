var app = angular.module('ecommerceApp', []);

app.controller('EcommerceController', function($scope) {
    // Sample Product Data
    $scope.products = [
        { id: 1, name: "Product 1", description: "Description of product 1", price: 29.99, image: "https://via.placeholder.com/200", category: "Electronics", brand: "Brand A" },
        { id: 2, name: "Product 2", description: "Description of product 2", price: 19.99, image: "https://via.placeholder.com/200", category: "Electronics", brand: "Brand B" },
        { id: 3, name: "Product 3", description: "Description of product 3", price: 49.99, image: "https://via.placeholder.com/200", category: "Home Appliances", brand: "Brand A" },
        { id: 4, name: "Product 4", description: "Description of product 4", price: 99.99, image: "https://via.placeholder.com/200", category: "Clothing", brand: "Brand C" },
        { id: 5, name: "Product 5", description: "Description of product 5", price: 59.99, image: "https://via.placeholder.com/200", category: "Home Appliances", brand: "Brand C" }
    ];

    // Sample Categories and Brands
    $scope.categories = ["Electronics", "Home Appliances", "Clothing"];
    $scope.brands = ["Brand A", "Brand B", "Brand C"];

    // Cart Array
    $scope.cart = [];

    // Add product to cart
    $scope.addToCart = function(product) {
        $scope.cart.push(product);
    };

    // Remove product from cart
    $scope.removeFromCart = function(item) {
        const index = $scope.cart.indexOf(item);
        if (index > -1) {
            $scope.cart.splice(index, 1);
        }
    };

    // Get total price of the cart
    $scope.getTotal = function() {
        return $scope.cart.reduce(function(total, item) {
            return total + item.price;
        }, 0).toFixed(2);
    };

    // Checkout function (for demo)
    $scope.checkout = function() {
        alert("Proceeding to checkout. Total: $" + $scope.getTotal());
    };
});
