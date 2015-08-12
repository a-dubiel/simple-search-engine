/**
 * Grunt Contrib Uglify
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-uglify
 * --------------------------------------------------
 */

exports.task = {
  options: {
    mangle : false,
    report : 'min',
    banner : '<%= banner.compressed %>'
  },
  scripts: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.scripts %>/**/*.js',
    dest   : '<%= path.temp %>',
    extDot : 'last',
    ext    : '.min.js'
  }
};
