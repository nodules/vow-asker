var Asker = require('asker'),
    ask = Asker,
    vow = require('vow');

/**
 * Wraps asker API in the Vow promises implementation.
 * @param {Object} options see http://npm.im/asker for details
 * @returns {vow.Promise}
 */
function vowAsker(options) {
    var deferred = vow.defer();

    ask(options, function(error, response) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(response);
        }
    });

    return deferred.promise();
}

vowAsker.Error = Asker.Error;
vowAsker._Asker = Asker;

module.exports = vowAsker;
