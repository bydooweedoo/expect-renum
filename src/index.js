const R = require('ramda');
const expect = require('expect');
const assert = expect.assert;

const enumHasKeys = Enum => R.reduce(
    (acc, key) => (acc ? R.hasIn(key, Enum) : acc),
    true
);

const isNotNilObject = R.both(
    R.is(Object),
    R.pipe(R.isNil, R.not)
);

const throws = fn => {
    try {
        fn();
    } catch (error) {
        return true;
    }
    return false;
};

function isObject(obj, fooName, typeName) {
    assert(
        isNotNilObject(obj),
        `The "actual" argument in ${fooName} must be ${typeName}, %s was given`,
        obj
    );
}

function toHaveProp(key) {
    isObject(this.actual, 'expect(actual).toHaveProp()', 'an Object');
    assert(
        this.actual.hasOwnProperty(key),
        'expected object %s to have property %s',
        this.actual,
        key
    );
}

function toNotHaveProp(key) {
    isObject(this.actual, 'expect(actual).toNotHaveProp()', 'an Object');
    assert(
        this.actual.hasOwnProperty(key) === false,
        'expected object %s to not have property %s',
        this.actual,
        key
    );
}

function toHaveEnumKey(key) {
    isObject(this.actual, 'expect(actual).toHaveEnumKey()', 'an Enum');
    assert(
        key in this.actual,
        'expected enum %s to have key %s',
        this.actual,
        key
    );
}

function toHaveEnumKeys(keys) {
    isObject(this.actual, 'expect(actual).toHaveEnumKeys()', 'an Enum');
    assert(
        enumHasKeys(this.actual)(keys),
        'expect enum %s to have all keys %s',
        this.actual,
        keys
    );
}

function toBeIn(obj) {
    isObject(obj, 'expect().toBeIn(actual)', 'an Object');
    assert(
        this.actual in obj,
        'expected key %s to be in object %o',
        this.actual,
        obj
    );
}

function editFirstKey(obj) {
    'use strict';

    const keys = Object.keys(obj);
    const key = keys.length ? keys[0] : null;

    if (key) {
        obj[key] = '$$test';
    } else {
        obj.__$TEST = '$$test';
    }
}

function toBeEditable() {
    isObject(this.actual, 'expect(actual).toBeEditable()', 'an Object');
    assert(
        throws(() => editFirstKey(this.actual)) === false,
        'expected object %s to be editable',
        this.actual
    );
}

function toNotBeEditable() {
    isObject(this.actual, 'expect(actual).toNotBeEditable()', 'an Object');
    assert(
        throws(() => editFirstKey(this.actual)) === true,
        'expected object %s to not be editable',
        this.actual
    );
}

function toBeFrozen() {
    isObject(this.actual, 'expect(actual).toBeFrozen()', 'an Object');
    assert(
        Object.isFrozen(this.actual) === true,
        'expect object %s to be frozen',
        this.actual
    );
}

module.exports = {
    toHaveProp,
    toNotHaveProp,
    toHaveEnumKey,
    toHaveEnumKeys,
    toBeIn,
    toBeEditable,
    toNotBeEditable,
    toBeFrozen,
};
