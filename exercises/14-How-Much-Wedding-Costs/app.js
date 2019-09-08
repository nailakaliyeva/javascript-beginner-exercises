let userInput = prompt('How many people are coming to your wedding?');

function tellThePrice(userInput){
  if (userInput<=50){
    return "$4000";
  }
  else if (userInput<=100){
    return "$10000";
  }
  else if (userInput<=200){
    return "$15000";
  }
  else if (userInput>200){
    return "$20000";
}
}
tellThePrice();

console.log('Your wedding will cost '+tellThePrice(userInput)+' dollars');

module.exports = tellThePrice;