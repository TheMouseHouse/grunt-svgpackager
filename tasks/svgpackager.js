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
  grunt.registerMultiTask('svgpackager', 'Grunt plugin for SVG Packager', function() {
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
        if(options.source.length){
            grunt.log.warn('Source folder not defined!');
        }
        if(options.dest.length){
            grunt.log.warn('Destination folder not defined!');
        }
        if(options.package.length){
            grunt.log.warn('Package name not defined!');
        }
        return false;
    }
  });
};
