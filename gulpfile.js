// including plugins
var gulp = require('gulp');
var uglify = require("gulp-uglify");
 
// task
gulp.task('minify-js', function () {
    gulp.src('./js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('minjs'));
});
