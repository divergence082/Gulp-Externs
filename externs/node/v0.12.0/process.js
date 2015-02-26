

/**
 * @event exit
 * @event beforeExit
 * @event uncaughtException
 * @event SIGUSR1
 * @event SIGTERM
 * @event SIGPIPE
 * @event SIGHUP
 * @event SIGTERM
 * @event SIGINT
 * @event SIGBREAK
 * @event SIGWINCH
 * @event SIGKILL
 * @event SIGSTOP
 * @constructor
 * @extends {events.EventEmitter}
 */
var process = function() {};


/**
 * @type {!stream.WritableStream}
 */
process.stdout;


/**
 * @type {!stream.WritableStream}
 */
process.stderr;


/**
 * @type {!stream.ReadableStream}
 */
process.stdin;


/**
 * @type {!Array.<string>}
 */
process.argv;


/**
 * @type {string}
 */
process.execPath;


/**
 * @type {string}
 */
process.execArgv;


/**
 * @type {!Object}
 */
process.env;


/**
 * @type {number}
 */
process.exitCode;


/**
 * @type {string}
 */
process.version;


/**
 * @type {!Object}
 */
process.versions;


/**
 * @type {!Object}
 */
process.config;


/**
 * @type {number}
 */
process.pid;


/**
 * @type {string}
 */
process.title;


/**
 * @type {string}
 */
process.arch;


/**
 * @type {string}
 */
process.platform;


/**
 * @type {!Object}
 */
process.mainModule;


/**
 *
 */
process.abort = function() {};


/**
 * @param {string} directory
 */
process.chdir = function(directory) {};


/**
 * @return {string}
 */
process.cwd = function() {};


/**
 * @param {number=} opt_code
 */
process.exit = function(opt_code) {};


/**
 * @return {number}
 */
process.getgid = function() {};


/**
 * @param {number} id
 */
process.setgid = function(id) {};


/**
 * @return {number}
 */
process.getuid = function() {};


/**
 * @param {number} id
 */
process.setuid = function(id) {};


/**
 * @return {!Array.<number>}
 */
process.getgroups = function() {};


/**
 * @param {!Array.<number>} groups
 */
process.setgroups = function(groups) {};


/**
 * @param {string} user
 * @param {number} extra_group
 */
process.initgroups = function(user, extra_group) {};


/**
 * @param {string} pid
 * @param {string=} opt_signal
 */
process.kill = function(pid, opt_signal) {};


/**
 * @return {{rss: number, heapTotal: number, heapUsed: number}}
 */
process.memoryUsage = function() {};


/**
 * @param {Function} callback
 */
process.nextTick = function(callback) {};


/**
 * @param {number=} opt_mask
 * @return {number}
 */
process.umask = function(opt_mask) {};


/**
 * @return {number}
 */
process.uptime = function() {};


/**
 * @return {!Array.<number>}
 */
process.hrtime = function() {};
