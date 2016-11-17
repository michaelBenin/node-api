'use strict';

const config = {
  clean: [
    'docs',
    'node_modules',
    'bower_components',
    'logs/**/*.log'
  ],
  eslint: {
    conf: {
      rules: {
        'comma-dangle': [2, 'never'],
        'prefer-arrow-callback': [
          'error', {
            allowNamedFunctions: true
          }
        ]
      }
    }
  },
  nodemon: {
    ignore: [
      'test',
      '.git',
      'node_modules'
    ],
    watch: [
      'src',
      'index.js'
    ],
    script: 'index.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    },
    nodeArgs: [
      '--debug'
      // Uncomment to insert debugger on script initialization
      // '--debug-brk'
    ]
  },
  test: {
    unit: {
      src: [
        'test/utils/env_util.js',
        'test/unit/**/*.js'
      ]
    },
    integration: {
      src: [
        'test/utils/initializer_util.js',
        'test/integration/**/*.js',
        'test/utils/teardown_util.js'
      ]
    }
  }
};

module.exports = config;
