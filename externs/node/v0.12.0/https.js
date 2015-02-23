

/**
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
 * @extends {tsl.Server}
 * @extends {http.Server}
 */
https.Server = function() {};


/**
 * @type {number}
 */
https.Server.prototype.timeout;


/**
 * @param {number} msecs
 * @param {Function} callback
 */
https.Server.prototype.setTimeout = function(msecs, callback) {};


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {Function=} opt_callback
 */
https.Server.prototype.listen = function(port, opt_host, opt_callback) {};


/**
 * @param {Function=} opt_callback
 */
https.Server.prototype.close = function(opt_callback) {};


/**
 * @constructor
 * @extends {http.Agent}
 */
https.Agent = function() {};
