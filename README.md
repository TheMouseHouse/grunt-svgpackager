# grunt-svgpackager - v0.4.0

Grunt plugin for SVG Packager.  

#### Recent bugs Fixed

This tool gathers all your SVG from a source folder and packages them all into a JSON file and/or a CSS file.

The name of the SVG file will become the key in the JSON file and the class name in the CSS file.
If the file name has a dot (.), that dot will be replaced with a dash (-).
Example:
icon.clock.svg will become `.icon-clock {}`

The package name will be used as the parent class of the CSS classes.
Example:
Package name = myPackage.

CSS will become `.myPackage .icon-clock {}`

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svgpackager --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svgpackager');
```

## The "svgpackager" task

### Overview
In your project's Gruntfile, add a section named `svgpackager` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgpackager: {
    somePackage: {
      options: {
      }
    },
  },
});
```

### Options

#### options.source - (required)
Type: `String`
Default value: `''`

A uri string to the target folder containing your SVG files.

#### options.dest - (required)
Type: `String`
Default value: `''`

A uri string to the destination folder where your CSS and/or JSON files should be saved.

#### options.package - (required)
Type: `String`
Default value: `'svgpackager'`

A string representing the name of the package. This value will also be used as the parent CSS class ie. `.package .filename {}`.

#### options.prefixsvg
Type: `Boolean`
Default value: `true`

Will prefix the SVG or Base64 data with `data:image/svg+xml;utf8,` or `data:image/svg+xml;base64,` respectively.  
NOTE: Default set to `true`.

#### options.prefix
Type: `String`
Default value: `''`

Option used to prefix all class names.
If left as blank string, a global style will be created using file names as CSS class names...
```css
.package .filename_1,
.package .filename_2,
.package .filename_3
/* ... all file names ... */
{
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    vertical-align: middle;
}

.package .filename_1 {
    /* ... */
}
.package .filename_2 {
    /* ... */
}
.package .filename_3 {
    /* ... */
}
```
 However, if prefix is defined then a global style will created using the following selectors. Therefore, `prefix: 'icon-'` will produce the following CSS:
```css
.package [class^=".icon-"],
.package [class*=" .icon-"] {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    vertical-align: middle;
}

.package .icon-filename_1 {
    /* ... */
}
.package .icon-filename_2 {
    /* ... */
}
.package .icon-filename_3 {
    /* ... */
}
```

#### options.output
Type: `String`
Default value: `'all'`

A string value to determine which files should be generated.  
Setting this to `'json'` will generate only the JSON file.  
Setting this to `'css'` will generate only the CSS file.  
Of course, `'all'` will generate both JSON and CSS.

#### options.base64
Type: `Boolean`
Default value: `false`

Can be set to `true` if you want the SVG data to be encoded to Base64.  
Default is `false` only due to the fact that Base64 usually creates larger files.

#### options.debug
Type: `Boolean`
Default value: `false`

Setting this option to `true` will execute a 'dry run'. Data will be output to console and no files will be generated.

#### options.silent
Type: `Boolean`
Default value: `false`

Can be set to `true` if you do not wish to see any console output from svgpackager.

### Usage Examples

```js
grunt.initConfig({
  svgpackager: {
      myPackage: {
          options: {
              source:    'path/to/my/svg/files',
              dest:      'dist/assets/css',
              prefix:    'my-svg-'
          }
      },
      anotherPackage: {
          options: {
              source:    'path/to/the/other/svg/files',
              dest:      'dist/assets/css',
              prefix:    'other-',
              output:    'css',
              base64:    true
          }
      }
  },
});
```

## Release History
*v0.4.0*  
Fixed failure when desitantion not found. For real this time! Creates destination using [mkdirp](https://www.npmjs.com/package/mkdirp).  

*v0.3.0*  
Fixed failure when desitantion not found.  
Options `dest` and `package` now required.  

*v0.2.1*  
Updated documentation.  

*v0.2.0*  
Added all [svgpackager](https://www.npmjs.com/package/svgpackager) functionality.  

*v0.1.0*  
Initial commit.
