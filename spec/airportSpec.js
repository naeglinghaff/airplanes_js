describe('Airport', () => {

  var airport;

  beforeEach( () => {
    airport = new Airport();
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

});
