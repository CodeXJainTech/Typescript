// enum does not exist in javascript.

/*
in javascript it appears as
  var Direction;
  (function (Direction) {
      Direction[Direction["up"] = 0] = "up";
      Direction[Direction["down"] = 1] = "down";
      Direction[Direction["left"] = 2] = "left";
      Direction[Direction["right"] = 3] = "right";
  })(Direction || (Direction = {}));
*/


enum Direction {
  up,
  down,
  left, 
  right
}
//in js they will be mapped to 0,1..... untile we give them ha value like up = "up".

function doSomething(keyPressed: Direction){
  if(keyPressed == Direction.up){
    console.log("up");
  }
  else if(keyPressed == Direction.down){
    console.log("down");
  }
  else if(keyPressed == Direction.left){
    console.log("left");
  }
  else{
    console.log('right');
  }
}

doSomething(Direction.up);
doSomething(Direction.down);