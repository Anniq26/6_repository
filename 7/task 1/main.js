function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Example usage:
console.log('Start');
delay(2000).then(() => {
  console.log('This message will be delayed by 2 seconds');
});
