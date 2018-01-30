class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "";
  }

  start() { 
    this.clear = setInterval(() => {
      this.update()
  }, 1000);
} 

  stop(){
    clearInterval(this.clear)
   };
  update() { 
    if(this.direction == "up"){
      this.floorUp();
    } else{
      this.floorDown();
    }
   this.log()
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor < this.MAXFLOOR){
      this.floor++;
    }
      else{
        this.direction = "down"
      }
   }
  
  floorDown() {
    if (this.floor > 0){
      this.floor--; 
    }
      else{
        this.direction = "up"
      }
   }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;