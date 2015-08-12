module.exports = function(grunt) {

  'use strict';

  /* Get package info and environment */
  var pkg = grunt.file.readJSON('package.json');
  var env = grunt.option('env') || 'dev';

  /**
   * Grunt config
   * --------------------------------------------------
   */

  grunt.config.init({

    /**
     * Package
     * --------------------------------------------------
     */

    pkg: pkg,

    /**
     * Paths
     * --------------------------------------------------
     */

    path: {
      source     : 'source',
      temp       : 'temp',
      build      : 'build',
      data       : 'data',
      fonts      : 'fonts',
      images     : 'images',
      media      : 'media',
      misc_dev   : 'misc/dev',
      misc_stage : 'misc/stage',
      misc_prod  : 'misc/prod',
      scripts    : 'scripts',
      styles     : 'styles',
      views      : 'views',
    },

    /**
     * Banner
     * --------------------------------------------------
     */

    banner: {
      exapanded:
        '/**\n' +
        ' * <%= pkg.title %> v<%= pkg.version %>\n' +
        ' * <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
        ' * \n' +
        ' * <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.author.url %>\n' +
        ' */\n\n',
      compressed:
        '/*! <%= pkg.title %> v<%= pkg.version %> | ' +
        '<%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> | ' +
        '<%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */'
    },

    /**
     * Tasks
     * --------------------------------------------------
     */

    accessibility : require('./grunt_tasks/accessibility.js').task,
    autoprefixer  : require('./grunt_tasks/autoprefixer.js').task,
    combine_mq    : require('./grunt_tasks/combine-mq.js').task,
    clean         : require('./grunt_tasks/contrib-clean.js').task,
    concat        : require('./grunt_tasks/contrib-concat.js').task,
    connect       : require('./grunt_tasks/contrib-connect.js').task,
    copy          : require('./grunt_tasks/contrib-copy.js').task,
    imagemin      : require('./grunt_tasks/contrib-imagemin.js').task,
    jshint        : require('./grunt_tasks/contrib-jshint.js').task,
    sass          : require('./grunt_tasks/contrib-sass.js').task,
    uglify        : require('./grunt_tasks/contrib-uglify.js').task,
    watch         : require('./grunt_tasks/contrib-watch.js').task,
    csscomb       : require('./grunt_tasks/csscomb.js').task,
    csso          : require('./grunt_tasks/csso.js').task,
    htmlhint      : require('./grunt_tasks/htmlhint.js').task,
    notify        : require('./grunt_tasks/notify.js').task,
    processhtml   : require('./grunt_tasks/processhtml.js').task,
    scsslint      : require('./grunt_tasks/scsslint.js').task,
    svgmin        : require('./grunt_tasks/svgmin.js').task

  }); // grunt.config.init()

  /**
   * Dependencies
   * --------------------------------------------------
   */

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  /**
   * Default tasks
   * --------------------------------------------------
   */

  /* Default */
  grunt.registerTask('default', [
    'build',
    'server'
  ]);

  /* Build */
  grunt.registerTask('build', [
    'clean:build',
    'data',
    'fonts',
    'images',
    'media',
    'misc',
    'scripts',
    'styles',
    'views',
    'notify:build'
  ]);

  /* Server */
  grunt.registerTask('server', [
    'connect',
    'watch',
    'notify:server'
  ]);

  /**
   * Individual tasks
   * --------------------------------------------------
   */

  /* Data */
  grunt.registerTask('data', [
    'copy:data',
    'notify:data'
  ]);

  /* Fonts */
  grunt.registerTask('fonts', [
    'copy:fonts',
    'notify:fonts'
  ]);

  /* Images */
  grunt.registerTask('images', [
    'imagemin',
    'svgmin',
    'notify:images'
  ]);

  /* Media */
  grunt.registerTask('media', [
    'copy:media',
    'notify:media'
  ]);

  /* Misc */
  grunt.registerTask('misc', [
    'copy:misc_' + env,
    'notify:misc'
  ]);

  /* Scripts */
  grunt.registerTask('scripts', [
    'clean:temp',
    'jshint:before_concat',
    'concat:build',
    'uglify',
    'copy:scripts',
    'clean:temp',
    'notify:scripts'
  ]);

  /* Styles */
  grunt.registerTask('styles', [
    'clean:temp',
    'scsslint',
    'sass',
    'combine_mq',
    'autoprefixer',
    'csscomb',
    'csso',
    'copy:styles',
    'clean:temp',
    'notify:styles'
  ]);

  /* Views */
  grunt.registerTask('views', [
    'clean:temp',
    'copy:views_temp',
    'processhtml:' + env,
    'htmlhint',
    'accessibility',
    'copy:views_build',
    'clean:temp',
    'notify:views',
  ]);

};
