

/**
 * @namespace
 */
var fs = {};


/**
 * @typedef {number}
 */
fs.F_OK;


/**
 * @typedef {number}
 */
fs.R_OK;


/**
 * @typedef {number}
 */
fs.W_OK;


/**
 * @typedef {number}
 */
fs.X_OK;


/**
 * @param {string} oldPath
 * @param {string} newPath
 * @param {!function(?Error)} callback
 */
fs.rename = function(oldPath, newPath, callback) {};


/**
 * @param {string} oldPath
 * @param {string} newPath
 */
fs.renameSync = function(oldPath, newPath) {};


/**
 * @param {number} fd
 * @param {number} len
 * @param {!function(?Error)} callback
 */
fs.ftruncate = function(fd, len, callback) {};


/**
 * @param {number} fd
 * @param {number} len
 */
fs.ftruncateSync = function(fd, len) {};


/**
 * @param {string} path
 * @param {number} len
 * @param {!function(?Error)} callback
 */
fs.truncate = function(path, len, callback) {};


/**
 * @param {string} path
 * @param {number} len
 */
fs.truncateSync = function(path, len) {};


/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 * @param {!function(?Error)} callback
 */
fs.chown = function(path, uid, gid, callback) {};


/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 */
fs.chownSync = function(path, uid, gid) {};


/**
 * @param {number} fd
 * @param {number} uid
 * @param {number} gid
 * @param {!function(?Error)} callback
 */
fs.fchown = function(fd, uid, gid, callback) {};


/**
 * @param {number} fd
 * @param {number} uid
 * @param {number} gid
 */
fs.fchownSync = function(fd, uid, gid) {};


/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 * @param {!function(?Error)} callback
 */
fs.lchown = function(path, uid, gid, callback) {};


/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 */
fs.lchownSync = function(path, uid, gid) {};


/**
 * @param {string} path
 * @param {number} mode
 * @param {!function(?Error)} callback
 */
fs.chmod = function(path, mode, callback) {};


/**
 * @param {string} path
 * @param {number} mode
 */
fs.chmodSync = function(path, mode) {};


/**
 * @param {number} fd
 * @param {number} mode
 * @param {!function(?Error)} callback
 */
fs.fchmod = function(fd, mode, callback) {};


/**
 * @param {number} fd
 * @param {number} mode
 */
fs.fchmodSync = function(fd, mode) {};


/**
 * @param {string} path
 * @param {number} mode
 * @param {!function(?Error)} callback
 */
fs.lchmod = function(path, mode, callback) {};


/**
 * @param {string} path
 * @param {number} mode
 */
fs.lchmodSync = function(path, mode) {};


/**
 * @param {string} path
 * @param {!function(?Error, ?fs.Stats)} callback
 */
fs.stat = function(path, callback) {};


/**
 * @param {string} path
 * @param {!function(?Error, ?fs.Stats)} callback
 */
fs.lstat = function(path, callback) {};


/**
 * @param {number} fd
 * @param {!function(?Error, ?fs.Stats)} callback
 */
fs.fstat = function(fd, callback) {};


/**
 * @param {string} path
 */
fs.statSync = function(path) {};


/**
 * @param {string} path
 */
fs.lstatSync = function(path) {};


/**
 * @param {number} fd
 */
fs.fstatSync = function(fd) {};


/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {!function(?Error)} callback
 */
fs.link = function(srcpath, dstpath, callback) {};


/**
 * @param {string} srcpath
 * @param {string} dstpath
 */
fs.linkSync = function(srcpath, dstpath) {};


/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string} type
 * @param {!function(?Error)} callback
 */
fs.symlink = function(srcpath, dstpath, type, callback) {};


/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string=} opt_type
 */
fs.symlinkSync = function(srcpath, dstpath, opt_type) {};


/**
 * @param {string} path
 * @param {!function(?Error)} callback
 */
fs.readlink = function(path, callback) {};


/**
 * @param {string} path
 */
fs.readlinkSync = function(path) {};


/**
 * @param {string} path
 * @param {!Object} cache
 * @param {!function(?Error, string)} callback
 */
fs.realpath = function(path, cache, callback) {};


/**
 * @param {string} path
 * @param {!Object=} opt_cache
 */
fs.realpathSync = function(path, opt_cache) {};


/**
 * @param {string} path
 * @param {!function(?Error)} callback
 */
fs.unlink = function(path, callback) {};


/**
 * @param {string} path
 */
fs.unlinkSync = function(path) {};


/**
 * @param {string} path
 * @param {!function(?Error)} callback
 */
fs.rmdir = function(path, callback) {};


/**
 * @param {string} path
 */
fs.rmdirSync = function(path) {};


/**
 * @param {string} path
 * @param {number} mode
 * @param {!function(?Error)} callback
 */
fs.mkdir = function(path, mode, callback) {};


/**
 * @param {string} path
 * @param {number=} opt_mode
 */
fs.mkdirSync = function(path, opt_mode) {};


/**
 * @param {string} path
 * @param {!function(?Error, !Array.<string>)} callback
 */
fs.readdir = function(path, callback) {};


/**
 * @param {string} path
 */
fs.readdirSync = function(path) {};


/**
 * @param {number} fd
 * @param {!function(?Error)} callback
 */
