class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() { }
  stop() { }
  update() { 
    log(direction, this.floor)
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log(x, y) {
    if(this.MAXFLOOR > this.floor){
      x = "up";
    } else if (this.MAXFLOOR < this.floor){
      x = "down";
    }
    return "Direction: " + x + "|" + "Floor: " + this.floor
  }
}

module.exports = Elevator;

