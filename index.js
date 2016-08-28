/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-let',
  isDevelopingAddon: function() { return true },

  setupPreprocessorRegistry: function(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      name: 'inline-let',
      plugin: require('./lib/inline-let-transform')
    });
  }
};
