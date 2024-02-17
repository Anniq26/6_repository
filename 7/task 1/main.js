function delay(miliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, miliseconds);
  });
}

// Example usage:
console.log('Start');
delay(2000).then(() => {
  console.log('Toy is ready');
});
