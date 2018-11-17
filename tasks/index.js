import gulp from 'gulp';
import browserSync from './browsersync';
import scripts from './webpack';
import styles from './styles';
import config from './config';

const watches = () => [
  gulp.watch(config.paths.styles.watch, styles),
  gulp.watch(config.paths.scripts.watch, scripts),
];

const develop = gulp.parallel(scripts, styles, watches, browserSync);
const build = gulp.parallel(styles, scripts);

export {
  develop,
  build,
};

export default develop;
