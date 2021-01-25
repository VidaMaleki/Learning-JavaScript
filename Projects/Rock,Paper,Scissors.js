const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock' || userInput=== 'paper' ||
    userInput=== 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Invalid Item!')
    };
  };
  
  /*console.log(getUserChoice('paper'));
  console.log(getUserChoice('blue'));*/
  
  function getComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  /*console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());*/
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return "Game is tie! try again.";
    };
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "Sorry! Computer won.";
    } else {
      return "Congrates! You Won!";
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return "Sorry! Computer won.";
    }else{
      return "Congrates! You Won!";
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return "Sorry! Computer won.";
    }else{
      return "Congrates! You Won!";
    };
  };
  if(userChoice === 'bomb'){
    return "You Won!!!";
  }
  };
  /*console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'rock'));
  console.log(determineWinner('rock', 'rock'));*/
  function playGame(){
    let userChoice = getUserChoice('paper')
      let computerChoice = getComputerChoice()
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice ))
  ;
  };
  playGame();