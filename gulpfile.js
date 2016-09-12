var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var atImport = require('postcss-import');
var autoprefixer = require('autoprefixer');

//build task
gulp.task('build', function() {
	var processors = [
	require('postcss-mixins'),
	atImport({path: ['./app/static/pcss']}),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('css-mqpacker'),
	autoprefixer({browsers: ['last 2 version']}),
	];
	return gulp.src('./app/static/pcss/[^_]*.pcss')
	.pipe(postcss(processors))
	.pipe(rename({extname: '.css'}))
	.pipe(gulp.dest('./app/static/build/css'))
	});


gulp.task('default', ['build'] , function () {
	gulp.watch(['./app/pcss/*.pcss'],['build']);
	});