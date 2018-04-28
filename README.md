# nunjucks-spaceless-filter

Strip line breaks and white space between tags.

## Usage

```
const spaceless = require('nunjucks-spaceless-filter');

// (where env is your existing Nunjucks environement)
env.addFilter('spaceless', spaceless);

{% filter spaceless -%}
  <div class="myDiv">
    <p class="myParagraph">Some text</p>
  </div>
{%- end filter %}

// output:
<div class="myDiv"><p class="myParagraph">Some text</p></div>
```

### Arguments

* `value`: Source string

## Testing

Tests require [Mocha](https://mochajs.org/) and can be run with `npm test`.  You can specify Mocha options, such as the reporter, by adding a [mocha.opts](https://mochajs.org/#mochaopts) file to the `test` directory.

Running `npm test --coverage` will generate code coverage reports with [Istanbul](https://github.com/gotwarlost/istanbul). The code coverage reports will be located in the `coverage` directory, which is excluded from the repository.
