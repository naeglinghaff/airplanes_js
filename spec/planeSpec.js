'use strict';

describe('Plane', () => {

  var plane;
  var airport;

  beforeEach( () => {
    plane = new Plane();
    //creates  a spy or double we can use in out tests
    airport = jasmine.createSpyObj('airport', ['land']);
  });

  it('can land at an airport', () => {
    plane.land(airport);
    expect(airport.land).toHaveBeenCalledWith(plane);
  });

  it('knows if it is landed', () => {
    plane.land(airport);
    expect(plane.landed).toEqual(true);
  })
});
