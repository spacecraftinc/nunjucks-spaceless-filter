'use strict';

/**
 * Constants
 */
const WHITESPACE_AT_START = /^\s+/;
const WHITESPACE_BETWEEN_TAGS = />\s+</g;
const WHITESPACE_AT_END = /\s+$/;

/**
 * Strips line breaks and space between tags in HTML/SVG
 *
 * @param   {String}     value     source string
 * @returns {String}               formatted
 */
module.exports = function(value) {
  return value.replace(WHITESPACE_AT_START, '').replace(WHITESPACE_BETWEEN_TAGS, '><').replace(WHITESPACE_AT_END, '');
};
