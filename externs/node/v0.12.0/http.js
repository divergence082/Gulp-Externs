

/**
 * https://nodejs.org/docs/v0.12.0/api/http.html
 *
 * depends on:
 *      events.js
 *      stream.js
 *      net.js
 *      buffer.js
 *
 * @namespace
 */
var http = {};


/**
 * @type {!Array.<string>}
 */
http.METHODS;


/**
 * @type {!Array.<string>}
 */
http.STATUS_CODES;


/**
 * @type {!http.Agent}
 */
http.globalAgent;


/**
 * @param {Function=} opt_requestListener
 * @return {!http.Server}
 */
http.createServer = function(opt_requestListener) {};


/**
 * @deprecated
 * @param {number=} opt_port
 * @param {string=} opt_host
 * @return {!http.ClientRequest}
 */
http.createClient = function(opt_port, opt_host) {};


/**
 * @param {(string|!Object)} options
 * @param {Function=} opt_callback
 * @return {!http.ClientRequest}
 */
http.request = function(options, opt_callback) {};


/**
 * @param {(string|!Object)} options
 * @param {Function=} opt_callback
 * @return {!http.ClientRequest}
 */
http.get = function(options, opt_callback) {};


/**
 * @event request
 * @event connection
 * @event close
 * @event checkContinue
 * @event connect
 * @event upgrade
 * @event clientError
 * @constructor
 * @extends {events.EventEmitter}
 */
http.Server = function() {};


/**
 * @type {number}
 */
http.Server.prototype.maxHeadersCount;


/**
 * @type {number}
 */
http.Server.prototype.timeout;


/**
 * @param {number} port
 * @param {string=} opt_hostname
 * @param {Function=} opt_callback
 */
http.Server.prototype.listen = function(port, opt_hostname, opt_callback) {};


/**
 * @param {Function=} opt_callback
 */
http.Server.prototype.close = function(opt_callback) {};


/**
 * @param {number} msecs
 * @param {Function} callback
 */
http.Server.prototype.setTimeout = function(msecs, callback) {};


/**
 * @event close
 * @event finish
 * @constructor
 * @extends {stream.WritableStream}
 */
http.ServerResponse = function() {};


/**
 * @type {number}
 */
http.ServerResponse.prototype.statusCode;


/**
 * @type {string}
 */
http.ServerResponse.prototype.statusMessage;


/**
 * @type {boolean}
 */
http.ServerResponse.prototype.headersSent;


/**
 * @type {boolean}
 */
http.ServerResponse.prototype.sendDate;


/**
 * 
 */
http.ServerResponse.prototype.writeContinue = function() {};


/**
 * @param {number} statusCode
 * @param {string=} opt_statusMessage
 * @param {!Object=} opt_headers
 */
http.ServerResponse.prototype.writeHead = 
    function(statusCode, opt_statusMessage, opt_headers) {};


/**
 * @param {number} msecs
 * @param {Function} callback
 */
http.ServerResponse.prototype.setTimeout = function(msecs, callback) {};


/**
 * @param {string} name
 * @param {string} value
 */
http.ServerResponse.prototype.setHeader = function(name, value) {};


/**
 * @param {string} name
 * @return {string}
 */
http.ServerResponse.prototype.getHeader = function(name) {};


/**
 * @param {string} name
 */
http.ServerResponse.prototype.removeHeader = function(name) {};


/**
 * @param {!Object} headers
 */
http.ServerResponse.prototype.addTrailers = function(headers) {};


/**
 * @param {(string|!Buffer)=} opt_data
 * @param {string=} opt_encoding
 * @param {Function=} opt_callback
 */
http.ServerResponse.prototype.end = 
    function(opt_data, opt_encoding, opt_callback) {};


/**
 * @param {!Object=} opt_options
 * @constructor
 */
http.Agent = function(opt_options) {};


/**
 * @type {number}
 */
http.Agent.prototype.maxSockets;


/**
 * @type {number}
 */
http.Agent.prototype.maxFreeSockets;


/**
 * @type {!Object}
 */
http.Agent.prototype.sockets;


/**
 * @type {!Object}
 */
http.Agent.prototype.freeSockets;


/**
 * @type {!Object}
 */
http.Agent.prototype.requests;


/**
 * 
 */
http.Agent.prototype.destroy = function() {};


/**
 * @param {!Object} options
 * @return {string}
 */
http.Agent.prototype.getName = function(options) {};


/**
 * @event response
 * @event socket
 * @event connect
 * @event upgrade
 * @event continue
 * @constructor
 * @extends {stream.WritableStream}
 */
http.ClientRequest = function() {};


/**
 * 
 */
http.ClientRequest.prototype.flushHeaders = function() {};


/**
 *
 */
http.ClientRequest.prototype.abort = function() {};


/**
 * @param {number} timeout
 * @param {Function=} opt_callback
 */
http.ClientRequest.prototype.setTimeout = function(timeout, opt_callback) {};


/**
 * @param {boolean=} opt_noDelay
 */
http.ClientRequest.prototype.setNoDelay = function(opt_noDelay) {};


/**
 * @param {boolean=} opt_enable
 * @param {number=} opt_initialDelay
 */
http.ClientRequest.prototype.setSocketKeepAlive = 
    function(opt_enable, opt_initialDelay) {};


/**
 * @event close
 * @constructor
 */
http.IncomingMessage = function() {};


/**
 * @type {string}
 */
http.IncomingMessage.prototype.httpVersion;


/**
 * @type {!Object}
 */
http.IncomingMessage.prototype.headers;


/**
 * @type {!Array.<string>}
 */
http.IncomingMessage.prototype.rawHeaders;


/**
 * @type {!Object}
 */
http.IncomingMessage.prototype.trailers;


/**
 * @type {!Array.<string>}
 */
http.IncomingMessage.prototype.rawTrailers;


/**
 * @type {string}
 */
http.IncomingMessage.prototype.method;


/**
 * @type {string}
 */
http.IncomingMessage.prototype.url;


/**
 * @type {number}
 */
http.IncomingMessage.prototype.statusCode;


/**
 * @type {string}
 */
http.IncomingMessage.prototype.statusMessage;


/**
 * @type {!net.Socket}
 */
http.IncomingMessage.prototype.socket;


/**
 * @param {number} msecs
 * @param {Function} callback
 */
http.IncomingMessage.prototype.setTimeout = function(msecs, callback) {};
