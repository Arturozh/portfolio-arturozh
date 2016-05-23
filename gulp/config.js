// set default source and build directories
var dest = './dist';
var src = './src';
var gulpIgnore = ['!' + src + '/gulp/tasks/**/*', '!' + src + '/assets/**/*.scss'];

module.exports = {
  // options for Gulp tasks go here
  markup: {
    /* there most likely won't be a need for any markup other than a main
    index.html but you can add more configuration here if necessary */
    src: src,
    dest: dest
  },
  server: {
    script: 'server/main.js',
    ext: 'js html',
    watch: 'server/**/*.*',
    nodeArgs: ['--debug'],
  },
  jsFiles: [
    'src/**/*.module.js',
    'src/**/*.route.js',
    'src/**/*.js',
    '!gulp/tasks/**/*'
  ],
  scssFiles: [
    'src/**/*.scss'
  ],
  htmlFiles: [
    'src/**/*.html'
  ],
  otherFiles: [
    'src/**/*.json',
    'src/**/*.svg',
    'src/**/*.jpg',
    'src/**/*.png',
    'src/assets/**/*'
  ],
  gulpIgnore : gulpIgnore
};