fs.close = function(fd, callback) {};


/**
 * @param {number} fd
 */
fs.closeSync = function(fd) {};


/**
 * @param {string} path
 * @param {string} flags
 * @param {number} mode
 * @param {!function(?Error, number)} callback
 */
fs.open = function(path, flags, mode, callback) {};


/**
 * @param {string} path
 * @param {string} flags
 * @param {number=} opt_mode
 */
fs.openSync = function(path, flags, opt_mode) {};


/**
 * @param {string} path
 * @param {!Date} atime
 * @param {!Date} mtime
 * @param {!function(?Error)} callback
 */
fs.utimes = function(path, atime, mtime, callback) {};


/**
 * @param {string} path
 * @param {!Date} atime
 * @param {!Date} mtime
 */
fs.utimesSync = function(path, atime, mtime) {};


/**
 * @param {number} fd
 * @param {!Date} atime
 * @param {!Date} mtime
 * @param {!function(?Error)} callback
 */
fs.futimes = function(fd, atime, mtime, callback) {};


/**
 * @param {number} fd
 * @param {!Date} atime
 * @param {!Date} mtime
 */
fs.futimesSync = function(fd, atime, mtime) {};


/**
 * @param {number} fd
 * @param {!function(?Error)} callback
 */
fs.fsync = function(fd, callback) {};


/**
 * @param {number} fd
 */
fs.fsyncSync = function(fd) {};


/**
 * @param {number} fd
 * @param {!Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {!function(?Error, number, !Buffer)} callback
 */
fs.write = function(fd, buffer, offset, length, position, callback) {};


/**
 * @param {number} fd
 * @param {!Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number=} opt_position
 */
fs.writeSync = function(fd, buffer, offset, length, opt_position) {};


/**
 * @param {number} fd
 * @param {!Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {!function(?Error, number, !Buffer)} callback
 */
fs.read = function(fd, buffer, offset, length, position, callback) {};


/**
 * @param {number} fd
 * @param {!Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 */
fs.readSync = function(fd, buffer, offset, length, position) {};


/**
 * @param {string} filename
 * @param {!Object} options
 * @param {!function(?Error, ?(string|Buffer))} callback
 */
fs.readFile = function(filename, options, callback) {};


/**
 * @param {string} filename
 * @param {!Object=} opt_options
 */
fs.readFileSync = function(filename, opt_options) {};


/**
 * @param {string} filename
 * @param {(string|!Buffer)} data
 * @param {!Object} options
 * @param {!function(?Error, ?(string|!Buffer))} callback
 */
fs.writeFile = function(filename, data, options, callback) {};


/**
 * @param {string} filename
 * @param {(string|!Buffer)} data
 * @param {!Object=} opt_options
 */
fs.writeFileSync = function(filename, data, opt_options) {};


/**
 * @param {string} filename
 * @param {(string|!Buffer)} data
 * @param {!Object} options
 * @param {!function(?Error)} callback
 */
fs.appendFile = function(filename, data, options, callback) {};


/**
 * @param {string} filename
 * @param {(string|!Buffer)} data
 * @param {!Object=} opt_options
 */
fs.appendFileSync = function(filename, data, opt_options) {};


/**
 * @param {string} filename
 * @param {!Object} options
 * @param {!function(!fs.Stats, !fs.Stats)} listener
 */
fs.watchFile = function(filename, options, listener) {};


/**
 * @param {string} filename
 * @param {Function=} opt_listener
 */
fs.unwatchFile = function(filename, opt_listener) {};


/**
 * @param {string} filename
 * @param {!Object=} opt_options
 * @param {!function(string, string)=} opt_listener
 */
fs.watch = function(filename, opt_options, opt_listener) {};


/**
 * @param {string} path
 * @param {function(boolean)} callback
 */
fs.exists = function(path, callback) {};


/**
 * @param {string} path
 */
fs.existsSync = function(path) {};


/**
 * @param {string} path
 * @param {number} mode
 * @param {!function(?Error)} callback
 */
fs.access = function(path, mode, callback) {};


/**
 * @param {string} path
 * @param {number=} opt_mode
 */
fs.accessSync = function(path, opt_mode) {};


/**
 * @param {string} path
 * @param {!Object=} opt_options
 * @return {!fs.ReadStream}
 */
fs.createReadStream = function(path, opt_options) {};


/**
 * @param {string} path
 * @param {!Object=} opt_options
 * @return {!fs.WriteStream}
 */
fs.createWriteStream = function(path, opt_options) {};


/**
 *
 * @constructor
 */
fs.Stats = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isFile = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isDirectory = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isBlockDevice = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isCharacterDevice = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isSymbolicLink = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isFIFO = function() {};


/**
 * @return {boolean}
 */
fs.Stats.prototype.isSocket = function() {};


/**
 * @event open
 * @constructor
 * @extends {stream.ReadableStream}
 */
fs.ReadStream = function() {};


/**
 * @event open
 * @constructor
 * @extends {stream.WritableStream}
 */
fs.WriteStream = function() {};


/**
 * @type {number}
 */
fs.WriteStream.prototype.bytesWritten;


/**
 * @event change
 * @event error
 * @constructor
 */
fs.FSWatcher = function() {};


/**
 *
 */
fs.FSWatcher.prototype.close = function() {};
