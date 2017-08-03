// Rover Object Goes Here
// ======================
var rover ={
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0, 0]]
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N": rover.direction = "W";
    rover.direction = rover.direction;
    break;
    case "W": rover.direction = "S";
    rover.direction = rover.direction;
    break;
    case "S": rover.direction = "E";
    rover.direction = rover.direction;
    break;
    case "E": rover.direction = "N";
    rover.direction = rover.direction;
    break;
  }
}
function turnRight(rover){
  console.log("turnRight was called!");
    switch (rover.direction){
     case "N": rover.direction = "E";
    rover.direction = rover.direction;
    break;
    case "W": rover.direction = "N";
    rover.direction = rover.direction;
    break;
    case "S": rover.direction = "W";
    rover.direction = rover.direction;
    break;
    case "E": rover.direction = "S";
    rover.direction = rover.direction;
    break;
  }
}
function moveForward(rover) {
  console.log("moveForward was called!");
  switch (rover.direction) {
    case "N": //rover.y -= 1;
      if (rover.y == 0) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.y = rover.y;
      }else{
          rover.y = rover.y - 1;
        }
      break;
    case "S": //rover.y += 1;
      if (rover.y == 9) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.y = rover.y;
      }else{
          rover.y = rover.y + 1;}
      break;
    case "E": //rover.x += 1;
      if (rover.x == 9) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.x = rover.x;
      }else{
          rover.x = rover.x + 1;
      }
      break;
    case "W": //rover.x -= 1;
      if (rover.x == 0) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.x = rover.x;
      }else{
          rover.x = rover.x - 1;
      }
      break;
  }
  var newPosition = [rover.x, rover.y];
  rover.travelLog.push(newPosition);
}
function moveBackward(rover) {
  console.log("moveBackward was called!");
  switch (rover.direction) {
    case "N": //rover.y += 1;
      if (rover.y == 0) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.y = rover.y;
      }else{
          rover.y = rover.y + 1;
        }
      break;
    case "S": //rover.y -= 1;
      if (rover.y == 9) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.y = rover.y;
      }else{
          rover.y = rover.y - 1;}
      break;
    case "E": //rover.x -= 1;
      if (rover.x == 9) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.x = rover.x;
      }else{
          rover.x = rover.x - 1;
      }
      break;
    case "W": //rover.x += 1;
      if (rover.x == 0) {
        console.log("Ouch! You are on the limit of Mars, Be careful!");
        rover.x = rover.x;
      }else{
          rover.x = rover.x + 1;
      }
      break;
  }
  var newPosition = [rover.x, rover.y];
  rover.travelLog.push(newPosition);
}
function LetsGo(commands) {
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      default:
        console.log('I think you are wrong, "' + commands[i] + '"' + ' is not a valid command. Try again!');
    }
  }
console.log(rover);
}
