/*
 * grunt-svgpackager
 * https://github.com/pioSko/grunt-svgpackager
 *
 * Copyright (c) 2015 Piotr Skonieczny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    svgpackager: {
        all: {
            options: {
                source:    '',
                dest:      '',
                prefixsvg: true,
                prefix:    '',
                output:    'all',
                base64:    false,
                debug:     false,
                silent:    false
            }
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'svgpackager', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['svgpackager']);

};
