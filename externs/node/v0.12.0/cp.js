

/**
 * @namespace
 */
var child_process = {};


/**
 * @param {string} command
 * @param {!Array.<string>=} opt_args
 * @param {!Object=} opt_options
 * @return {!ChildProcess}
 */
child_process.spawn = function(command, opt_args, opt_options) {};


/**
 * @param {string} command
 * @param {!Object} options
 * @param {!function(
 *  ?Error, !stream.WritableStream, !stream.WritableStream)} callback
 * @return {!ChildProcess}
 */
child_process.exec = function(command, options, callback) {};


/**
 * @param {string} file
 * @param {!Array.<string>=} opt_args
 * @param {!Object=} opt_options
 * @param {!function(
 *  ?Error, !stream.WritableStream, !stream.WritableStream)=} opt_callback
 * @return {!ChildProcess}
 */
child_process.execFile = function(file, opt_args, opt_options, opt_callback) {};


/**
 * @param {string} modulePath
 * @param {!Array.<string>=} opt_args
 * @param {!Object=} opt_options
 * @return {!ChildProcess}
 */
child_process.fork = function(modulePath, opt_args, opt_options) {};


/**
 * @param {string} command
 * @param {!Array.<string>=} opt_args
 * @param {!Object=} opt_options
 * @return {{pid: number, output: !Array.<*>,
 *  stdout: (string|!Buffer), stderr: (string|!Buffer), status: number,
 *  signal: string, error: ?Error}}
 */
child_process.spawnSync = function(command, opt_args, opt_options) {};


/**
 * @param {string} command
 * @param {!Array.<string>=} opt_args
 * @param {!Object=} opt_options
 * @return {(string|!Buffer)}
 */
child_process.execFileSync = function(command, opt_args, opt_options) {};


/**
 * @param {string} command
 * @param {!Object=} opt_options
 * @return {(string|!Buffer)}
 */
child_process.execSync = function(command, opt_options) {};


/**
 * @event error
 * @event exit
 * @event close
 * @event disconnect
 * @event message
 * @constructor
 * @extends {events.EventEmitter}
 */
var ChildProcess = function() {};


/**
 * @type {!stream.WritableStream}
 */
ChildProcess.prototype.stdin;


/**
 * @type {!stream.ReadableStream}
 */
ChildProcess.prototype.stdout;


/**
 * @type {!stream.ReadableStream}
 */
ChildProcess.prototype.stderr;


/**
 * @type {!Array.<*>}
 */
ChildProcess.prototype.stdio;


/**
 * @type {number}
 */
ChildProcess.prototype.pid;


/**
 * @type {boolean}
 */
ChildProcess.prototype.connected;


/**
 * @param {string=} opt_signal
 */
ChildProcess.prototype.kill = function(opt_signal) {};


/**
 *
 * @param {!Object} message
 * @param {Function=} opt_sendHandle
 */
ChildProcess.prototype.send = function(message, opt_sendHandle) {};


/**
 *
 */
ChildProcess.prototype.disconnect = function() {};
