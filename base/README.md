### PhoneGap/Cordova App with RequireJS, Backbone and jQuery Mobile

Latest includes libs:
- [Compass](http://compass-style.org/) 

### Guidelines styles 
ui.html holds all the ui components for the application.

### Sass

We are using SASS, please dont modified css directly
Please use compass (http://compass-style.org/) to compile the .scss files.

### Workflow

We are using Grunt (http://gruntjs.org) for development process (compile SASS, minify JavaScript, compile RequireJS and run Unit Tests). In order to run your development environment, run the next commands:

- Open a terminal within your project path.
- To configure the development environment, run `sudo sh prepare-env.sh`.
- `grunt develop` will start the web server, and open your application in your browser.
- All the changes you did make to the SASS files will be inmediatelly compiled.

_Note: if you are writing unit tests, it's better to run `grunt develop --force` instead of `grunt develop`. Elsewhere in each assert file your web server will crash._

### Unit testing

In order to run unit testing suite, you need to be running your web server (see step 3 of Workflow) and go to [localhost:3000/](localhost:3000/testSuite.html) to see the visual testing suite.


_Note: if you only want to run your tests in terminal, without launching the visual interface, just run `grunt jasmine` in your terminal within your project path._

### TODO
- Create `grunt build` task to minify assets, run unit tests and if all passes, create a new phonegap build.