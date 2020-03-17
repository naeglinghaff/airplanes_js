let Plane = function (){
  this.landed = false
}

Plane.prototype.land = function(airport){
  this.landed = true;
  airport.land(this);
};
