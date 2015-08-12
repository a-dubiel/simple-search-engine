/**
 * Grunt Autoprefixer
 * --------------------------------------------------
 * Repo: https://github.com/nDmitry/grunt-autoprefixer
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
