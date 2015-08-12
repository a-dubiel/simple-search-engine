/**
 * Grunt Scss Lint
 * --------------------------------------------------
 * Repo: https://github.com/ahmednuaman/grunt-scss-lint
 * --------------------------------------------------
 */

exports.task = {
  allFiles: [
    '<%= path.source %>/<%= path.styles %>/**/*.scss',
  ],
  options: {
    config         : '.scss-lint.yml',
    colorizeOutput : true
  }
};
