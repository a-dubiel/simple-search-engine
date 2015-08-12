/**
 * Grunt Contrib Image Min
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-imagemin
 * --------------------------------------------------
 */

exports.task = {
  options: {
    optimizationLevel : 4
  },
  build: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.images %>/**/*.+(png|jpg|jpeg|gif|ico)' ],
    dest   : '<%= path.build %>'
  }
};
