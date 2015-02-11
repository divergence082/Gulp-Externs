

/**
 * @namespace
 */
var util = {};


/**
 * typedef {{showHidden: boolean=, depth: number=, colors: boolean=,
 *  customInspect: boolean=}}
 */
util._InpsectOptions;


/**
 * @param {string} section
 * @return {Function}
 */
util.debuglog = function(section) {};


/**
 * @param {...} var_args
 * @return {string}
 */
util.format = function(format, var_args) {};


/**
 * @param {string} string
 */
util.log = function(string) {};


/**
 * @param {!Object} object
 * @param {util._InpsectOptions=} opt_options
 */
util.inspect = function(object, opt_options) {};


/**
 * @type {!Object}
 */
util.inspect.styles;


/**
 * @type {!Object}
 */
util.inspect.colors;


/**
 * @param {*} object
 * @return {boolean}
 */
util.isArray = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isRegExp = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isDate = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isError = function(object) {};


/**
 * @param {function(new:Object, ...)} constructor
 * @param {function(new:Object, ...)} superConstructor
 */
util.inherits = function(constructor, superConstructor) {};


/**
 * @param {Function} func
 * @param {string} string
 * @return {Function}
 */
util.deprecate = function(func, string) {};


/**
 * @param {string} string
 */
util.debug = function(string) {};


/**
 * @param {...} var_args
 */
util.error = function(var_args) {};


/**
 * @param {...} var_args
 */
util.puts = function(var_args) {};


/**
 * @param {...} var_args
 */
util.print = function(var_args) {};


/**
 * @param readableStream
 * @param writableStream
 * @param opt_callback
 */
util.pump = function(readableStream, writableStream, opt_callback) {};
