/**
 * Grunt Contrib Connect
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-connect
 * --------------------------------------------------
 */

exports.task = {
  build: {
    options: {
      port: 8000,
      livereload: true,
      hostname: 'localhost',
      base: '<%= path.build %>',
      open: {
        target: 'http://localhost:8000/'
      }
    }
  }
};
