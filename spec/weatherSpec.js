describe ("weather", () => {

  var weather;

  beforeEach( () => {
    weather = new Weather;
  })

  it('creates stormy weather conditions', () => {
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(weather.isStormy()).toEqual(true);
  })

  it('creates non stormy weather', () => {
    spyOn(weather, 'isStormy').and.returnValue(false);
    expect(weather.isStormy()).toEqual(false);
  })
})
