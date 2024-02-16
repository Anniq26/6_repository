const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const button = document.getElementById("submitBtn");
const form = document.querySelector('.form');

btn.onclick = (() => {
    modal.style.display = "block";
  })
  
  span.onclick =  (() => {
    modal.style.display = "none";
  })

  window.onclick =  (() => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = document.querySelector('input[name="colorInput"]')

  if(!input) {
    alert('Please enter the color');
    return
  }

  if(input === 'red' || input === 'blue', input === 'green', input === 'black', input === 'white'){
    modal.style.background = Input;} 
    
    if (input !== 'red' || input !== 'blue', input !== 'green', input !== 'black', input !== 'white'){
  alert("Please enter 'red', 'green', or 'blue'")
}
 
})