# expect-enum [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/bydooweedoo/expect-renum/master.svg?style=flat-square
[build]: https://travis-ci.org/bydooweedoo/expect-renum

[npm-badge]: https://img.shields.io/npm/v/expect-renum.svg?style=flat-square
[npm]: https://www.npmjs.org/package/expect-renum

`expect-renum` is an extension for [expect](https://github.com/mjackson/expect) that lets you write better assertions for Enum or Immutable data in javascript.

## Installation

Using [npm](https://www.npmjs.org/):

    $ npm install expect expect-renum

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

### toHaveEnumKey

> `expect(enum).toHaveEnumKey(key, [message])`

Asserts the given `enum` object has an attribute with the given `key`.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKey('TRUE') // success
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKey('MAYBE') // failure
```

### toNotHaveEnumKey

> `expect(enum).toNotHaveEnumKey(key, [message])`

Asserts the given `enum` object has not an attribute with the given `key`.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toNotHaveEnumKey('MAYBE') // success
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toNotHaveEnumKey('TRUE') // failure
```

### toHaveEnumKeys

> `expect(enum).toHaveEnumKeys(keys)`

Asserts the given `enum` object has all given `keys` attributes.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKeys([ 'TRUE', ]) // success
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKeys([ 'TRUE', 'FALSE', ]) // success
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKeys([ 'MAYBE', ]) // failure
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKeys([ 'TRUE', 'FALSE', 'MAYBE', ]) // failure
```

### toNotBeEditable

> `expect(enum).toNotBeEditable()`

Asserts the given `enum` object to not be editable.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toNotBeEditable() // success
expect({ TRUE: 1, FALSE: 0, }).toNotBeEditable() // failure
```

### toHaveProp

> `expect(obj).toHaveProp(key)`

Asserts the given `obj` object has a property with the given `key`.

```js
expect({ TRUE: 1, FALSE: 0, }).toHaveProp('TRUE') // success
expect({ TRUE: 1, FALSE: 0, }).toHaveProp('MAYBE') // failure
```

### toBeIn

> `expect(key).toBeIn(obj)`

Asserts the given `key` string is in the given `obj` object.

```js
expect('TRUE').toBeIn({ TRUE: 1, FALSE: 0, }) // success
expect('MAYBE').toBeIn({ TRUE: 1, FALSE: 0, }) // failure
```

### toBeFrozen

> `expect(obj).toBeFrozen()`

Asserts the given `obj` object is frozen.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toBeFrozen() // success
expect({ TRUE: 1, FALSE: 0, }).toBeFrozen() // failure
```
