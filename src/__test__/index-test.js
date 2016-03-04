'use strict';

const expect = require('expect');
const expectEnum = require('..');

describe('expect-enum', () => {

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

});
