/**
 * Grunt Contrib JS Hint
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-jshint
 * --------------------------------------------------
 */

exports.task = {
  options: {
    jshintrc : '.jshintrc',
    reporter : require('jshint-stylish')
  },
  before_concat: {
    src : [ '<%= path.source %>/<%= path.scripts %>/**/*.js' ]
  },
  after_concat: {
    src : [ '<%= path.temp %>/<%= path.scripts %>/**/*.js' ]
  }
};
