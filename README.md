# expect-renum [![npm package][npm-badge]][npm] [![Travis][build-badge]][build] [![Coveralls][coverage-badge]][coverage]

[build-badge]: https://img.shields.io/travis/bydooweedoo/expect-renum/master.svg?style=flat-square
[build]: https://travis-ci.org/bydooweedoo/expect-renum

[coverage-badge]: https://img.shields.io/codecov/c/github/bydooweedoo/expect-renum.svg?style=flat-square
[coverage]: https://codecov.io/github/bydooweedoo/expect-renum

[npm-badge]: https://img.shields.io/npm/v/expect-renum.svg?style=flat-square
[npm]: https://www.npmjs.org/package/expect-renum

`expect-renum` is an extension for [expect](https://github.com/mjackson/expect) that lets you write better assertions for Enum or Immutable data in javascript.

## Installation

Using [npm](https://www.npmjs.org/):

    $ npm install expect expect-renum --save-dev

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import expect from 'expect';
import expectRenum from 'expect-renum';

expect.extend(expectRenum);

// not using an ES6 transpiler
var expect = require('expect');
var expectRenum = require('expect-renum');

expect.extend(expectRenum);
```

## Assertions

> `// ✔ === success (passed the test)`<br />
> `// ✘ === failure (throw exception)`

### toHaveEnumKey

> `expect(enum).toHaveEnumKey(key, [message])`

Asserts the given `enum` object has an attribute with the given `key`.

```js
expect(renum('TRUE', 'FALSE')).toHaveEnumKey('TRUE') // ✔
expect(renum('TRUE', 'FALSE')).toHaveEnumKey('MAYBE') // ✘
```

### toNotHaveEnumKey

> `expect(enum).toNotHaveEnumKey(key, [message])`

Asserts the given `enum` object has not an attribute with the given `key`.

```js
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKey('MAYBE') // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKey('TRUE') // ✘
```

### toHaveEnumKeys

> `expect(enum).toHaveEnumKeys(keys)`

Asserts the given `enum` object has **all** given `keys` attributes.

```js
expect(renum('TRUE', 'FALSE')).toHaveEnumKeys(['TRUE']) // ✔
expect(renum('TRUE', 'FALSE')).toHaveEnumKeys(['TRUE', 'FALSE']) // ✔
expect(renum('TRUE', 'FALSE')).toHaveEnumKeys(['MAYBE']) // ✘
expect(renum('TRUE', 'FALSE')).toHaveEnumKeys(['TRUE', 'FALSE', 'MAYBE']) // ✘
```

### toNotHaveEnumKeys

> `expect(enum).toNotHaveEnumKeys(keys)`

Asserts the given `enum` object has **not any** given `keys` attributes.

```js
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKeys(['MAYBE']) // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKeys(['MAYBE', 'MAYBE_NOT']) // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKeys(['TRUE']) // ✘
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKeys(['TRUE', 'FALSE']) // ✘
expect(renum('TRUE', 'FALSE')).toNotHaveEnumKeys(['TRUE', 'FALSE', 'MAYBE']) // ✘
```

### toHaveEnumPair

> `expect(enum).toHaveEnumPair(pair, [message])`

Asserts the given `enum` object has an attribute with the given `pair[0]` key pointing to given `pair[1]` value.

```js
expect(renum('TRUE', 'FALSE')).toHaveEnumPair(['TRUE', 'TRUE']) // ✔
expect(renum('TRUE', 'FALSE')).toHaveEnumPair(['MAYBE', 'MAYBE']) // ✘
```

### toNotHaveEnumPair

> `expect(enum).toNotHaveEnumPair(pair, [message])`

Asserts the given `enum` object has not an attribute with the given `pair[0]` key pointing to given `pair[1]` value.

```js
expect(renum('TRUE', 'FALSE')).toNotHaveEnumPair(['MAYBE', 'MAYBE']) // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumPair(['TRUE', 1]) // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumPair([1, 'TRUE']) // ✔
expect(renum('TRUE', 'FALSE')).toNotHaveEnumPair(['TRUE', 'TRUE']) // ✘
```

### toBeEditable

> `expect(obj).toBeEditable()`

Asserts the given `obj` object to be editable.

```js
expect({TRUE: 'TRUE', FALSE: 'FALSE'}).toBeEditable() // ✔
expect(renum('TRUE', 'FALSE')).toBeEditable() // ✘
```

### toNotBeEditable

> `expect(enum).toNotBeEditable()`

Asserts the given `enum` object to not be editable.

```js
expect(renum('TRUE', 'FALSE')).toNotBeEditable() // ✔
expect({TRUE: 'TRUE', FALSE: 'FALSE'}).toNotBeEditable() // ✘
```

### toHaveProp

> `expect(obj).toHaveProp(key)`

Asserts the given `obj` object has a property with the given `key`.

```js
expect({TRUE: 1, FALSE: 0}).toHaveProp('TRUE') // ✔
expect({TRUE: 1, FALSE: 0}).toHaveProp('MAYBE') // ✘
```

### toNotHaveProp

> `expect(obj).toNotHaveProp(key)`

Asserts the given `obj` object has not a property with the given `key`.

```js
expect({TRUE: 1, FALSE: 0}).toNotHaveProp('MAYBE') // ✔
expect({TRUE: 1, FALSE: 0}).toNotHaveProp('TRUE') // ✘
```

### toBeIn

> `expect(key).toBeIn(obj)`

Asserts the given `key` string is in the given `obj` object.

```js
expect('TRUE').toBeIn({TRUE: 1, FALSE: 0}) // ✔
expect('MAYBE').toBeIn({TRUE: 1, FALSE: 0}) // ✘
```

### toNotBeIn

> `expect(key).toNotBeIn(obj)`

Asserts the given `key` string is not in the given `obj` object.

```js
expect('MAYBE').toNotBeIn({TRUE: 1, FALSE: 0}) // ✔
expect('TRUE').toNotBeIn({TRUE: 1, FALSE: 0}) // ✘
```

### toBeFrozen

> `expect(obj).toBeFrozen()`

Asserts the given `obj` object is frozen.

```js
expect(renum([['TRUE', 1], ['FALSE', 0]])).toBeFrozen() // ✔
expect(Object.freeze({TRUE: 1, FALSE: 0})).toBeFrozen() // ✔
expect({TRUE: 1, FALSE: 0}).toBeFrozen() // ✘
```

### toNotBeFrozen

> `expect(obj).toNotBeFrozen()`

Asserts the given `obj` object is not frozen.

```js
expect({TRUE: 1, FALSE: 0}).toNotBeFrozen() // ✔
expect(renum([['TRUE', 1], ['FALSE', 0]])).toNotBeFrozen() // ✘
expect(Object.freeze({TRUE: 1, FALSE: 0})).toNotBeFrozen() // ✘
```
