# grunt-phpdoc2

> Parse PHP documentation blocks and generate HTML output with PHPDoc2.

This uses the [phpdoc2](https://github.com/soundasleep/phpdoc2) PHP component.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpdoc2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpdoc2');
```

## The "phpdoc2" task

### Overview
In your project's Gruntfile, add a section named `phpdoc2` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phpdoc2: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
    phpdoc2: {
      basic: {
        options: {
          output: 'tmp/basic',
          directories: [
            'test/fixtures/src'
          ]
        }
      }
    },

#### options.directories
Type: List of `String`s
Default value: `['.']`

A list of directories that will be parsed for PHP files to generate documentation for.

Equal to the `--directory` phpdoc2 command-line switch.

#### options.output
Type: `String`
Default value: `docs/`

The target destination to generate HTML documentation to.

Note that this target destination directory will *not* be automatically deleted before generation.

Equal to the `--output` phpdoc2 command-line switch.

#### options.config
Type: `String`
Default value: (not supplied)

If defined, replace all configuration options (with the exception of `directories` and `output`) with the options loaded from this JSON file.

Equal to the `--config` phpdoc2 command-line switch.

#### options.json
Type: `String`
Default value: (not supplied)

If defined, output the parsed PHP database to the given JSON file (may be very large).

Equal to the `--json` phpdoc2 command-line switch.

### Usage Examples

This will scan all PHP files within `src/` and its subdirectories, and generate PHP documentation in the `docs/` directory.

```js
grunt.initConfig({
  phpdoc2: {
    basic: {
      options: {
        output: 'docs/',
        directories: [
          'src/'
        ]
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
