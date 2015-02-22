

/**
 * @event fork
 * @event online
 * @event listening
 * @event disconnect
 * @event exit
 * @event setup
 * @namespace
 */
var cluster = {};


/**
 * @typedef {string}
 */
cluster.SCHED_RR;


/**
 * @typedef {string}
 */
cluster.SCHED_NONE;


/**
 * @type {string}
 */
cluster.schedulingPolicy;


/**
 * @type {!Object}
 */
cluster.settings;


/**
 * @type {boolean}
 */
cluster.isMaster;


/**
 * @type {boolean}
 */
cluster.isWorker;


/**
 * @type {!Worker}
 */
cluster.worker;



/**
 * @type {!Array.<!Worker>}
 */
cluster.workers;


/**
 * @param {!Object} opt_settings
 */
cluster.setupMaster = function(opt_settings) {};

/**
 * @param {!Object} opt_env
 * @return {!Worker}
 */
cluster.fork = function(opt_env) {};


/**
 * @param {Function=} opt_callback
 */
cluster.disconnect = function(opt_callback) {};


/**
 * @event message
 * @event online
 * @event listening
 * @event disconnect
 * @event exit
 * @event error
 * @constructor
 */
var Worker = function() {};


/**
 * @type {string}
 */
Worker.prototype.id;


/**
 * @type {!ChildProcess}
 */
Worker.prototype.process;


/**
 * @type {boolean}
 */
Worker.prototype.suicide;


/**
 * @param {!Object} message
 * @param {Function} opt_sendHandle
 */
Worker.prototype.send = function(message, opt_sendHandle) {};


/**
 * @param {string=} opt_signal
 */
Worker.prototype.kill = function(opt_signal) {};

/**
 *
 */
Worker.prototype.disconnect = function() {};


/**
 * @return {boolean}
 */
Worker.prototype.isDead = function() {};


/**
 * @return {boolean}
 */
Worker.prototype.isConnected = function() {};
