/**
 * Grunt Process HTML
 * --------------------------------------------------
 * Repo: https://github.com/dciccale/grunt-processhtml
 * --------------------------------------------------
 */

exports.task = {
  options: {
    commentMarker: 'process'
  },
  dev: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.views %>/**/*.html',
    dest   : '<%= path.temp %>'
  },
  stage: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.views %>/**/*.html',
    dest   : '<%= path.temp %>'
  },
  prod: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.views %>/**/*.html',
    dest   : '<%= path.temp %>'
  }
};
