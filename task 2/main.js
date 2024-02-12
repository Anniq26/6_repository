  const numbersInput = document.getElementById("numbersInput").value;
  const numbersArray = numbersInput.split(":").map(Number);
  const avBtn = document.getElementById("averageBtn");
  const averageResult = document.getElementById("averageResult");

  avBtn.addEventListener("average", (e) =>{
    e.preventDefault()

  if (numbersArray.length > 0 && !numbersArray.includes()){
    const sum = numbersArray.reduce(function (a, b) {
      return a + b;
    }, 0);
  const average = sum / numbersArray.length;
  document.getElementById("averageResult").textContent = "Average: "+ average;
  } else {
    alert ("Please enter valid numbers separated by ':'");
  }
})