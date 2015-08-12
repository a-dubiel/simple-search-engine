/**
 * Grunt Contrib Sass
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-sass
 * --------------------------------------------------
 */

exports.task = {
  options: {
    sourcemap : 'none',
    style     : 'expanded',
    loadPath  : require('node-neat').includePaths 
  },
  build: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : '<%= path.styles %>/*.scss',
    dest   : '<%= path.temp %>',
    extDot : 'last',
    ext    : '.css'
  }
};
