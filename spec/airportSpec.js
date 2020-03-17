describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has no planes', function(){
    expect(airport.hangar()).toEqual([]);
  });
});
