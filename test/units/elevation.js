var assert = require('assert'),
    BingElevation = require('../../lib');

var elevationClient = new BingElevation({
    key: process.env.BING_MAPS_KEY
});

describe('elevation', function() {
    it('can get elevations for a set of coordinates', function(done) {
        var coordinates = [
            [36.9719, -122.0264],       // santa cruz
            [-13.5250, -71.9722],       // cuzco
            [31.5000, 35.5000]          // dead sea
        ];

        elevationClient.elevationsForCoordinates(coordinates, function(err, response) {
            assert(!err);

            assert(response.resourceSets[0].resources);
            assert.equal(3, response.resourceSets[0].resources[0].elevations.length);
            assert.equal(4, response.resourceSets[0].resources[0].elevations[0]);
            assert.equal(3356, response.resourceSets[0].resources[0].elevations[1]);
            assert.equal(-413, response.resourceSets[0].resources[0].elevations[2]);

            done();
        });
    });
});
