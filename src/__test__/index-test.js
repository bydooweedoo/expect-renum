'use strict';

const expect = require('expect');
const expectEnum = require('..');

describe('expect-renum', () => {

    before(() => expect.extend(expectEnum));

    describe('#toHaveProp', () => {

        it('should throw when the actual is not an object', () => {
            expect(() => expect('').toHaveProp('test')).toThrow("must be an Object");
            expect(() => expect(true).toHaveProp('test')).toThrow("must be an Object");
            expect(() => expect(null).toHaveProp('test')).toThrow("must be an Object");
        });

        it('should throw when an object does not have given property', () => {
            expect(() => expect({}).toHaveProp('test')).toThrow("to have property 'test'");
        });

        it('should not throw when an object have given property', () => {
            expect(() => expect({ test: true, }).toHaveProp('test')).toNotThrow("to have property 'test'");
        });

    });

    describe('#toNotHaveProp', () => {

        it('should throw when the actual is not an object', () => {
            expect(() => expect('').toNotHaveProp('test')).toThrow("must be an Object");
            expect(() => expect(true).toNotHaveProp('test')).toThrow("must be an Object");
            expect(() => expect(null).toNotHaveProp('test')).toThrow("must be an Object");
        });

        it('should throw when an object does not have given property', () => {
            expect(() => expect({test: true}).toNotHaveProp('test')).toThrow("to not have property 'test'");
        });

        it('should not throw when an object have given property', () => {
            expect(() => expect({ test2: true, }).toNotHaveProp('test')).toNotThrow("to not have property 'test'");
        });

    });

    describe('#toHaveEnumKey', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toHaveEnumKey('test')).toThrow("must be an Enum");
            expect(() => expect(true).toHaveEnumKey('test')).toThrow("must be an Enum");
            expect(() => expect(null).toHaveEnumKey('test')).toThrow("must be an Enum");
        });

        it('should throw when an enum does not have given property', () => {
            expect(() => expect({}).toHaveEnumKey('test')).toThrow("to have key 'test'");
        });

        it('should not throw when an object have given property', () => {
            expect(() => expect({ test: true, }).toHaveEnumKey('test')).toNotThrow("to have key 'test'");
        });

    });

    describe('#toHaveEnumKeys', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toHaveEnumKeys(['test'])).toThrow("must be an Enum");
            expect(() => expect(true).toHaveEnumKeys(['test'])).toThrow("must be an Enum");
            expect(() => expect(null).toHaveEnumKeys(['test'])).toThrow("must be an Enum");
        });

        it('should throw when an enum does not have given property', () => {
            expect(() => expect({}).toHaveEnumKeys(['test1', 'test2'])).toThrow("to have all keys [ 'test1', 'test2' ]");
        });

        it('should not throw when an object have given property', () => {
            expect(() => (expect({ test1: true, test2: false })
                .toHaveEnumKeys(['test1', 'test2'])))
                .toNotThrow("to have all keys [ 'test1', 'test2' ]");
        });

    });

    describe('#toBeIn', () => {

        it('should throw when the given arg is not an object', () => {
            expect(() => expect('key').toBeIn('test')).toThrow("must be an Object");
            expect(() => expect('key').toBeIn(true)).toThrow("must be an Object");
            expect(() => expect('key').toBeIn(null)).toThrow("must be an Object");
        });

        it('should throw when key is not in given object', () => {
            expect(() => expect('test').toBeIn({})).toThrow("expected key 'test' to be in object");
        });

        it('should not throw when key is in given object', () => {
            expect(() => expect('test').toBeIn({test: true})).toNotThrow("expected key 'test' to be in object");
        });

    });

    describe('#toBeEditable', () => {

        it('should throw when the actual is not an Object', () => {
            expect(() => expect('').toBeEditable()).toThrow("must be an Object");
            expect(() => expect(true).toBeEditable()).toThrow("must be an Object");
            expect(() => expect(null).toBeEditable()).toThrow("must be an Object");
        });

        it('should throw when object cannot be edited', () => {
            expect(() => expect(Object.freeze({test: true})).toBeEditable()).toThrow("to be editable");
        });

        it('should not throw when object can be edited', () => {
            expect(() => expect({test: true}).toBeEditable()).toNotThrow("to be editable");
        });

    });

    describe('#toNotBeEditable', () => {

        it('should throw when the actual is not an Object', () => {
            expect(() => expect('').toNotBeEditable()).toThrow("must be an Object");
            expect(() => expect(true).toNotBeEditable()).toThrow("must be an Object");
            expect(() => expect(null).toNotBeEditable()).toThrow("must be an Object");
        });

        it('should throw when object can be edited', () => {
            expect(() => expect({}).toNotBeEditable()).toThrow("to not be editable");
        });

        it('should not throw when object cannot be edited', () => {
            const obj = Object.freeze({test: true});

            expect(() => expect(obj).toNotBeEditable()).toNotThrow("to not be editable");
        });

    });

    describe('#toBeFrozen', () => {

        it('should throw when the actual is not an Object', () => {
            expect(() => expect('').toBeFrozen()).toThrow("must be an Object");
            expect(() => expect(true).toBeFrozen()).toThrow("must be an Object");
            expect(() => expect(null).toBeFrozen()).toThrow("must be an Object");
        });

        it('should throw when object is not frozen', () => {
            expect(() => expect({}).toBeFrozen()).toThrow("to be frozen");
        });

        it('should not throw when object is frozen', () => {
            const obj = Object.freeze({test: true});

            expect(() => expect(obj).toBeFrozen()).toNotThrow("to be frozen");
        });

    });

});
