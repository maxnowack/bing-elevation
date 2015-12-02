# bing-elevation

Node.js module for using the Bing Maps Elevation API.

## Usage

```javascript
var elevationClient = new BingElevation({
    key: "MYBINGMAPSKEY"
});

var coordinates = [
    [36.9719, -122.0264],       // santa cruz
    [-13.5250, -71.9722],       // cuzco
    [31.5000, 35.5000]          // dead sea
];

elevationClient.elevationsForCoordinates(coordinates, function(err, response) {
    // set of elevations in response.resourceSets[0].resources[0].elevations
});
 ```

