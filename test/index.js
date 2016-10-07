/**
 * Imports
 */
var assert = require('assert');
var spaceless = require('../');
var nunjucks = require('nunjucks');
var env = new nunjucks.Environment([], { autoescape: false });
env.addFilter('spaceless', spaceless);


describe('spaceless(value)', function suite() {
  it('shoud remove whitespace between HTML tags', function () {
    assert.strictEqual(env.renderString('{% filter spaceless %}<div>\n\t \t\n</div>{% endfilter %}'), '<div></div>');
    assert.strictEqual(env.renderString('{% filter spaceless %}<textarea>\n\t \t\n</textarea>{% endfilter %}'), '<textarea></textarea>');
    assert.strictEqual(env.renderString('{% filter spaceless %}<pre>\n\t \t\n</pre>{% endfilter %}'), '<pre></pre>');
  });

  it('should remove whitespace around HTML tags', function () {
    assert.strictEqual(env.renderString('{% filter spaceless %}\n\n\t\t  <div></div>\n\t {% endfilter %}'), '<div></div>');
  });

  it('should maintail whitespace outside `spaceless` tags', function () {
    assert.strictEqual(env.renderString('\n\n\t\t  {% filter spaceless %}<div></div>{% endfilter %} \t\n'), '\n\n\t\t  <div></div> \t\n');
  });

  it('should maintain whitespace between HTML tag and text', function () {
    assert.strictEqual(env.renderString('{% filter spaceless %}<div>\n\t <i>\n\t text </i> \t\n</div>{% endfilter %}'), '<div><i>\n\t text </i></div>');
    assert.strictEqual(env.renderString('{% filter spaceless %}<pre>\n\t <i>\n\t text </i> \t\n</pre>{% endfilter %}'), '<pre><i>\n\t text </i></pre>');
  });

  it('should maintain whitespace inside tag', function () {
    assert.strictEqual(env.renderString('{% filter spaceless %}<input name=" spaceless "  value="  "  required="  ">{% endfilter %}'), '<input name=" spaceless "  value="  "  required="  ">');
  });
});
