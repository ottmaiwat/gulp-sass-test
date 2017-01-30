// Modules
var gulp = require('gulp'),
    autoprefixerModule = require('gulp-autoprefixer'),
    sassModule = require('gulp-sass'),
    sourcemapsModule = require('gulp-sourcemaps');


// Directories
var sassSrcFolder = './scss/*.scss',
    sassDestFolder = './css';


var sassTranspileOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};


gulp.task('sass', function(){
    return gulp
        .src(sassSrcFolder)
        .pipe(sourcemapsModule.init())
        .pipe(sassModule(sassTranspileOptions).on('error', sassModule.logError))
        .pipe(sourcemapsModule.write('.'))
        .pipe(gulp.dest(sassDestFolder));
});


gulp.task('default', ['sass'], function(){});
