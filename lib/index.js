function BingElevation(config) {
    this.config = config;
}

BingElevation.prototype.elevationsForCoordinates = function(coordinates, callback) {
    var coordinatesString = "";
    var prefix = "";
    coordinates.forEach(function(coordinate) {
        if (coordinate.length !== 2) return;

        coordinatesString += prefix + coordinate.join(',');
        prefix = ",";
    });

    var url = "http://dev.virtualearth.net/REST/v1/Elevation/List?points=" + coordinatesString;

    this.authedFetch(url).then(function(res) {
        return res.json();
    }).then(function(response) {
        return callback(null, response);
    }).catch(function(err) {
        return callback(err);
    });
};

BingElevation.prototype.authedFetch = function(url) {
    url += '&key=' + this.config.key;
    return fetch(url);
};

module.exports = BingElevation;
