var gulp = require('gulp');
var livereload = require('gulp-livereload');
var deploy = require('gulp-gh-pages');

gulp.task('default', function(){
	gulp
		.src('*.js')
		.pipe(gulp.dest('./test'))
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['*.js', '*.scss']);
});

gulp.task('deploy', function () {
  return gulp.src("**")
    .pipe(deploy())
});

