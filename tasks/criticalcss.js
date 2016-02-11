// Load global config and gulp
import config from '../foley.json'
import gulp from 'gulp'

// Specific task modules
import { argv as argv } from 'yargs'
import debug from 'gulp-debug'
import gulpif from 'gulp-if'
import critical from 'critical'
const criticalcss = critical.stream

// HTML minify task
gulp.task('crticalcss', () => {
  return gulp.src(config.paths.build + '/*.html')
  .pipe(gulpif(argv.debug === true, debug({title: 'CSS Inlined:'})))
  .pipe(criticalcss({
    base: config.paths.build + '/',
    width: 320,
    height: 480,
    minify: true,
    extract: false,
    inline: true
  }))
  .pipe(gulp.dest(config.paths.build))
})
