/**
 * Grunt Accessibility
 * --------------------------------------------------
 * Repo: https://github.com/yargalot/grunt-accessibility
 * --------------------------------------------------
 */

exports.task = {
  options: {
    accessibilityLevel : 'WCAG2A'
  },
  build: {
    src: [ '<%= path.temp %>/<%= path.views %>/**/*.html' ]
  }
};
