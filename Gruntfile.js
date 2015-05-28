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
        sample1: {
            options: {
                source:    'samples/sample1',
                dest:      'tmp/sample1/assets',
                package:   'sample1',
                prefix:    'my-svg-'
            }
        },
        sample2: {
            options: {
                source:    'samples/sample2',
                dest:      'tmp/sample2/assets',
                package:   'sample2',
                output:    'css',
                base64:    true
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
