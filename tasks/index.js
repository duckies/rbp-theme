import gulp from "gulp";

import scripts from "./webpack";
import styles from "./styles";
import { default as watchTask } from "./watch";

export const build = gulp.series(scripts, styles);
export const watch = gulp.series(watchTask);

export default build;
