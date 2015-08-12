# Simple search engine
Developed by Andrzej Dubiel for good folks at Grid Dynamics.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Built with AngularJS](https://builtwith.angularjs.org/img/AngularJS-small.png)](https://angularjs.org/)

---

### Introduction

Dead simple search engine with modal functionality.

---

## Prerequisites

If you haven’t done it before, please install the following prerequisites:

* [Node.js & NPM](http://nodejs.org/)
* [Ruby](http://rubyinstaller.org/) - Windows users only
* [Grunt](http://gruntjs.com/)
* [Sass](http://sass-lang.com/)
* [Scss Lint](https://github.com/causes/scss-lint)

---

### NPM Dependencies

In terminal, go to your project directory and run `npm cache clear` and `npm install`.

---

### Directory Structure

+ `/build`
+ `/node_modules`
+ `/source`
    + `/data`
    + `/fonts`
    + `/images`
    + `/media`
    + `/misc`
    + `/scripts`
        + `/controllers`
        + `/directives`
        + `/filters`
        + `/services`
        + `/vendors`
        + `/app.js`
    + `/styles`
        + `/components`
        + `/core`
        + `/objects`
        + `/utilities`
    + `/views`

### Initial Build

In terminal, go to your project directory and run `grunt build`. By default, it will create `dev` build in `build` directory (that’s where local server point to). To create staging simply run `grunt build —env=stage` or `grunt build —env=prod` for production.

### Start Local Server

In terminal, go to your project directory and run `grunt server`, it will open a new browser window and point to `http://localhost:8000/` which points to `build` directory. From now on you can work within `source` directory and any changes will be automatically reloaded in your browser.

### Individual Grunt Tasks

Each task is self-explanatory. For more information please look inside `Gruntfile.js`.

* `grunt data`
* `grunt fonts`
* `grunt images`
* `grunt media`
* `grunt misc`
* `grunt scripts`
* `grunt styles`
* `grunt views`
