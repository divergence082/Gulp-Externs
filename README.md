# Gulp-Externs

Externs-Extractor for gulp

Parses interfaces and generates externs file for Closure Compiler.

### gulpfile.js

```javascript
var gulp = require('gulp');
var externs = require('gulp-externs');


gulp.task('externs', function() {
  return gulp.src('./bin/index.js')
      .pipe(externs.extract())
      .pipe(gulp.dest('./externs'))
});
```

In this example Externs-Extractor will generate externs file `./externs/index.js` from `./bin/index.js`
