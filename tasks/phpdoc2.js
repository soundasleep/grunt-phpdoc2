/*
 * grunt-phpdoc2
 * https://github.com/soundasleep/grunt-phpdoc2
 *
 * Copyright (c) 2015 Jevon Wright
 * Licensed under the GPL-3.0 license.
 */

'use strict';

var shell = require('shelljs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('phpdoc2', 'Parse PHP documentation blocks and generate HTML output with PHPDoc2.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      // TODO more default options
      project_name: 'untitled',
      directories: [],
      output: 'docs/'
    });

    var ret = null;

    var phpdocScript = (grunt.file.exists("node_modules/grunt-phpdoc2") ? "node_modules/grunt-phpdoc2/" : "") + "vendor/soundasleep/phpdoc2/phpdoc2.php";

    var changePath = "";
    if (grunt.file.exists("node_modules/grunt-phpdoc2")) {
      changePath = "cd node_modules/grunt-phpdoc2 && ";
    }

    if (!grunt.file.exists(phpdocScript)) {
      // try installing with composer
      grunt.log.write("Installing latest phpdoc2 package using Composer...");
      ret = shell.exec(changePath + "composer install");
      if (ret.code) {
        grunt.warn("Composer install returned " + ret);
      }
    }

    var bin = "php";
    var args = [
      "-f",
      phpdocScript,
      "--",
      "--output",
      options.output
    ];

    // add directories
    options.directories.forEach(function (d) {
      args.push("--directory");
      args.push(d);
    });

    if (options.json) {
      args.push("--json");
      args.push(options.json);
    }

    if (options.config) {
      args.push("--config");
      args.push(options.config);
    }

    var command = bin + " " + args.join(' ');
    grunt.verbose.writeln('Command: ' + command);

    ret = shell.exec(command);
    if (ret.code) {
      grunt.warn("Script returned " + ret);
    }

  });

};
