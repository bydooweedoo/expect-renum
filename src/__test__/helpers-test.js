import expect from 'expect';
import * as helpers from '../helpers';

describe('helpers', () => {

    describe('#isObject', () => {

        it('should be a function', () => {
            expect(helpers.isObject).toBeA(Function);
        });

        it('should throw if given argument is not an object', () => {
            expect(() => helpers.isObject(null, 'fooName', 'an "Object"'))
                .toThrow('The "actual" argument in fooName must be an "Object", null was given');
        });

        it('should not throw if given argument is an object', () => {
            expect(() => helpers.isObject({}, 'fooName', 'an "Object"'))
                .toNotThrow();
        });

    });

    describe('#isPair', () => {

        it('should be a function', () => {
            expect(helpers.isPair).toBeA(Function);
        });

        it('should throw if given argument is not a pair', () => {
            expect(() => helpers.isPair(null, 'fooName', 'a "Pair"'))
                .toThrow('The "pair" argument in fooName must be a "Pair", null was given');
        });

        it('should not throw if given argument is a pair', () => {
            expect(() => helpers.isPair([1, 2], 'fooName', 'a "Pair"'))
                .toNotThrow();
        });

    });

    describe('#messageOrDefault', () => {

        it('should be a function', () => {
            expect(helpers.messageOrDefault).toBeA(Function);
        });

        it('should returns given message if string', () => {
            expect(helpers.messageOrDefault('1', '2')).toEqual('1');
        });

        it('should returns given default if message not string', () => {
            expect(helpers.messageOrDefault(null, '2')).toEqual('2');
            expect(helpers.messageOrDefault(1, '2')).toEqual('2');
            expect(helpers.messageOrDefault(true, '2')).toEqual('2');
            expect(helpers.messageOrDefault([], '2')).toEqual('2');
            expect(helpers.messageOrDefault({}, '2')).toEqual('2');
        });

    });

    describe('#isNotNilObject', () => {

        it('should be a function', () => {
            expect(helpers.isNotNilObject).toBeA(Function);
        });

        it('should returns true if given argument is an object and is not nil', () => {
            expect(helpers.isNotNilObject({})).toEqual(true);
            expect(helpers.isNotNilObject(new Date())).toEqual(true);
            expect(helpers.isNotNilObject([])).toEqual(true);
        });

        it('should returns false if given argument is not an object or is nil', () => {
            expect(helpers.isNotNilObject(null)).toEqual(false);
            expect(helpers.isNotNilObject(undefined)).toEqual(false);
            expect(helpers.isNotNilObject(true)).toEqual(false);
            expect(helpers.isNotNilObject('1')).toEqual(false);
        });

    });

    describe('#isNotNilPair', () => {

        it('should be a function', () => {
            expect(helpers.isNotNilPair).toBeA(Function);
        });

        it('should returns true if given argument is a pair and is not nil', () => {
            expect(helpers.isNotNilPair([1, 2])).toEqual(true);
            expect(helpers.isNotNilPair(['1', true])).toEqual(true);
            expect(helpers.isNotNilPair([null, null])).toEqual(true);
        });

        it('should returns false if given argument is not an object or is nil', () => {
            expect(helpers.isNotNilPair(null)).toEqual(false);
            expect(helpers.isNotNilPair(undefined)).toEqual(false);
            expect(helpers.isNotNilPair(true)).toEqual(false);
            expect(helpers.isNotNilPair([])).toEqual(false);
            expect(helpers.isNotNilPair(['1'])).toEqual(false);
            expect(helpers.isNotNilPair(['1', '2', '3'])).toEqual(false);
        });

    });

    describe('#enumHasAllKeys', () => {

        it('should be a function', () => {
            expect(helpers.enumHasAllKeys).toBeA(Function);
        });

        it('should returns true if given object has all given keys', () => {
            const keys = ['test1', 'test2'];

            expect(helpers.enumHasAllKeys({
                test1: 1,
                test2: 2,
            })(keys)).toEqual(true);
            expect(helpers.enumHasAllKeys({
                test1: 1,
                test2: 2,
                test3: 3,
            })(keys)).toEqual(true);
        });

        it('should returns false if given object does not have all given keys', () => {
            const keys = ['test1', 'test2'];

            expect(helpers.enumHasAllKeys({
                test3: 3,
            })(keys)).toEqual(false);
            expect(helpers.enumHasAllKeys({
                test1: 1,
            })(keys)).toEqual(false);
            expect(helpers.enumHasAllKeys({
                test1: 1,
                test3: 3,
            })(keys)).toEqual(false);
        });

    });

    describe('#enumHasAnyKeys', () => {

        it('should be a function', () => {
            expect(helpers.enumHasAnyKeys).toBeA(Function);
        });

        it('should returns true if given object has any given keys', () => {
            const keys = ['test1', 'test2'];

            expect(helpers.enumHasAnyKeys({
                test1: 1,
                test2: 2,
            })(keys)).toEqual(true);
            expect(helpers.enumHasAnyKeys({
                test1: 1,
                test3: 3,
            })(keys)).toEqual(true);
            expect(helpers.enumHasAnyKeys({
                test1: 1,
            })(keys)).toEqual(true);
        });

        it('should returns false if given argument does not have any given keys', () => {
            const keys = ['test1', 'test2'];

            expect(helpers.enumHasAnyKeys({
                test3: 3,
            })(keys)).toEqual(false);
            expect(helpers.enumHasAnyKeys({})(keys)).toEqual(false);
        });

    });

    describe('#throws', () => {

        it('should be a function', () => {
            expect(helpers.throws).toBeA(Function);
        });

        it('should returns true if given function throws', () => {
            expect(helpers.throws(() => {
                throw new Error('test');
            })).toEqual(true);
        });

        it('should returns false if given function does not throws', () => {
            expect(helpers.throws(() => new Error('test'))).toEqual(false);
        });

    });

    describe('#editFirstKey', () => {

        it('should be a function', () => {
            expect(helpers.editFirstKey).toBeA(Function);
        });

        it('should throw if editing frozen object', () => {
            expect(() => helpers.editFirstKey(Object.freeze({}))).toThrow();
            expect(() => helpers.editFirstKey(Object.freeze({test: true}))).toThrow();
        });

        it('should not throw if editing object', () => {
            expect(() => helpers.editFirstKey({})).toNotThrow();
            expect(() => helpers.editFirstKey({test: true})).toNotThrow();
        });

    });

});
