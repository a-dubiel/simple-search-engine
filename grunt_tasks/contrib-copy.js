/**
 * Grunt Contrib Copy
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-copy
 * --------------------------------------------------
 */

exports.task = {
  data: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.data %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  fonts: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.fonts %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  media: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.media %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  misc_dev: {
    expand : true,
    cwd    : '<%= path.source %>/<%= path.misc_dev %>',
    src    : [ '**/*' ],
    dest   : '<%= path.build %>',
    dot    : true
  },
  misc_stage: {
    expand : true,
    cwd    : '<%= path.source %>/<%= path.misc_stage %>',
    src    : [ '**/*' ],
    dest   : '<%= path.build %>',
    dot    : true
  },
  misc_prod: {
    expand : true,
    cwd    : '<%= path.source %>/<%= path.misc_prod %>',
    src    : [ '**/*' ],
    dest   : '<%= path.build %>',
    dot    : true
  },
  scripts: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : [ '<%= path.scripts %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  styles: {
    expand : true,
    cwd    : '<%= path.temp %>',
    src    : [ '<%= path.styles %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  vendors: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.vendors %>/**/*' ],
    dest   : '<%= path.build %>'
  },
  views_temp: {
    expand : true,
    cwd    : '<%= path.source %>',
    src    : [ '<%= path.views %>/**/*' ],
    dest   : '<%= path.temp %>',
  },
  views_build: {
    expand : true,
    cwd    : '<%= path.temp %>/<%= path.views %>',
    src    : [ '**/*' ],
    dest   : '<%= path.build %>',
  }
};
