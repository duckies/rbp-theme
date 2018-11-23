import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import clean from 'gulp-clean-css';
import prefixer from 'gulp-autoprefixer';
import config from './config';

/**
 * Compiles and minifies styles.
 * @return{Pipe}
 */
export default function styles() {
  return gulp
    .src(config.paths.styles.build)
    .pipe(sass({
      includePaths: ['node_modules'],
    }))
    .pipe(prefixer())
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(clean())
    .pipe(gulp.dest(config.paths.styles.dest));
}
