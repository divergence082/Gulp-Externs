

/**
 * @namespace
 */
var tls = {};


/**
 * @type {number}
 */
tls.CLIENT_RENEG_LIMIT;


/**
 * @type {number}
 */
tls.CLIENT_RENEG_WINDOW;


/**
 * @return {!Array.<string>}
 */
tls.getCiphers = function() {};


/**
 * @param {!Object} options
 * @param {Function=} opt_secureConnectionListener
 * @return {!tsl.Server}
 */
tls.createServer = function(options, opt_secureConnectionListener) {};


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {!Object=} opt_options
 * @param {Function=} opt_callback
 * @return {!tls.TLSSocket}
 */
tls.connect = function(port, opt_host, opt_options, opt_callback) {};


/**
 * @param {!Object} details
 * @return {!SecureContext}
 */
tls.createSecureContext = function(details) {};


/**
 * @param {!SecureContext=} opt_context
 * @param {boolean=} opt_isServer
 * @param {boolean=} opt_requestCert
 * @param {boolean=} opt_rejectUnauthorized
 * @return {!SecurePair}
 */
tls.createSecurePair = function(opt_context, opt_isServer,
                                opt_requestCert, opt_rejectUnauthorized) {};


/**
 * @event secureConnection 
 * @event clientError 
 * @event newSession 
 * @event resumeSession 
 * @event OCSPRequest
 * @constructor
 * @extends {net.Server}
 */
tls.Server = function() {};


/**
 * @type {number}
 */
tls.Server.prototype.maxConnections;


/**
 * @type {number}
 */
tls.Server.prototype.connections;


/**
 * @param {number} port
 * @param {string=} opt_host
 * @param {Function=} opt_callback
 */
tls.Server.prototype.listen = function(port, opt_host, opt_callback) {};


/**
 * 
 */
tls.Server.prototype.close = function() {};


/**
 * @return {!Object}
 */
tls.Server.prototype.address = function() {};


/**
 * @param {string} hostname
 * @param {!SecureContext} context
 */
tls.Server.prototype.addContext = function(hostname, context) {};


/**
 * @param socket
 * @param options
 * 
 * @event secureConnect
 * @event OCSPResponse
 * @constructor
 * @extends {net.Socket}
 * @extends {stream.Duplex}
 */
tls.TLSSocket = function(socket, options) {};


/**
 * @type {boolean}
 */
tls.TLSSocket.prototype.encrypted;


/**
 * @type {boolean}
 */
tls.TLSSocket.prototype.authorized;


/**
 * @type {string}
 */
tls.TLSSocket.prototype.authorizationError;


/**
 * @type {string}
 */
tls.TLSSocket.prototype.remoteAddress;


/**
 * @type {string}
 */
tls.TLSSocket.prototype.remoteFamily;


/**
 * @type {number}
 */
tls.TLSSocket.prototype.remotePort;


/**
 * @type {string}
 */
tls.TLSSocket.prototype.localAddress;


/**
 * @type {number}
 */
tls.TLSSocket.prototype.localPort;


/**
 * @param {boolean=} opt_detailed
 * @return {!Object}
 */
tls.TLSSocket.prototype.getPeerCertificate = function(opt_detailed) {};


/**
 * @return {!Object}
 */
tls.TLSSocket.prototype.getCipher = function() {};


/**
 * @param {!Object} options
 * @param {!function(?Error)} callback
 */
tls.TLSSocket.prototype.renegotiate = function(options, callback) {};


/**
 * @param {number} size
 * @return {number}
 */
tls.TLSSocket.prototype.setMaxSendFragment = function(size) {};


/**
 * @return {*}
 */
tls.TLSSocket.prototype.getSession = function() {};


/**
 * @return {*}
 */
tls.TLSSocket.prototype.getTLSTicket = function() {};


/**
 * @return {!Object}
 */
tls.TLSSocket.prototype.address = function() {};


/**
 * @constructor
 */
var SecureContext = function() {};


/**
 * @event secure
 * @constructor
 */
var SecurePair = function() {};


/**
 * @constructor
 * @extends {stream.Duplex}
 */
var CryptoStream = function() {};


/**
 * @type {number}
 */
CryptoStream.prototype.bytesWritten;
