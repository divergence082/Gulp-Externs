

/**
 * @namespace
 */
var console = {};


/**
 * @typedef {{showHidden: boolean=, depth: number=, colors: boolean=}}
 */
console._DirOptions;


/**
 * @param {...} var_args
 */
console.log = function(var_args) {};


/**
 * @param {...} var_args
 */
console.info = function(var_args) {};


/**
 * @param {...} var_args
 */
console.error = function(var_args) {};


/**
 * @param {...} var_args
 */
console.warn = function(var_args) {};


/**
 * @param {!Object} obj
 * @param {console._DirOptions=} opt_options
 */
console.dir = function(obj, opt_options) {};


/**
 * @param {string} label
 */
console.time = function(label) {};


/**
 * @param {string} label
 */
console.timeEnd = function(label) {};


/**
 * @param {...} var_args
 */
console.trace = function(var_args) {};


/**
 * @param {...} var_args
 */
console.assert = function(var_args) {};
