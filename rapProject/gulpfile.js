var gulp = require('gulp');
var livereload = require('gulp-livereload');
var deploy = require('gulp-gh-pages');

gulp.task('default', ['watch'])

gulp.task('javascript', function(){
	gulp
		.src('*.js')
		.pipe(gulp.dest('./test'))
})


gulp.task('deploy', function () {
  return gulp.src("**")
    .pipe(deploy())
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['*.js'], ['javascript']);
});