import gulp from 'gulp';
import browserSync from './browsersync';
import styles from "./styles";
import scripts from "./webpack";
import config from "./config";

export function watch() {
    browserSync();
    gulp.watch(config.paths.styles.watch, gulp.parallel(styles));
    gulp.watch(config.paths.scripts.watch, gulp.parallel(scripts));
}

export default watch;