import HaversineGeolocation from "../index";

describe("Test for Haversine-Geolocation", () => {
  let distance = null,
    distanceBetween = null,
    closestPosition = null;

  beforeEach(() => {
    const points = [
      {
        latitude: 61.5322204,
        longitude: 28.7515963
      },
      {
        latitude: 51.9971208,
        longitude: 22.1455439
      },
      {
        latitude: 45.3571207,
        longitude: 30.3435456
      },
      {
        latitude: 51.2971208,
        longitude: 22.0455439
      },
      {
        latitude: 62.0971208,
        longitude: 13.0455439
      },
    ];

    distance = HaversineGeolocation._haversine(
      points[0].latitude,
      points[0].longitude,
      points[1].latitude,
      points[1].longitude
    );

    distanceBetween = HaversineGeolocation.getDistanceBetween(points[0], points[1], 'mi');
    closestPosition = HaversineGeolocation.getClosestPosition(points[0], points);
  });

  it("haversine: value type number", () => assert.isNumber(distance));
  it("getDistanceBetween: greater than zero", () => assert.isAbove(distanceBetween, 0));
  it("closestPosition: value type object", () => assert.isObject(closestPosition));
});
