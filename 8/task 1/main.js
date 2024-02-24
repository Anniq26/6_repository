function expo(num1, num2, callback) {
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  callback(result);
}
expo(5, 3, function(result) {
  console.log(result);
});