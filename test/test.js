

var fs = require('fs');
var assert = require('assert');

var gutil = require('gulp-util');
var gx = require('../bin/index.js');


describe('gulp-externs-extractor', function() {
  describe('in buffer mode', function() {

    it('should generate externs', function(done) {
      var input = './test/resources/code-example.js';
      var output = './test/resources/externs-example.js';

      fs.readFile(input, function(error, data) {
        assert.ifError(error);

        var source = new gutil.File({
          path: input,
          contents: data
        });

        var extractorStream = gx.extract();
        extractorStream.write(source);

        extractorStream.on('data', function(file) {
          assert(file.isBuffer());

          fs.readFile(output, function(error, data) {
            assert.ifError(error);

            assert.deepEqual(file.contents, data);
            done();
          });
        })
      });
    });

  });
});