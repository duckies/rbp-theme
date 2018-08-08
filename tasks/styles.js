import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import clean from 'gulp-clean-css';
import prefixer from 'gulp-autoprefixer';

const paths = {
  styles: {
    watch: './src/scss/**/*.{scss,css,sass}',
    build: './src/scss/*.scss',
    dest: './dist/',
  },
};

/**
 * Compiles and minifies styles.
 * @return{Pipe}
 */
export function styles() {
  return gulp
    .src(paths.styles.build)
    .pipe(sass({
      includePaths: ['node_modules'],
    }))
    .pipe(prefixer())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(clean())
    .pipe(gulp.dest(paths.styles.dest));
}

export default styles;

