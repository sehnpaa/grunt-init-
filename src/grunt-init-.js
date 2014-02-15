/*
 * grunt-init-
 * https://github.com/sehnpaa/grunt-init-
 *
 * Copyright (c) 2014 Peter Andersson
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunt_init_ = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunt_init_ = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunt_init_.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunt_init_.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunt_init_ = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
