var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint');

 gulp.task('styles', function() {
 	return gulp.src('css/*.scss')
 	.pipe(sass({
 		'sourcemap=none': true
 	}))
 	.pipe(concat('custom.css'))
 	.pipe(autoprefix('last 2 version'))
 	.pipe(cleanCSS())
 	.pipe(gulp.dest('css/'))
});
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
});
gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['styles']);
    gulp.watch('js/*js', ['jshint']);
});
gulp.task('default', ['styles', 'jshint','watch']);


var moveFiles = [
	'index.html',
	'./css/*.css',
	'./js/*',
	'./img/*',
	'./portfolio/*'
];
gulp.task('deploy', function() {
	return gulp.src(moveFiles, {base: './'})
		.pipe(gulp.dest('dist'))
});