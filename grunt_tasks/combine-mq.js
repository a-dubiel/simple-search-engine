/**
 * Grunt Combine MQ
 * --------------------------------------------------
 * Repo: https://github.com/frontendfriends/grunt-combine-mq
 * --------------------------------------------------
 */

exports.task = {
  options: {
    beautify : false
  },
  build: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : '<%= path.styles %>/**/*.css',
    dest   : '<%= path.temp %>'
  }
};
