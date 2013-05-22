var asker = require('asker'),
    Vow = require('vow');

/**
 * Wraps asker API in the Vow promises implementation.
 * @param {Object} options see http://npm.im/asker for details
 * @returns {Vow.Promise}
 */
function vowAsker(options) {
    var promise = Vow.promise();

    asker(options, function(error, response) {
        if (error) {
            promise.reject(error);
        } else {
            promise.fulfill(response);
        }
    });

    return promise;
}

vowAsker.Error = asker.Error;

module.exports = vowAsker;
