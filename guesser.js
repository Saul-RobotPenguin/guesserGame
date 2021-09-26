function letterGuesser() {
  const letter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]; /// 26 Letters but for our index its outcomes are 25 when including 0 index in programming

  //Use this to generate a number for our index letterGuesser array that goes from 0 to 25
  let number = Math.floor(Math.random() * 26);

  //asssign an array indices from letters array
  let letterChosenForPlayer = letter[number];

  //Lets the user know what they got while also storing their  integer response
  let userResponse = prompt(
    "Hello player! The number you got is " +
      `${letterChosenForPlayer}` +
      " , can you guess what letter from the alphabet is located at that array index?"
  );
  //Check to see if the user response is the same as to what the letter was given to see if player won or lost
  if (`${letterChosenForPlayer}` === `${letter[userResponse]}`) {
    alert("Wow, you know your alphabet will, good job!");
  } else {
    alert(
      "hey, you need to learn your ABCs and use string interpolation to give them the correct answer."
    );
  }
}
letterGuesser();
