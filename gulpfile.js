
let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');




function css_style (done){

    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./css/') );

    done();
}

function print(done) {
    console.log("hi");
    done();
}

function watchSass(){
    gulp.watch("./scss/**/*",css_style);
}

// gulp.task(css_style);
// gulp.task(print);

gulp.task('default',gulp.series(print, watchSass));

// exports.default = css_style;
// exports.default = print;
