

//http://nodejs.org/docs/v0.12.0/api/events.html


/**
 * @namespace
 */
var events = {};


/**
 * @interface
 */
events.IEventEmitter = function() {};


/**
 * @type {number}
 */
events.IEventEmitter.defaultMaxListeners;


/**
 * @param {!events.IEventEmitter} emitter
 * @param {string} event
 * @return {number}
 */
events.IEventEmitter.listenerCount = function(emitter, event) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.addListener = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.on = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.once = function(event, listener) {};


/**
 * @param {string} event
 * @param {Function} listener
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.removeListener = function(event, listener) {};


/**
 * @param {string=} opt_event
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.removeAllListeners = function(opt_event) {};


/**
 * @param {number} n
 * @return {!events.IEventEmitter}
 */
events.IEventEmitter.prototype.setMaxListeners = function(n) {};


/**
 * @param {string} event
 * @return {!Array.<Function>}
 */
events.IEventEmitter.prototype.listeners = function(event) {};


/**
 * @param {...} var_args
 * @return {boolean}
 */
events.IEventEmitter.prototype.emit = function(var_args) {};



/**
 * @event newListener
 * @event removeListener
 *
 * @constructor
 * @implements {events.IEventEmitter}
 */
events.EventEmitter = function() {};


/**
 * @inheritDoc
 */
events.EventEmitter.defaultMaxListeners;


/**
 * @inheritDoc
 */
events.EventEmitter.listenerCount = function(emitter, event) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.addListener = function(event, listener) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.on = function(event, listener) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.once = function(event, listener) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.removeListener = function(event, listener) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.removeAllListeners = function(opt_event) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.setMaxListeners = function(n) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.listeners = function(event) {};


/**
 * @inheritDoc
 */
events.EventEmitter.prototype.emit = function(var_args) {};
