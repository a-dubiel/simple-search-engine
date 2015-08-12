/**
 * Grunt HTML Hint
 * --------------------------------------------------
 * Repo: https://github.com/yaniswang/grunt-htmlhint
 * --------------------------------------------------
 */

exports.task = {
  options: {
    htmlhintrc: '.htmlhintrc'
  },
  build: {
    src: [ '<%= path.build %>/**/*.html' ]
  },
};
