

//http://nodejs.org/docs/v0.12.0/api/stream.html


/**
 * @namespace
 */
var stream = {};


/**
 * @typedef {{end: boolean=}}
 */
stream._PipeOptions;


/**
 * @event data
 * @event error
 * @event end
 * @event close
 * @event readable
 *
 * @interface
 * @extends {events.EventEmitter}
 */
stream.ReadableStream = function() {};

/**
 * @param {number=} opt_size
 * @return {?(string|Buffer)}
 */
stream.ReadableStream.prototype.read = function(opt_size) {};


/**
 * @param {string} encoding
 * @return {!stream.ReadableStream}
 */
stream.ReadableStream.prototype.setEncoding = function(encoding) {};


/**
 * @return {!stream.ReadableStream}
 */
stream.ReadableStream.prototype.resume = function() {};

/**
 * @return {!stream.ReadableStream}
 */
stream.ReadableStream.prototype.pause = function() {};


/**
 * @return {boolean}
 */
stream.ReadableStream.prototype.isPaused = function() {};


/**
 * @param {!stream.Writable} destination
 * @param {stream._PipeOptions=} opt_options
 */
stream.ReadableStream.prototype.pipe = function(destination, opt_options) {};


/**
 * @param {!stream.Writable=} opt_destination
 */
stream.ReadableStream.prototype.unpipe = function(opt_destination) {};


/**
 * @param {(!Buffer|string)} chunk
 */
stream.ReadableStream.prototype.unshift = function(chunk) {};


/**
 * @param {*} stream
 */
stream.ReadableStream.prototype.wrap = function(stream) {};



/**
 * @event drain
 * @event finish
 * @event pipe
 * @event unpipe
 * @event error
 *
 * @interface
 * @extends {events.EventEmitter}
 */
stream.WritableStream = function() {};


/**
 * @param {(!Buffer|string)} chunk
 * @param {string} opt_encoding
 * @param {Function} opt_callback
 */
stream.WritableStream.prototype.write =
    function(chunk, opt_encoding, opt_callback) {};


/**
 *
 */
stream.WritableStream.prototype.cork = function() {};


/**
 *
 */
stream.WritableStream.prototype.uncork = function() {};


/**
 * @param {string} encoding
 * @return {boolean}
 */
stream.WritableStream.prototype.setDefaultEncoding = function(encoding) {};


/**
 * @param {(!Buffer|string)=} opt_chunk
 * @param {string} opt_encoding
 * @param {Function} opt_callback
 */
stream.WritableStream.prototype.end =
    function(opt_chunk, opt_encoding, opt_callback) {};


/**
 * @interface
 * @extends {stream.ReadableStream}
 * @extends {stream.WritableStream}
 */
stream.Duplex = function() {};


/**
 * @interface
 * @extends {stream.ReadableStream}
 * @extends {stream.WritableStream}
 */
stream.Transform = function() {};
