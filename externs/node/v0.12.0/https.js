

/**
 * https://nodejs.org/api/https.html
 * depends to:
 *      http.js
 * @namespace
 */
var https = {};


/**
 * @type {https.Agent}
 */
https.globalAgent;


/**
 * @param {!Object} options
 * @param {Function=} opt_requestListener
 * @return {!https.Server}
 */
https.createServer = function(options, opt_requestListener) {};


/**
 * @param {(string|!Object)} options
 * @param {Function} callback
 * @return {!http.ClientRequest}
 */
https.request = function(options, callback) {};


/**
 * @param {(string|!Object)} options
 * @param {Function} callback
 * @return {!http.ClientRequest}
 */
https.get = function(options, callback) {};


/**
 * @constructor
 * @extends {http.Server}
 */
https.Server = function() {};


/**
 * @type {number}
 */
https.Server.prototype.timeout;


/**
 * @constructor
 * @extends {http.Agent}
 */
https.Agent = function() {};
