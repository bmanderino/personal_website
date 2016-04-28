var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer');

 gulp.task('styles', function() {
 	return gulp.src('css/*.scss')
 	.pipe(sass({
 		'sourcemap=none': true
 	}))
 	.pipe(concat('custom.css'))
 	.pipe(autoprefix())
 	.pipe(gulp.dest('css/'))
});
gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['styles']);
});
gulp.task('default', ['styles','watch']);