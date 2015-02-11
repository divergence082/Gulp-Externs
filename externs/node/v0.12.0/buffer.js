

/**
 * @namespace
 */
var buffer = {};


/**
 * @type {number}
 */
buffer.INSPECT_MAX_BYTES;


/**
 * @param {(number|string|!Array.<number>|!Buffer)} sizeOrData
 * @param {string=} opt_encoding
 * @constructor
 */
var Buffer = function(sizeOrData, opt_encoding) {};


/**
 * @type {number}
 */
Buffer.length;


/**
 * @param {string} encoding
 * @return {boolean}
 */
Buffer.isEncoding = function(encoding) {};


/**
 * @param {*} obj
 * @return {boolean}
 */
Buffer.isBuffer = function(obj) {};


/**
 * @param {string} string
 * @param {string=} opt_encoding
 * @return {number}
 */
Buffer.byteLength = function(string, opt_encoding) {};


/**
 * @param {(!Array.<!Buffer>|!Buffer)} list
 * @param {number=} opt_totalLength
 * @return {!Buffer}
 */
Buffer.concat = function(list, opt_totalLength) {};


/**
 * @param {!Buffer} buf1
 * @param {!Buffer} buf2
 * @return {number}
 */
Buffer.compare = function(buf1, buf2) {};


/**
 * @param {string} string
 * @param {number=} opt_offset
 * @param {number=} opt_length
 * @param {string=} opt_encoding
 * @return {number}
 */
Buffer.prototype.write =
    function(string, opt_offset, opt_length, opt_encoding) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntLE =
    function(value, offset, byteLength, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntBE =
    function(value, offset, byteLength, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.writeIntLE =
    function(value, offset, byteLength, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.writeIntBE =
    function(value, offset, byteLength, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUIntLE = function(offset, byteLength, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUIntBE = function(offset, byteLength, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readIntLE = function(offset, byteLength, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readIntBE = function(offset, byteLength, opt_noAssert) {};


/**
 * @param {string=} opt_encoding
 * @param {number=} opt_start
 * @param {number=} opt_end
 * @return {string}
 */
Buffer.prototype.toString = function(opt_encoding, opt_start, opt_end) {};


/**
 * @return {!Object}
 */
Buffer.prototype.toJSON = function() {};


/**
 * @param {!Buffer} otherBuffer
 * @return {boolean}
 */
Buffer.prototype.equals = function(otherBuffer) {};


/**
 * @param {!Buffer} otherBuffer
 * @return {number}
 */
Buffer.prototype.compare = function(otherBuffer) {};


/**
 * @param {!Buffer} targetBuffer
 * @param {number=} opt_targetStart
 * @param {number=} opt_sourceStart
 * @param {number=} opt_sourceEnd
 */
Buffer.prototype.copy =
    function(targetBuffer, opt_targetStart, opt_sourceStart, opt_sourceEnd) {};


/**
 * @param {number=} opt_start
 * @param {number=} opt_end
 * @return {!Buffer}
 */
Buffer.prototype.slice = function(opt_start, opt_end) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUInt8 = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16LE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16BE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32LE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32BE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readInt8 = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readInt16LE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readInt16BE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readInt32LE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readInt32BE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readFloatLE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readFloatBE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleLE = function(offset, opt_noAssert) {};


/**
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleBE = function(offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeUInt8 = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeUInt16LE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeUInt16BE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeUInt32LE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeUInt32BE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeInt8 = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeInt16LE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeInt16BE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeInt32LE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeInt32BE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeFloatLE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeFloatBE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeDoubleLE = function(value, offset, opt_noAssert) {};


/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} opt_noAssert
 */
Buffer.prototype.writeDoubleBE = function(value, offset, opt_noAssert) {};


/**
 * @param {*} value
 * @param {number=} opt_offset
 * @param {number=} opt_end
 */
Buffer.prototype.fill = function(value, opt_offset, opt_end) {};



/**
 * @interface
 * @extends {Buffer}
 */
var SlowBuffer = function() {};
