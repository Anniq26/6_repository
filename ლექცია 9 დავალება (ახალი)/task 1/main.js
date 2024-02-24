import validator from 'validator';

const isEmail = require('validator')

console.log(validator.isEmail('test@test.com'))
console.log(validator.isEmail('abcDE123'))
