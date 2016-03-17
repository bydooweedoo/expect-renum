import { assert } from 'expect';
import {
    isObject,
    messageOrDefault,
    throws,
    editFirstKey,
    enumHasAllKeys,
    enumHasAnyKeys,
} from './helpers';

export function toHaveProp(key, message) {
    isObject(this.actual, 'expect(actual).toHaveProp()', 'an Object');
    assert(
        this.actual.hasOwnProperty(key),
        messageOrDefault(message, 'expected object %s to have property %s'),
        this.actual,
        key
    );
}

export function toNotHaveProp(key, message) {
    isObject(this.actual, 'expect(actual).toNotHaveProp()', 'an Object');
    assert(
        this.actual.hasOwnProperty(key) === false,
        messageOrDefault(message, 'expected object %s to not have property %s'),
        this.actual,
        key
    );
}

export function toHaveEnumKey(key, message) {
    isObject(this.actual, 'expect(actual).toHaveEnumKey()', 'an Enum');
    assert(
        key in this.actual,
        messageOrDefault(message, 'expected enum %s to have key %s'),
        this.actual,
        key
    );
}

export function toNotHaveEnumKey(key, message) {
    isObject(this.actual, 'expect(actual).toNotHaveEnumKey()', 'an Enum');
    assert(
        !(key in this.actual),
        messageOrDefault(message, 'expected enum %s to not have key %s'),
        this.actual,
        key
    );
}

export function toHaveEnumKeys(keys, message) {
    isObject(this.actual, 'expect(actual).toHaveEnumKeys()', 'an Enum');
    assert(
        enumHasAllKeys(this.actual)(keys) === true,
        messageOrDefault(message, 'expect enum %s to have all keys %s'),
        this.actual,
        keys
    );
}

export function toNotHaveEnumKeys(keys, message) {
    isObject(this.actual, 'expect(actual).toNotHaveEnumKeys()', 'an Enum');
    assert(
        enumHasAnyKeys(this.actual)(keys) === false,
        messageOrDefault(message, 'expect enum %s to not have any keys %s'),
        this.actual,
        keys
    );
}

export function toBeIn(obj, message) {
    isObject(obj, 'expect().toBeIn(actual)', 'an Object');
    assert(
        this.actual in obj,
        messageOrDefault(message, 'expected key %s to be in object %o'),
        this.actual,
        obj
    );
}

export function toNotBeIn(obj, message) {
    isObject(obj, 'expect().toNotBeIn(actual)', 'an Object');
    assert(
        !(this.actual in obj),
        messageOrDefault(message, 'expected key %s to not be in object %o'),
        this.actual,
        obj
    );
}

export function toBeEditable(message) {
    isObject(this.actual, 'expect(actual).toBeEditable()', 'an Object');
    assert(
        throws(() => editFirstKey(this.actual)) === false,
        messageOrDefault(message, 'expected object %s to be editable'),
        this.actual
    );
}

export function toNotBeEditable(message) {
    isObject(this.actual, 'expect(actual).toNotBeEditable()', 'an Object');
    assert(
        throws(() => editFirstKey(this.actual)) === true,
        messageOrDefault(message, 'expected object %s to not be editable'),
        this.actual
    );
}

export function toBeFrozen(message) {
    isObject(this.actual, 'expect(actual).toBeFrozen()', 'an Object');
    assert(
        Object.isFrozen(this.actual) === true,
        messageOrDefault(message, 'expect object %s to be frozen'),
        this.actual
    );
}

export function toNotBeFrozen(message) {
    isObject(this.actual, 'expect(actual).toNotBeFrozen()', 'an Object');
    assert(
        Object.isFrozen(this.actual) === false,
        messageOrDefault(message, 'expect object %s to not be frozen'),
        this.actual
    );
}

export default {
    toHaveProp,
    toNotHaveProp,
    toHaveEnumKey,
    toNotHaveEnumKey,
    toHaveEnumKeys,
    toNotHaveEnumKeys,
    toBeIn,
    toNotBeIn,
    toBeEditable,
    toNotBeEditable,
    toBeFrozen,
    toNotBeFrozen,
};
