/**
 * Imports
 */
var assert = require('assert');
var spaceless = require('../');

describe('spaceless(value)', function suite() {
  it('should strip space and line breaks before and after the string', function test() {
    var val = '    \n\n      <div class="myDiv"><p class="myParagraph">Some text</p></div>  \n\n    ';
    var formatted = '<div class="myDiv"><p class="myParagraph">Some text</p></div>';
    assert.strictEqual(spaceless(val), formatted);
  });

  it('should strip space and line breaks between tags', function test() {
    var val = '<div class="myDiv">\n      <p class="myParagraph">\n        <span>Some text</span>\n      </p>\n    </div>';
    var formatted = '<div class="myDiv"><p class="myParagraph"><span>Some text</span></p></div>';
    assert.strictEqual(spaceless(val), formatted);
  });
});
