/**
 * Grunt SVG Min
 * --------------------------------------------------
 * Repo: https://github.com/sindresorhus/grunt-svgmin
 * --------------------------------------------------
 */

exports.task = {
  build: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.images %>/**/*.svg' ],
    dest   : '<%= path.build %>'
  }
};
