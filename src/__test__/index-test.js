import expect from 'expect';
import expectRenum from '..';

describe('expect-renum', () => {

    before(() => expect.extend(expectRenum));

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
            expect(() => expect({test2: true}).toNotHaveProp('test')).toNotThrow("to not have property 'test'");
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
            expect(() => expect({test: true}).toHaveEnumKey('test')).toNotThrow("to have key 'test'");
        });

    });

    describe('#toNotHaveEnumKey', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toNotHaveEnumKey('test')).toThrow("must be an Enum");
            expect(() => expect(true).toNotHaveEnumKey('test')).toThrow("must be an Enum");
            expect(() => expect(null).toNotHaveEnumKey('test')).toThrow("must be an Enum");
        });

        it('should throw when an enum does have given property', () => {
            expect(() => expect({test: true}).toNotHaveEnumKey('test')).toThrow("to not have key 'test'");
        });

        it('should not throw when an enum does not have given property', () => {
            expect(() => expect({}).toNotHaveEnumKey('test')).toNotThrow("to not have key 'test'");
        });

    });

    describe('#toHaveEnumPair', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toHaveEnumPair(['test', true])).toThrow("must be an Enum");
            expect(() => expect(true).toHaveEnumPair(['test', true])).toThrow("must be an Enum");
            expect(() => expect(null).toHaveEnumPair(['test', true])).toThrow("must be an Enum");
        });

        it('should throw when the given pair is not a Pair', () => {
            expect(() => expect({}).toHaveEnumPair(['test'])).toThrow("must be a Pair");
            expect(() => expect({}).toHaveEnumPair(null)).toThrow("must be a Pair");
            expect(() => expect({}).toHaveEnumPair({})).toThrow("must be a Pair");
        });

        it('should throw when an enum does not have given pair', () => {
            expect(() => expect({}).toHaveEnumPair(['test', true])).toThrow("to have pair [ 'test', true ]");
        });

        it('should not throw when an object have given pair', () => {
            expect(() => expect({test: true}).toHaveEnumPair(['test', true])).toNotThrow("to have pair [ 'test', true ]");
        });

    });

    describe('#toNotHaveEnumPair', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toNotHaveEnumPair(['test', true])).toThrow("must be an Enum");
            expect(() => expect(true).toNotHaveEnumPair(['test', true])).toThrow("must be an Enum");
            expect(() => expect(null).toNotHaveEnumPair(['test', true])).toThrow("must be an Enum");
        });

        it('should throw when the given pair is not a Pair', () => {
            expect(() => expect({}).toNotHaveEnumPair(['test'])).toThrow("must be a Pair");
            expect(() => expect({}).toNotHaveEnumPair(null)).toThrow("must be a Pair");
            expect(() => expect({}).toNotHaveEnumPair({})).toThrow("must be a Pair");
        });

        it('should throw when an enum does have given pair', () => {
            expect(() => expect({test: true}).toNotHaveEnumPair(['test', true])).toThrow("to not have pair [ 'test', true ]");
        });

        it('should not throw when an object have given pair', () => {
            expect(() => expect({test1: true}).toNotHaveEnumPair(['test', true])).toNotThrow("to not have pair [ 'test', true ]");
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
                .toNotThrow();
        });

    });

    describe('#toNotHaveEnumKeys', () => {

        it('should throw when the actual is not an enum', () => {
            expect(() => expect('').toNotHaveEnumKeys(['test'])).toThrow("must be an Enum");
            expect(() => expect(true).toNotHaveEnumKeys(['test'])).toThrow("must be an Enum");
            expect(() => expect(null).toNotHaveEnumKeys(['test'])).toThrow("must be an Enum");
        });

        it('should throw when an enum does have all or any given keys', () => {
            expect(() => expect({
                test1: true,
                test2: true,
            }).toNotHaveEnumKeys([
                'test1',
                'test2',
            ])).toThrow("to not have any keys [ 'test1', 'test2' ]");
            expect(() => expect({
                test3: true,
                test2: true,
            }).toNotHaveEnumKeys([
                'test1',
                'test2',
            ])).toThrow("to not have any keys [ 'test1', 'test2' ]");
        });

        it('should not throw when an object have given property', () => {
            expect(() => (
                expect({
                    test3: true,
                    test4: false,
                }).toNotHaveEnumKeys([
                    'test1',
                    'test2',
                ])
            )).toNotThrow();
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
            expect(() => expect('test').toBeIn({test: true})).toNotThrow();
        });

    });

    describe('#toNotBeIn', () => {

        it('should throw when the given arg is not an object', () => {
            expect(() => expect('key').toNotBeIn('test')).toThrow("must be an Object");
            expect(() => expect('key').toNotBeIn(true)).toThrow("must be an Object");
            expect(() => expect('key').toNotBeIn(null)).toThrow("must be an Object");
        });

        it('should throw when key is in given object', () => {
            expect(() => expect('test').toNotBeIn({test: true})).toThrow("expected key 'test' to not be in object");
        });

        it('should not throw when key is not in given object', () => {
            expect(() => expect('test').toNotBeIn({})).toNotThrow();
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
            expect(() => expect({test: true}).toBeEditable()).toNotThrow();
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

            expect(() => expect(obj).toNotBeEditable()).toNotThrow();
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

            expect(() => expect(obj).toBeFrozen()).toNotThrow();
        });

    });

    describe('#toNotBeFrozen', () => {

        it('should throw when the actual is not an Object', () => {
            expect(() => expect('').toNotBeFrozen()).toThrow("must be an Object");
            expect(() => expect(true).toNotBeFrozen()).toThrow("must be an Object");
            expect(() => expect(null).toNotBeFrozen()).toThrow("must be an Object");
        });

        it('should throw when object is frozen', () => {
            expect(() => expect(Object.freeze({test: true})).toNotBeFrozen()).toThrow("to not be frozen");
        });

        it('should not throw when object not is frozen', () => {
            expect(() => expect({test: true}).toNotBeFrozen()).toNotThrow();
        });

    });

});
