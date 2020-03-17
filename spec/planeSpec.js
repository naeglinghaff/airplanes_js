'use strict';

describe('Plane', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['land']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.land).toHaveBeenCalledWith(plane);
  });
});
