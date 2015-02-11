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
test.PUBLIC_CONST;


/**
 * @type {number}
 */
test._PROTECTED_CONST;


/**
 * @param {!test.Something} param
 * @return {Function}
 */
test.highOrderFunction = function(param) {};


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
  this.public;


  /**
   * @type {number}
   */
  this._protected;

};


/**
 * @inheritDoc
 */
test.Class.prototype.publicMethod = function() {};


/**
 * @return {number}
 */
test.Class.prototype._protectedMethod = function() {};


/**
 * @constructor
 * @extends {test.Class}
 */
test.InheritClass = function() {

  /**
   * @return {!function(): function}
   */
  this._func = function() {};

};


/**
 * @inheritDoc
 */
test.InheritClass.prototype.publicMethod = function() {};


/**
 * @enum {number}
 */
test.Enum = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};




