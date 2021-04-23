
let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require("browser-sync").create();



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

function sync(done) {
    browserSync.init({
        server: {
            baseDir:"./"+ index.html+ "/"
        },
        port: 3000,
        notify: false
    });
    done();
}

function print(done) {
    console.log("hi");
    done();
}

function watchSass(){
    gulp.watch("./scss/**/*",css_style);
}


gulp.task(sync);
gulp.task('default',gulp.series(print, watchSass));



