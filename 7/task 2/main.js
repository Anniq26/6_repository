function delay(miliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, miliseconds);
  });
}

// // Example usage:
// console.log('Start');
// delay(2000).then(() => {
//   console.log('Toy is ready');
// });


async function makeToys(){
  if(Math.random() > 0.1){
    delay(3000).then(() => {return ('Undefected')})
  } else { return ('Defected') }
}

async function sellToys (status) {
  if(status === 'Undefected'){
    if(Math.random() > 0.7){
      delay(1000).then(() => { return ('Toy has been sold')})
    } else {
      return ('Toy was unsuccessful')
    }
  }
}

async function deliverToys (action) {
  if(action === 'Toy has been sold'){
    if(Math.random() > 0.7){
      delay(2000).then(() => {return ('Toy has been delivered')})
    } else {
      return ('Toy has not been delivered')
    }
  }
}

async function promisify(){
  try {
    const status = await makeToys()
    const action = await sellToys(status)
    const result = await deliverToys(action)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

promisify()

