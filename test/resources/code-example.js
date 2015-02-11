

var util = require('util');


/**
 * @namespace
 */
var test = {};


/**
 * @typedef {*}
 */
test.Something;

/**
 * @type {number}
 */
test.PUBLIC_CONST = 0;


/**
 * @type {number}
 */
test._PROTECTED_CONST = 0;


/**
 * @type {number}
 */
test.__PRIVATE_CONST = 0;


/**
 * @return {number}
 */
test.testFunction = function() {
  return 0;
};


/**
 * @param {!test.Something} param
 * @return {Function}
 */
test.highOrderFunction = function(param) {
  return test.testFunction;
};


/**
 * @interface
 */
test.IClass = function() {};


/**
 * @return {string}
 */
test.IClass.prototype.publicMethod = function() {};


/**
 * @param {string} a
 * @param {number} b
 * @param {boolean} c
 *
 * @constructor
 * @implements {test.IClass}
 */
test.Class = function(a, b, c) {

  /**
   * @type {string}
   */
  this.public = a;

  /**
   * @type {number}
   */
  this._protected = b;

  /**
   * @type {boolean}
   */
  this.__private = c;

};


/**
 * @inheritDoc
 */
test.Class.prototype.publicMethod = function() {
  return this.public;
};


/**
 * @return {number}
 */
test.Class.prototype._protectedMethod = function() {
  return this._protected;
};


/**
 * @return {boolean}
 */
test.Class.prototype.__privateMethod = function() {
  return this.__private;
};


/**
 * @constructor
 * @extends {test.Class}
 */
test.InheritClass = function() {
  test.Class.call(this, '1', 1, true);

  var context = this;

  /**
   * @return {!function(): function}
   */
  this._func = function() {
    return context._protectedMethod;
  };

};

util.inherits(test.InheritClass, test.Class);


/**
 * @inheritDoc
 */
test.InheritClass.prototype.publicMethod = function() {
  return this.public + '1';
};


/**
 * @enum {number}
 */
test.Enum = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};


test.functionWithoutJSDoc = function() {
  return 1
};


modle.exports = test;
