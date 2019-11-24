var win = false;

window.rollDice = () =>{
  if(win){
    return;
  }

  const max = 5;
  const roll = Math.ceil(Math.random()*max) + 1;

  console.log("You rolled ", roll);
  let currentPlayer = player[playerPosition];
  currentPlayer.position += roll;
  console.log(currentPlayer);


  ladders.forEach(ladder =>{
    if(ladder.startLadder === currentPlayer.position){
      console.log("Get a ladder, go to ", ladder.endLadder);
      currentPlayer.position = ladder.endLadder;
    }
  });


  snakes.forEach(snake =>{
    if(snake.startSnake === currentPlayer.position){
      console.log("Eat by snake! Go to ", snake.endSnake);
      currentPlayer.position = snake.endSnake;
    }
  });

  if(currentPlayer.position >= 25){
    console.log("You rolled ", roll, "Player ", currentPlayer," won!");
    win = true;
  }

  playerPosition++;
  if(playerPosition >= player.length){
    playerPosition = 0;
  }
}



const player = [
  {name : "Player 1", position : 0},
  {name : "Player 2", position : 0}
];

const snakes = [
  {startSnake : 15, endSnake : 5},
  {startSnake : 23, endSnake : 16}
];

const ladders = [
  {startLadder : 8, endLadder : 15},
  {startLadder : 19, endLadder : 24}
];


let playerPosition = 0;

const width = 5;
const length = 5;
const board = [ ];

for(var  y = 0; y < length; y++){
  let row =[ ];
  let position = 0;
  board.push(row);

  for(var x = 0; x < width; x++){
    row.push({x,y, occupied: null, position});
  }
}

console.log(board);

ladders.forEach(ladder =>{

  let startPos = {x:0, y:0};
  let endPos = {x:0, y:0};
})
