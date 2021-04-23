
let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');



function css_style (done){

    gulp.src('./scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe( gulp.dest('./css/') );

    done();
}



gulp.task(css_style);

exports.default = css_style;