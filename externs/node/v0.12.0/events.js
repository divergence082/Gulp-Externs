

//http://nodejs.org/docs/v0.12.0/api/events.html


/**
 * @namespace
 */
var events = {};

/**
 * @event newListener
 * @event removeListener
 *
 * @interface
 */
events.EventEmitter = function() {};

/**
 * @type {number}
 */
events.EventEmitter.defaultMaxListeners;


/**
 * @param {!events.EventEmitter} emitter
 * @param {string} event
 * @return {number}
 */
events.EventEmitter.listenerCount = function(emitter, event) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.addListener = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.on = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.once = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.removeListener = function(event, listener) {};


/**
 * @param {string=} opt_event
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.removeAllListeners = function(opt_event) {};


/**
 * @param {number} n
 * @return {!events.EventEmitter}
 */
events.EventEmitter.prototype.setMaxListeners = function(n) {};


/**
 * @param {string} event
 * @return {!Array.<Function>}
 */
events.EventEmitter.prototype.listeners = function(event) {};


/**
 * @param {...} var_args
 * @param {boolean}
 */
events.EventEmitter.prototype.emit = function(var_args) {};
