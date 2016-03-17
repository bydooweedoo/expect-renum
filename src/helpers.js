import R from 'ramda';
import { assert } from 'expect';

export const enumHasAllKeys = Enum => R.reduce(
    (acc, key) => (acc ? R.has(key, Enum) : acc),
    true
);

export const enumHasAnyKeys = Enum => R.reduce(
    (acc, key) => (acc ? true : R.has(key, Enum)),
    false
);

export const isNotNilObject = R.both(
    R.is(Object),
    R.compose(R.not, R.isNil)
);

export const messageOrDefault = R.unapply(
    R.cond([
        [R.pipe(R.head, R.is(String)), R.head],
        [R.T, R.last],
    ])
);

export const throws = fn => {
    try {
        fn();
    } catch (error) {
        return true;
    }
    return false;
};

export const editFirstKey = obj => {
    'use strict';

    const keys = Object.keys(obj);
    const key = keys.length ? keys[0] : null;

    if (key) {
        obj[key] = '$$test'; // eslint-disable-line no-param-reassign
    } else {
        obj.__$TEST = '$$test'; // eslint-disable-line no-param-reassign
    }
};

export const isObject = R.curry((obj, fooName, typeName) => {
    assert(
        isNotNilObject(obj),
        `The "actual" argument in ${fooName} must be ${typeName}, %s was given`,
        obj
    );
});
