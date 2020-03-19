'use strict';

describe('Feature Test:', () => {
  var plane;
  var airport;
  var weather;

  beforeEach( () => {
    weather = new Weather;
    plane = new Plane();
    airport = new Airport(weather);
  });

  describe('Bad weather conditions', () => {
    beforeEach(() => {
      spyOn(weather, 'isStormy').and.returnValue(true);
    })

    it('raises error when a plane tries to land', () => {
      expect( () => { airport.land(plane) }).toThrowError("Bad weather can't land");
    })

    it('raises error when plane takes off', () => {
      expect( () => {airport.takeOff(plane) }).toThrowError("Bad weather can't take off");
    })
  })

  describe('normal weather conditions', () => {

    beforeEach(() => {
      spyOn(weather, 'isStormy').and.returnValue(false);
    })

  it('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can take off from an airport', () => {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport._hangar.length).toEqual(0);
  });

  it('throws error when plane lands at capacity', () => {
    for (var i = 1; i < 10; i++) {
      plane.land(airport);
    };
    plane.land(airport);
    expect( () => { airport.land(plane)} ).toThrowError("The airport is full");
  })

  })

});
