import gulp from "gulp";
import sass from "gulp-sass";
import gulpif from 'gulp-if';
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import concat from "gulp-concat";
import clean from "gulp-clean-css";
import prefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import browsersync from 'browser-sync';

const paths = {
  styles: {
    watch: "./src/scss/**/*.{scss,css,sass}",
    build: "./src/scss/*.scss",
    dest: "./dist/"
  }
};

export function styles() {
  return gulp
    .src(paths.styles.build)
    .pipe(sass({ includePaths: ["node_modules"] }))
    .pipe(prefixer())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(clean())
    .pipe(gulp.dest(paths.styles.dest));
}

export default styles;
