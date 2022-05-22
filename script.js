const clearDisplay = () => {
  let input = document.getElementById("display").value = "";
}

const calcLogic = (num) => {

  switch (num) {
    case '=':
      answer();
      console.log(" = Pressed");
      break;
    case `+`:
      addNumbers();
      console.log(" + Pressed");
      break;
    default:
      console.log("Try again");
  }
  console.log("Var ", num);
  let display = document.getElementById("display").value += num;

}

const addNumbers = () => {
  console.log("Answer ", document.getElementById("display").value)
}

const answer = () => {
  console.log("Answer")
  let sum = document.getElementById("display").value;
  console.log("Sum", sum)
}
