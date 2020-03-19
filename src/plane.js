class Plane {
  constructor(){
    this.landed = false;
  }

  land(airport) {
    this.landed = true;
    airport.land(this);
  }

  takeOff(airport) {
    this.landed = false;
    airport.takeOff(this);
  }
}
