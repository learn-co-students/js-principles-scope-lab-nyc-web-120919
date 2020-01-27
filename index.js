// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'test';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(customer) {
    bestCustomer = customer;
}

function changeLeastFavoriteCustomer(customer) {
    leastFavoriteCustomer = customer;
}