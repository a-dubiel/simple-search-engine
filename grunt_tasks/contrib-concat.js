/**
 * Grunt Contrib Concat
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-concat
 * --------------------------------------------------
 */

exports.task = {
  options: {
    separator: '\n\n'
  },
  build: {
    options: {
      banner: '<%= banner.exapanded %>'
    },
    files: {
      /* Main */
      '<%= path.temp %>/<%= path.scripts %>/app.js': [
        '<%= path.source %>/<%= path.scripts %>/vendors/*.js',
        '<%= path.source %>/<%= path.scripts %>/app.js',
        '<%= path.source %>/<%= path.scripts %>/controllers/main.controller.js',
        '<%= path.source %>/<%= path.scripts %>/services/user.service.js',
        '<%= path.source %>/<%= path.scripts %>/filters/search.filter.js', 
        '<%= path.source %>/<%= path.scripts %>/directives/modal.directive.js' 
      ],
      
    }
  }
};
