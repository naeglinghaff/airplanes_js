function Weather (){
  this.stormy = true;
}

Weather.prototype.isStormy = function(){
  var chance = Math.random();
  if (chance >= 0.7) {
    this.stormy = true;
  } else {
    this.stormy = false;
  };
  return this.stormy;
}
