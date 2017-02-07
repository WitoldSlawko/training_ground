// GULP-SASS

var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
/*
gulp.task('jshint-task',function(){
	//console.log('robie pranie');
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
});
*/
gulp.task('sass-task',function(){
	return gulp.src('scss/style.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(sass({errLogToConsole:true}))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
});
/*
gulp.task('watch',function(){
	gulp.watch('scss/*.scss',['scss']);

});
8/

// gulp-RUBY-sass
/*
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-ruby', function() {
	return sass('scss/style.scss',{style: 'expanded', sourcemap:true})
		.on('error', sass.logError)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass']);
})
*/