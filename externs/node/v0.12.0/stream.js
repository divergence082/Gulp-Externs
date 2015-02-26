

//http://nodejs.org/docs/v0.12.0/api/stream.html


/**
 * @namespace
 */
var stream = {};


/**
 * @interface
 * @extends {events.IEventEmitter}
 */
stream.IReadableStream = function() {};


/**
 * @param {number=} opt_size
 * @return {?(string|Buffer)}
 */
stream.IReadableStream.prototype.read = function(opt_size) {};


/**
 * @param {string} encoding
 * @return {!stream.IReadableStream}
 */
stream.IReadableStream.prototype.setEncoding = function(encoding) {};


/**
 * @return {!stream.IReadableStream}
 */
stream.IReadableStream.prototype.resume = function() {};


/**
 * @return {!stream.IReadableStream}
 */
stream.IReadableStream.prototype.pause = function() {};


/**
 * @return {boolean}
 */
stream.IReadableStream.prototype.isPaused = function() {};


/**
 * @param {!stream.WritableStream} destination
 * @param {!Object=} opt_options
 */
stream.IReadableStream.prototype.pipe = function(destination, opt_options) {};


/**
 * @param {!stream.WritableStream=} opt_destination
 */
stream.IReadableStream.prototype.unpipe = function(opt_destination) {};


/**
 * @param {(!Buffer|string)} chunk
 */
stream.IReadableStream.prototype.unshift = function(chunk) {};


/**
 * @param {*} stream
 */
stream.IReadableStream.prototype.wrap = function(stream) {};


/**
 * @event data
 * @event error
 * @event end
 * @event close
 * @event readable
 *
 * @constructor
 * @extends {events.EventEmitter}
 * @implements {stream.IReadableStream}
 */
stream.ReadableStream = function() {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.read = function(opt_size) {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.setEncoding = function(encoding) {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.resume = function() {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.pause = function() {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.isPaused = function() {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.pipe = function(destination, opt_options) {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.unpipe = function(opt_destination) {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.unshift = function(chunk) {};


/**
 * @inheritDoc
 */
stream.ReadableStream.prototype.wrap = function(stream) {};


/**
 * @interface
 * @extends {events.IEventEmitter}
 */
stream.IWritableStream = function() {};


/**
 * @param {(!Buffer|string)} chunk
 * @param {string} opt_encoding
 * @param {Function} opt_callback
 */
stream.IWritableStream.prototype.write =
    function(chunk, opt_encoding, opt_callback) {};


/**
 *
 */
stream.IWritableStream.prototype.cork = function() {};


/**
 *
 */
stream.IWritableStream.prototype.uncork = function() {};


/**
 * @param {string} encoding
 * @return {boolean}
 */
stream.IWritableStream.prototype.setDefaultEncoding = function(encoding) {};


/**
 * @param {(!Buffer|string)=} opt_chunk
 * @param {string=} opt_encoding
 * @param {Function=} opt_callback
 */
stream.IWritableStream.prototype.end =
    function(opt_chunk, opt_encoding, opt_callback) {};


/**
 * @event drain
 * @event finish
 * @event pipe
 * @event unpipe
 * @event error
 *
 * @constructor
 * @extends {events.EventEmitter}
 * @implements {stream.IWritableStream}
 */
stream.WritableStream = function() {};


/**
 * @inheritDoc
 */
stream.WritableStream.prototype.write =
    function(chunk, opt_encoding, opt_callback) {};


/**
 * @inheritDoc
 */
stream.WritableStream.prototype.cork = function() {};


/**
 * @inheritDoc
 */
stream.WritableStream.prototype.uncork = function() {};


/**
 * @inheritDoc
 */
stream.WritableStream.prototype.setDefaultEncoding = function(encoding) {};


/**
 * @inheritDoc
 */
stream.WritableStream.prototype.end =
    function(opt_chunk, opt_encoding, opt_callback) {};


/**
 * @constructor
 * @extends {events.EventEmitter}
 * @implements {stream.IReadableStream}
 * @implements {stream.IWritableStream}
 */
stream.Duplex = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.read = function(opt_size) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.setEncoding = function(encoding) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.resume = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.pause = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.isPaused = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.pipe = function(destination, opt_options) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.unpipe = function(opt_destination) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.unshift = function(chunk) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.wrap = function(stream) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.write =
    function(chunk, opt_encoding, opt_callback) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.cork = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.uncork = function() {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.setDefaultEncoding = function(encoding) {};


/**
 * @inheritDoc
 */
stream.Duplex.prototype.end =
    function(opt_chunk, opt_encoding, opt_callback) {};


/**
 * @constructor
 * @extends {stream.Duplex}
 */
stream.Transform = function() {};
