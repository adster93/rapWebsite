var gulp = require('gulp');


gulp.task('default', function(){
	gulp
		.src('*.js')
		.pipe(gulp.dest('./test'))
})

gulp.task('watch', function() {
  reload.listen();
  gulp.watch(['*.js', '*.scss']);
});