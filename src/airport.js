//constructor function - creates an object that can be called with keyword new
class Airport {
  constructor (weather = new Weather){
  this._hangar = []
  this._CAPACITY = 10;
  this._weather = weather;
  }

  planes() {
    return this._hangar;
  }

  land(plane) {
    if (this._weather.isStormy()){ throw new Error("Bad weather can't land"); }
    if (this.full()) { throw new Error('The airport is full'); }
    this._hangar.push(plane);
  }

  takeOff(plane) {
    if (this._weather.isStormy()){ throw new Error("Bad weather can't take off"); }
    var index = this._hangar.indexOf(plane);
    this._hangar.splice(index, 1);
    return this._hangar;
  }

  full()  {
    if (this._CAPACITY === this._hangar.length)
    {return true} else {return false};
  }
}
