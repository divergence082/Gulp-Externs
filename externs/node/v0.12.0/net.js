

/**
 * @namespace
 */
var net = {};


/**
 * @param {!Object=} opt_options
 * @param {Function=} opt_connectionListener
 * @return {!net.Server}
 */
net.createServer = function(opt_options, opt_connectionListener) {};


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {Function=} opt_connectListener
 * @return {!net.Socket}
 */
net.connect = function(port, opt_host, opt_connectListener) {};


/**
 * @param {(string|!Object)} options Options or pah
 * @param {Function=} opt_connectListener
 * @return {!net.Socket}
 */
net.createConnection = function(options, opt_connectListener) {};


/**
 * @param {string} input
 * @return {number}
 */
net.isIP = function(input) {};


/**
 * @param {string} input
 * @return {boolean}
 */
net.isIPv4 = function(input) {};


/**
 * @param {string} input
 * @return {boolean}
 */
net.isIPv6 = function(input) {};



/**
 * @event listening
 * @event connection
 * @event close
 * @event error
 * @constructor
 * @extends {events.EventEmitter}
 */
net.Server = function() {};


/**
 * @type {number}
 */
net.Server.maxConnections;


/**
 * @deprecated
 * @type {number}
 */
net.Server.connections;


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {Function=} opt_callback
 */
net.Server.prototype.listen = function(port, opt_host, opt_callback) {};


/**
 * @param {Function=} opt_callback
 */
net.Server.prototype.close = function(opt_callback) {};


/**
 * @param {function(?Error, number)} callback
 */
net.Server.prototype.getConnections = function(callback) {};


/**
 * @return {{port: number, family: string, address: string}}
 */
net.Server.prototype.address = function() {};


/**
 *
 */
net.Server.prototype.unref = function() {};


/**
 *
 */
net.Server.prototype.ref = function() {};


/**
 * @param {!Object=} opt_options
 *
 * @event lookup
 * @event connect
 * @event data
 * @event end
 * @event timeout
 * @event drain
 * @event error
 * @event close
 * @constructor
 * @extends {stream.Duplex}
 */
net.Socket = function(opt_options) {};


/**
 * @type {number}
 */
net.Socket.bufferSize;


/**
 * @type {string}
 */
net.Socket.prototype.remoteAddress;


/**
 * @type {string}
 */
net.Socket.prototype.remoteFamily;


/**
 * @type {number}
 */
net.Socket.prototype.remotePort;


/**
 * @type {string}
 */
net.Socket.prototype.localAddress;


/**
 * @type {number}
 */
net.Socket.prototype.localPort;


/**
 * @type {number}
 */
net.Socket.prototype.bytesRead;


/**
 * @type {number}
 */
net.Socket.prototype.bytesWritten;


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {Function=} opt_connectListener
 */
net.Socket.prototype.connect = function(port, opt_host, opt_connectListener) {};


/**
 *
 */
net.Socket.prototype.destroy = function() {};


/**
 * @param {number} timeout
 * @param {Function=} opt_callback
 */
net.Socket.prototype.setTimeout = function(timeout, opt_callback) {};


/**
 * @param {boolean=} opt_noDelay
 */
net.Socket.prototype.setNoDelay = function(opt_noDelay) {};


/**
 * @param {boolean=} opt_enable
 * @param {number=} opt_initialDelay
 */
net.Socket.prototype.setKeepAlive = function(opt_enable, opt_initialDelay) {};
