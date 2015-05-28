/*
 * grunt-svgpackager
 * https://github.com/TheMouseHouse/grunt-svgpackager
 *
 * Copyright © The Mouse House - 2015
 * Licensed under the MIT license.
 */

'use strict';

var Fs     = require('fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svgpackager', 'Grunt plugin for SVG Packager', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options(
        {
            source:    '',
            dest:      '',
            package:   'svgpackager',
            prefixsvg: true,
            prefix:    '',
            output:    'all',
            base64:    false,
            debug:     false,
            silent:    false
        }
    );

    if(options.source.length && options.dest.length && options.package.length){
        var done = this.async();

        if(!Fs.existsSync(options.source)) {
            grunt.log.warn('Source not found!');
            return false;
		}

        require('svgpackager').pack(options, done);
    } else {
        grunt.log.warn('Source folder not defined!');
        return false;
    }
  });

};
