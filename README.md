# expect-enum

`expect-enum` is an extension for [expect](https://github.com/mjackson/expect) that lets you write better assertions for Enum or Immutable data in javascript.

## Installation

Using [npm](https://www.npmjs.org/):

    $ npm install expect expect-enum

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import expect from 'expect'
import expectEnum from 'expect-enum'

expect.extend(expectEnum)

// not using an ES6 transpiler
var expect = require('expect')
var expectEnum = require('expect-enum')

expect.extend(expectEnum)
```

## Assertions

### toHaveEnumKey

> `expect(enum).toHaveEnumKey(key)`

Asserts the given `enum` object has an attribute with the given `key`.

```js
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKey('TRUE') // success
expect(Object.freeze({ TRUE: 1, FALSE: 0, })).toHaveEnumKey('MAYBE') // failure
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
