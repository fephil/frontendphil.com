// Load global config and gulp
import config from '../foley.json'
import gulp from 'gulp'

// Specific task modules
import svgSprite from 'gulp-svg-sprite'
import { argv as argv } from 'yargs'
import debug from 'gulp-debug'
import gulpif from 'gulp-if'

// SVG sprite config
var svgConfig = {
  mode: {
    symbol: {
      dest: config.paths.build,
      sprite: 'assets/sprite.svg',
      render: {
        scss: {
          dest: '../' + config.paths.scss + 'partials/_svgsprite.scss'
        }
      },
      example: true
    }
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false
  }
}

// SVG sprite task
gulp.task('svgsprite', () => {
  return gulp.src(config.paths.icons + '/**/*.svg')
    .pipe(gulpif(argv.debug === true, debug({title: 'SVG Spritesheet:'})))
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('.'))
})
