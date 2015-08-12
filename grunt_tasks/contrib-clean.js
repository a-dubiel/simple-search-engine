/**
 * Grunt Contrib Clean
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-clean
 * --------------------------------------------------
 */

exports.task = {
  build : [ '<%= path.build %>' ],
  docs  : [ '<%= path.docs %>' ],
  temp  : [ '<%= path.temp %>' ]
};
