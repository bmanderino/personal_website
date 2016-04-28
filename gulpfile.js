var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint');

 gulp.task('styles', function() {
 	return gulp.src('src/css/*.scss')
 	.pipe(sass({
 		'sourcemap=none': true
 	}))
 	.pipe(concat('custom.css'))
 	.pipe(autoprefix('last 2 version'))
 	.pipe(cleanCSS())
 	.pipe(gulp.dest('src/css/'))
});
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
});
gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['styles']);
    gulp.watch('src/js/*js', ['jshint']);
});
gulp.task('default', ['styles', 'jshint','watch']);


var moveFiles = [
	'src/index.html',
	'src/css/*.css',
	'src/js/*',
	'src/img/*',
	'src/portfolio/*',
    'src/fonts/*'
];
gulp.task('deploy', function() {
	return gulp.src(moveFiles, {base: 'src/'})
		.pipe(gulp.dest('dist'))
});