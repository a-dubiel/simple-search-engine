/**
 * Grunt CSS Comb
 * --------------------------------------------------
 * Repo: https://github.com/csscomb/grunt-csscomb
 * --------------------------------------------------
 */

exports.task = {
  build: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.styles %>/**/*.css',
    dest   : '<%= path.temp %>'
  }
};
