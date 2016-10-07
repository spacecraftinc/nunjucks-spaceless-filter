'use strict';

/**
 * Imports
 */
const assert = require('assert');
const spaceless = require('../');

describe('spaceless(value)', () => {
  it('should strip space and line breaks before and after the string', () => {
    const val = `
          <div class="myDiv"><p class="myParagraph">Some text</p></div>
    `;
    const formatted = '<div class="myDiv"><p class="myParagraph">Some text</p></div>';
    assert.strictEqual(spaceless(val), formatted);
  });

  it('should strip space and line breaks between tags', () => {
    const val = `<div class="myDiv">
      <p class="myParagraph">
        <span>Some text</span>
      </p>
    </div>`;
    const formatted = '<div class="myDiv"><p class="myParagraph"><span>Some text</span></p></div>';
    assert.strictEqual(spaceless(val), formatted);
  });
});
