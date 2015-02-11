

var through = require('through2');
var gutil = require('gulp-util');
var x = require('externs-extractor-wrapper');


/**
 * @namespace
 */
var gx = {};


/**
 * @type {string}
 */
gx.PLUGIN_NAME = 'gulp-externs-extractor';


/**
 * @return {Function}
 */
gx.extract = function () {

  /**
   * @param {!gutil.File} file
   * @param {string} encoding
   * @param {Function} callback
   */
  function extract(file, encoding, callback) {
    var input = file.path;

    /**
     * @param {string} message
     */
    function cancel(message) {
      callback(new gutil.PluginError(gx.PLUGIN_NAME,  message), file);
    }

    /**
     * @param {!gutil.File} file
     */
    function complete(file) {
      callback(null, file);
    }

    /**
     * @param {!gutil.File} file
     * @param {!Buffer} contents
     * @return {!gutil.File}
     */
    function transform(file, contents) {
      var result = file.clone({
        contents: false
      });

      result.contents = contents;
      return result;
    }

    if (file.isNull()) {
      complete(file);
    } else if (file.isStream()) {
      cancel('Streaming not supported');
    } else {
      x.exec(input, function(data) {
        complete(transform(file, new Buffer(data)));
      }, cancel)
    }
  }

  return through.obj(extract);
};


module.exports = gx;
