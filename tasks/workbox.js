// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
const wbBuild = require('workbox-build');

// Workbox Task
gulp.task('bundle-sw', () => {
  return wbBuild.generateSW({
    globDirectory: paths.build,
    swDest: paths.build + 'sw.js',
    globPatterns: ['**\/*.{html,js,css,jpg,gif,png,svg}'],
    globIgnores: ['tmp-*.html'],
  })
  .then(() => {
    console.log('Service worker generated.');
  })
  .catch((err) => {
    console.log('[ERROR] This happened: ' + err);
  });
})
