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

function isObject (obj, fooName, typeName) {
    assert(
        isNotNilObject(obj),
        `The "actual" argument in ${fooName} must be ${typeName}, %s was given`,
        obj
    );
}

function toHaveProp (key) {
    isObject(this.actual, 'expect(actual).toHaveProp()', 'an Object');
    assert(
        this.actual.hasOwnProperty(key),
        'expected object %s to have property %s',
        this.actual,
        key
    );
}

function toHaveEnumKey (key) {
    isObject(this.actual, 'expect(actual).toHaveEnumKey()', 'an Enum');
    assert(
        key in this.actual,
        'expected enum %s to have key %s',
        this.actual,
        key
    );
}

function toHaveEnumKeys (keys) {
    isObject(this.actual, 'expect(actual).toHaveEnumKeys()', 'an Enum');
    assert(
        enumHasKeys(this.actual)(keys),
        'expect enum %s to have all keys %s',
        this.actual,
        keys
    );
}

function toBeIn (obj) {
    isObject(obj, 'expect().toBeIn(actual)', 'an Object');
    assert(
        this.actual in obj,
        'expected key %s to be in object %o',
        this.actual,
        obj
    );
}

function toNotBeEditable () {
    isObject(this.actual, 'expect(actual).toNotBeEditable()', 'an Enum');
    assert(
        expect(() => this.actual.__$VALUE_TEST = 1).toThrow(),
        'expected object %s to not be editable',
        this.actual
    );
}

exports = module.exports = {
    toHaveProp,
    toHaveEnumKey,
    toHaveEnumKeys,
    toBeIn,
    toNotBeEditable,
};
