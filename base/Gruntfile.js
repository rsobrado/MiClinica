'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    gruntConfig: grunt.file.readJSON('gruntConfig.json'),

    express: {
      options: {
        script: '<%= gruntConfig.server.src %>',
        port: '<%= gruntConfig.server.port %>',
        output: "Express server listening on port .+"
      },
      defaults: {},
      custom_args: {
        options: {
          output: "Express server listening on port .+"
        }
      },
      dev: {
        options: {
          port: 8080,
          output: "DEV server listening on port .+"
        }
      },
      stoppable: {}
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // Open a web server with a given URL.
    open: {
      dev: {
        path: 'http://localhost:<%= gruntConfig.server.port %>'
      }
    },

    watch: {
      css: {
        files:  [ 'views/*.jade','sass/*.scss','public/stylesheets/*.css' ],
        tasks:  [ 'compass'],
        options: {
          livereload: true //Without this option specified express won't be reloaded
        }
      }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['compass','express:defaults', 'open', 'watch']);
};